window.addEventListener("DOMContentLoaded", function () {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;
    // compile the template
    var userTemplate = Handlebars.compile(templateSource);
    //place where template goes on screen
    var userDataElem = document.querySelector(".userData");
    var data = [{

        username:"Harry",
        firstName:"Harry",
        lastName: "Parry",
        email: "harry@gmail.com"
    },{

        username:"Daiyaanils",
        firstName:"Daiyaan",
        lastName: "Davids",
        email: "daiyaand@gmail.com"
    },{
        username:"Max",
        firstName:"Maxine",
        lastName: "Dodge",
        "email": "maxdodge@yahoo.com"
    }]
   
    var userDataHTML = userTemplate({
        users: data,
    });
    userDataElem.innerHTML = userDataHTML;
});

