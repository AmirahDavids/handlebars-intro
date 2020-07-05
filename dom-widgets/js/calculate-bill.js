var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringElement = document.querySelector(".billString");

// instanceof factory
var i = CalculateFactory();

//click event
function calculateBtnClicked() {
    // calculate bill using addTheBill
    var totalCost = i.add(billStringElement.value);
    //insert calculated total to the screen
    billTotalElement.innerHTML = totalCost;
    // get the color of based on  current total
    var color = i.color(totalCost);
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");
    if (color !== "") {
        billTotalElement.classList.add(color); 
    }
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);