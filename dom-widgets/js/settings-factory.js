// This is the factory function
function SettingsFactory() {

    // variables
    var callTotalSettings = 0.00;
    var smsTotalSettings = 0.00;
    var totalSettings = 0.00;

    var callCostValue = 0.00;
    var smsCostValue = 0.00;
    var warningLevelValue = 0.00;
    var criticalLevelValue = 0.00;



    // functions to return
    function updateValues(inputObject) {


        if (checkInput(inputObject)) {
            callCostValue = Number(inputObject.callSetting);
            smsCostValue = Number(inputObject.smsSetting);
            warningLevelValue = Number(inputObject.warningSetting);
            criticalLevelValue = Number(inputObject.criticalSetting);
            return true;
        }
        return false;
    }

    // functions to use
    function checkInput(inpt) {
        for (const i in inpt) {
            var currentKeyValue = parseFloat(inpt[i])
            if (isNaN(currentKeyValue)) {
                return false;
            }
        }
        return true;
    }



    function addFunction(action) {
        if (totalSettings < criticalLevelValue) {
            switch (action) {
                case "call":
                    totalSettings += callCostValue;
                    callTotalSettings += callCostValue;
                    break;
                case "sms":
                    totalSettings += smsCostValue;
                    smsTotalSettings += smsCostValue;
                    break;
                default:
                    return false
            };
            return true
        }
        return false

    }

    function getColorString() {
        if (totalSettings === 0 ) {
            return "";
        }
        if (totalSettings >= warningLevelValue && totalSettings < criticalLevelValue) {
            return "warning";
        } else if (totalSettings >= criticalLevelValue) {
            return "danger";
        } else {
            return "";
        }
    }



    function settingsBillTotals() {
        return {
            totalSettings,
            callTotalSettings,
            smsTotalSettings
        };
    }


    // closure
    return {
        updateValues,
        settingsBillTotals,
        addFunction,
        getColorString
    }

} // factory ends here