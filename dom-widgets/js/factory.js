function CalculateFactory() {

    function addTheBill(billString) {
        var list = billString.split(',');
        var total = 0.00;
        for (var i = 0; i < list.length; i = i + 1) {
            var action = list[i].trim();
            switch (action) {
                case "call":
                    total += 2.75;
                    break;
                case "sms":
                    total += 0.75;
                    break;
            };
        };
        return total.toFixed(2);
    }

    function getColorString(tot) {
        if (tot > 20 && tot < 30) {
            return "warning";
        } else if (tot >= 30) {
            return "danger";
        } else {
            return "";
        }
    }

    return {
        add: addTheBill,
        color: getColorString
    }
}