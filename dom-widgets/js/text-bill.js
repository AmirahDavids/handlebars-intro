window.addEventListener("DOMContentLoaded", function () {

    var billTypeTextElement = document.querySelector(".billTypeText");
    var callTotalOneElement = document.querySelector(".callTotalOne");
    var smsTotalOneElement = document.querySelector(".smsTotalOne");
    var totalOneElement = document.querySelector(".totalOne");
    var textTotalAddBtn = document.querySelector(".addToBillBtn");
    
    // 4
    var textTemplateSource = document.querySelector(".textTemplate").innerHTML;
    // 5
    var textTemplate = Handlebars.compile(textTemplateSource);
    // 6
    var insertTextTemplate = document.querySelector(".insertTextTemplate");

    // instance
    var textBillFactory = TextFactory();

    window.addEventListener("load",function(){    
        var textDataHTML = textTemplate({
            totals:  textBillFactory.textBillTotals(),
            color:textBillFactory.colorString()
        });
        insertTextTemplate.innerHTML = textDataHTML;
    });

    // event
    function textBillTotal() {
        // input
        var action = billTypeTextElement.value;
        // process
        textBillFactory.textAddBill(action);
        var totalsTexty = textBillFactory.textBillTotals();
        var colorTextTotal = textBillFactory.colorString();
        //output
    
        var textDataHTML = textTemplate({
            totals: totalsTexty,
            color:colorTextTotal
        });
        // 8
        insertTextTemplate.innerHTML = textDataHTML;
    }

    textTotalAddBtn.addEventListener('click', textBillTotal);
});
