window.addEventListener("DOMContentLoaded", function () {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;
    // compile the template
    var userTemplate = Handlebars.compile(templateSource);
    //place where template goes on screen
    var userDataElem = document.querySelector(".userData");

   
    var userDataHTML = userTemplate({
        users: data,
    });
    userDataElem.innerHTML = userDataHTML;
});

