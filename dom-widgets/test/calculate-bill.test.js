describe("The addTheBill function", function () {
    it("should calculate the bill for a given string", function () {
        var object = CalculateFactory();
        assert.equal(2.75, object.add("call"))
    });
    it("should calculate the bill for a given string", function () {
        var object = CalculateFactory();
        assert.equal(19.25, object.add("call,call,call,call,call,call,call"))
    });
    it("should calculate the bill for a given string", function () {
        var object = CalculateFactory();
        assert.equal(22.00, object.add("call,call,call,call,call,call,call,call"))
    });
    it("should calculate the bill for a given string", function () {
        var object = CalculateFactory();
        assert.equal(0.75, object.add("sms"))
    });
    it("should calculate the bill for a given string", function () {
        var object = CalculateFactory();
        assert.equal(22.25, object.add("call,call,sms,call,call,call,sms,call,sms,call,sms"))
    });
    it("should calculate the bill for a given string", function () {
        var object = CalculateFactory();
        assert.equal(25.750, object.add("call,call,call,call,call,sms,call,call,call,sms,sms,sms,sms"))
    });
});

describe("The getColorString function", function () {
    it("should return the color string ", function () {
        var object = CalculateFactory();
        assert.equal("",object.color(object.add("call")) )
    });
    it("should return the color string ", function () {
        var object = CalculateFactory();
        assert.equal("danger",object.color(object.add("call,call,call,call,call,sms,call,call,call,call,call,call")) )

    });  it("should return the color string ", function () {
        var object = CalculateFactory();
        assert.equal("warning",object.color(object.add("call,sms,call,call,sms,sms,call,call,call,call,call,call")) )
    });
});