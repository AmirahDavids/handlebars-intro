// two params
describe("The updateValues function", function () {
    it("should update the values of the SettingsFactory Instance", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: "1.25",
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        assert.equal(true, Instance.updateValues(input))
    });
    it("should update the values of the SettingsFactory Instance", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: "Muj",
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        assert.equal(false, Instance.updateValues(input))
    });
    it("should update the values of the SettingsFactory Instance", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: 0.15,
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        assert.equal(true, Instance.updateValues(input))
    });
});

describe("The addFunction method", function () {
    it("should return true if call was added", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: "1.25",
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        Instance.updateValues(input)
        assert.equal(true, Instance.addFunction("call"))
    });
    it("should return true if sms was added", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: "1.25",
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        Instance.updateValues(input)
        assert.equal(true, Instance.addFunction("sms"))
    });
    it("should return false if action is not call or sms", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: "1.25",
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        Instance.updateValues(input)
        assert.equal(false, Instance.addFunction("data"))
    });
});

describe("The settingsBillTotals function", function () {
    it("should return the correct totals for an instance", function () {
        var myInstance = SettingsFactory()
        var data = {
            callSetting: "2.55",
            smsSetting: "0.65",
            warningSetting: "30.00",
            criticalSetting: "50.00"
        }
        myInstance.updateValues(data)
        myInstance.addFunction("call")
        var totals = myInstance.settingsBillTotals()
        assert.deepEqual({
            totalSettings: 2.55,
            callTotalSettings: 2.55,
            smsTotalSettings: 0.00
        }, totals)
    });
    it("should return the correct totals for an instance", function () {
        var myInstance = SettingsFactory()
        var data = {
            callSetting: "2.55",
            smsSetting: "0.65",
            warningSetting: "30.00",
            criticalSetting: "50.00"
        }
        myInstance.updateValues(data)
        myInstance.addFunction("call")
        myInstance.addFunction("sms")
        myInstance.addFunction("call")
        myInstance.addFunction("sms")
        var totals = myInstance.settingsBillTotals()
        console.log(totals);
        
        assert.deepEqual({
            totalSettings: 6.40,
            callTotalSettings: 5.10,
            smsTotalSettings: 1.30
        }, totals)
    });
    it("should return the correct totals for an instance", function () {
        var myInstance = SettingsFactory()
        var data = {
            callSetting: "2.00",
            smsSetting: "0.65",
            warningSetting: "30.00",
            criticalSetting: "50.00"
        }
        myInstance.updateValues(data)
        myInstance.addFunction("call")
        myInstance.addFunction("call")
        myInstance.addFunction("call")
        myInstance.addFunction("call")
        myInstance.addFunction("call")
        var totals = myInstance.settingsBillTotals()
        assert.deepEqual({
            totalSettings: 10.00,
            callTotalSettings: 10.00,
            smsTotalSettings: 0.00
        }, totals)
    });
});

describe("The getColorString (settings widget)", function () {
    it("should return appropriate color string", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: "1.25",
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        Instance.updateValues(input)
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        assert.equal("",Instance.getColorString() )
    });
    it("should return appropriate color string", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: "1.25",
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        Instance.updateValues(input)
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")

        assert.equal("danger",Instance.getColorString() )
    });
    it("should return appropriate color string", function () {
        var Instance = SettingsFactory();
        var input = {
            callSetting: "1.25",
            smsSetting: "0.25",
            warningSetting: "7.25",
            criticalSetting: "10.25"
        }
        Instance.updateValues(input)
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
        Instance.addFunction("call")
      
        assert.equal("warning",Instance.getColorString() )
    });
});