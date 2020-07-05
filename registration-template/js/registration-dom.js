window.addEventListener("DOMContentLoaded", function () {

    var inputBox = document.getElementById("inputBox")
    var addButton = document.getElementById("addButton");
    var townSelect = document.querySelector('.town');


    var listToBeDisplayed = document.getElementById("displayList")

    var resetBtn = document.getElementById("resetButton")

    var stored = localStorage['plates'] ? JSON.parse(localStorage['plates']) : {};

    var registrationFactory = Factory(stored);

    var registrationTemplateSource = document.querySelector(".registrationTemplate").innerHTML;
    var registrationTemplate = Handlebars.compile(registrationTemplateSource);
    var insertRegistrationTemplate = document.querySelector(".insertRegistrationTemplate");

 

    window.addEventListener("load", function () {
        // Withour Handlebars
        var list = registrationFactory.getRegList().reverse();
        displayRegistrations(list);
        // Handlebars
        var registrationsDataHTML = registrationTemplate({
            plates:  list
        });
        insertRegistrationTemplate.innerHTML = registrationsDataHTML;
    });

    addButton.addEventListener("click", function () {

        var input = inputBox.value.toUpperCase();


        var formattedReg = registrationFactory.formatPlate(input)

        var isValid = registrationFactory.validateReg(formattedReg);

        if (isValid) {
            var added = registrationFactory.addReg(formattedReg);
            if (added) {
                createPlate(formattedReg);
                createPlateHandlebars();
                var mapp = registrationFactory.getAllPlates();
                localStorage['plates'] = JSON.stringify(mapp);
            }
        } else {
            message.innerHTML = "Please enter a valid registration like this CA 123456";
        }
        inputBox.value = "";
        inputBox.focus();
    });

    townSelect.addEventListener("change", function () {
        listToBeDisplayed.innerHTML = "";

        var list = registrationFactory.filterByTown(townSelect.value);
        displayRegistrations(list);
        var registrationsDataHTML = registrationTemplate({
            plates:  list
        });
        insertRegistrationTemplate.innerHTML = registrationsDataHTML;

    });

    resetBtn.addEventListener("click", function () {
        reset();
        location.reload();
    });

    function displayRegistrations(list) {
        for (var i = 0; i < list.length; i++) {
            createPlate(list[i]);
        }
    }

    function createPlate(input) {
        var newListItem = document.createElement('li');
        newListItem.textContent = input.toUpperCase();
        newListItem.classList.add("number-plates")
        listToBeDisplayed.appendChild(newListItem);
        listToBeDisplayed.insertBefore(newListItem, listToBeDisplayed.childNodes[0]);
    }

    function createPlateHandlebars() {
        var list = registrationFactory.getRegList().reverse();
        var registrationsDataHTML = registrationTemplate({
            plates:  list
        });
        insertRegistrationTemplate.innerHTML = registrationsDataHTML;
    }

    function reset() {
        localStorage.clear("registrations");
    }
});