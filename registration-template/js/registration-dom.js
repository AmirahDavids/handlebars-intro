window.addEventListener("DOMContentLoaded", function () {

    var inputBoxOne = document.getElementById("inputBoxOne");
    var inputBoxTwo = document.getElementById("inputBoxTwo");

    var addButtonOne = document.getElementById("addButtonOne");
    var addButtonTwo = document.getElementById("addButtonTwo");

    var townFilterOne = document.querySelector('.townOne');
    var townFilterTwo = document.querySelector('.townTwo');

    var messageOne = document.querySelector('.messageOne');
    var messageTwo = document.querySelector('.messageTwo');

    var resetBtnOne = document.getElementById("resetButtonOne")
    var resetBtnTwo = document.getElementById("resetButtonTwo")

    var listToBeDisplayed = document.getElementById("displayList")


    var storedPlain = localStorage['plain_plates'] ? JSON.parse(localStorage['plain_plates']) : {};
    var storedHandlebars = localStorage['handlebars_plates'] ? JSON.parse(localStorage['handlebars_plates']) : {};

    var registrationFactoryOne = Factory(storedPlain);
    var registrationFactoryTwo = Factory(storedHandlebars);


    var registrationTemplateSource = document.querySelector(".registrationTemplate").innerHTML;
    var registrationTemplate = Handlebars.compile(registrationTemplateSource);
    var insertRegistrationTemplate = document.querySelector(".insertRegistrationTemplate");



    window.addEventListener("load", function () {
        var listOne = registrationFactoryOne.getRegList().reverse();
        var listTwo = registrationFactoryTwo.getRegList().reverse();

        // Inserting plain data
        displayRegistrations(listOne);

        // Inserting handlebars data
        var registrationsDataHTML = registrationTemplate({
            plates: listTwo

        });
        insertRegistrationTemplate.innerHTML = registrationsDataHTML;
    });

    addButtonOne.addEventListener("click", function () {

        var input = inputBoxOne.value.toUpperCase();


        var formattedReg = registrationFactoryOne.formatPlate(input)

        var isValid = registrationFactoryOne.validateReg(formattedReg);

        if (isValid) {
            var added = registrationFactoryOne.addReg(formattedReg);
            if (added) {
                messageOne.innerHTML = "Added successfully";
                messageOne.classList.remove("red");
                messageOne.classList.add("green");
                createPlate(formattedReg);

                localStorage['plain_plates'] = JSON.stringify(registrationFactoryOne.getAllPlates());
            } else {
                messageOne.innerHTML = "Unsuccessful: Duplicate Registration";
                messageOne.classList.remove("green");
                messageOne.classList.add("red");
            }
        } else {
            messageOne.innerHTML = "Please enter a valid registration like this CA 123456";
            messageOne.classList.remove("green");
            messageOne.classList.add("red");

            inputBoxOne.value = "";
            inputBoxOne.focus();
        }
    });



    addButtonTwo.addEventListener("click", function () {

        var input = inputBoxTwo.value.toUpperCase();
        var formattedReg = registrationFactoryTwo.formatPlate(input)
        var isValid = registrationFactoryTwo.validateReg(formattedReg);

        if (isValid) {
            var added = registrationFactoryTwo.addReg(formattedReg);
            if (added) {
                messageTwo.innerHTML = "Added successfully";
                messageTwo.classList.remove("red");
                messageTwo.classList.add("green");
                createPlateHandlebars();
                localStorage['handlebars_plates'] = JSON.stringify(registrationFactoryTwo.getAllPlates());
            } else {
                messageTwo.innerHTML = "Unsuccessful: Duplicate Registration";
                messageTwo.classList.remove("green");
                messageTwo.classList.add("red");
            }
        } else {
            messageTwo.innerHTML = "Please enter a valid registration like this CA 123456";
            messageTwo.classList.remove("green");
            messageTwo.classList.add("red");
        }
        inputBoxTwo.value = "";
        inputBoxTwo.focus();
    });

    townFilterOne.addEventListener("change", function () {
        listToBeDisplayed.innerHTML = "";
        var list = registrationFactoryOne.filterByTown(townFilterOne.value);
        displayRegistrations(list);

    });

    townFilterTwo.addEventListener("change", function () {
        var list = registrationFactoryTwo.filterByTown(townFilterTwo.value);
        var registrationsDataHTML = registrationTemplate({
            plates: list
        });
        insertRegistrationTemplate.innerHTML = registrationsDataHTML;
    });

    resetBtnOne.addEventListener("click", function () {
        resetOne();
        listToBeDisplayed.innerHTML = "";
        messageOne.innerHTML = "successful: Cleared Registrations";
        messageOne.classList.remove("red");
        messageOne.classList.add("green");
    });
    resetBtnTwo.addEventListener("click", function () {
        resetTwo();
        insertRegistrationTemplate.innerHTML = "";
        messageTwo.innerHTML = "successful: Cleared Registrations";
        messageTwo.classList.remove("red");
        messageTwo.classList.add("green");
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
        var list = registrationFactoryTwo.getRegList().reverse();
        var registrationsDataHTML = registrationTemplate({
            plates: list
        });
        insertRegistrationTemplate.innerHTML = registrationsDataHTML;
    }

    function resetOne() {
        localStorage['plain_plates'] = JSON.stringify({});
    }
    function resetTwo() {
        localStorage['handlebars_plates'] = JSON.stringify({});
    }
});