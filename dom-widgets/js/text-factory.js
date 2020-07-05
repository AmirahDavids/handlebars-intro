function TextFactory() {

    var textFactoryTotal = 0.00;
    var textFactoryCall = 0.00;
    var textFactorySms = 0.00;

    function addToBill(action) {
        if (action != "" && action != null) {
            switch (action) {
                case "call":
                    textFactoryCall += 2.75;
                    textFactoryTotal += 2.75;
                    break;
                case "sms":
                    textFactorySms += 0.75;
                    textFactoryTotal += 0.75;
                    break;
                default:
                    return false
            };
            return true;
        }
        return false;
    }

    function allTotals() {
        return {
            totalTextBill: parseFloat(textFactoryTotal).toFixed(2),
            callTextBill: parseFloat(textFactoryCall).toFixed(2),
            smsTextBill: parseFloat(textFactorySms).toFixed(2)
        };
    }

    function getColorString() {
        if (textFactoryTotal >= 30 && textFactoryTotal < 50) {
            return "warning";
        } else if (textFactoryTotal >= 50) {
            return "danger";
        } else {
            return "";
        }
    }

    return {
        textAddBill: addToBill,
        textBillTotals: allTotals,
        colorString: getColorString
    }
}