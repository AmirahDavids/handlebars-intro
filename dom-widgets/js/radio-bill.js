var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

  
var radioTemplateSource = document.querySelector(".radioTemplate").innerHTML;
var radioTemplate = Handlebars.compile(radioTemplateSource);
var insertRadioTemplate = document.querySelector(".insertRadioTemplate");

// instance
var textBillFactoryTwo = TextFactory();

window.addEventListener("load",function(){    
    var radioDataHTML = radioTemplate({
        totals:  textBillFactoryTwo.textBillTotals(),
        color:textBillFactoryTwo.colorString()
    });
    insertRadioTemplate.innerHTML = radioDataHTML;
});

// event
function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        // input
        var action = checkedRadioBtn.value;

        // process
        textBillFactoryTwo.textAddBill(action);
        
        //output
        var radioDataHTML = radioTemplate({
            totals:  textBillFactoryTwo.textBillTotals(),
            color:textBillFactoryTwo.colorString()
        });
        insertRadioTemplate.innerHTML = radioDataHTML;
    }
};

radioBillAddBtnElement.addEventListener('click', radioBillTotal);