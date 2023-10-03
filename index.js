// Object state
var Smartphone = /** @class */ (function () {
    //initialize object values via constructor
    function Smartphone(color, brand) {
        this.color = color;
        this.brand = brand;
        this._battery = 100;
    }
    // Object behavior
    Smartphone.prototype.makeAPhoneCall = function () {
        if (this._battery === 0) {
            throw "The cell phone battery has run out.";
        }
        this._battery -= 10;
    };
    Object.defineProperty(Smartphone.prototype, "battery", {
        get: function () {
            return this._battery;
        },
        enumerable: false,
        configurable: true
    });
    Smartphone.prototype.recharge = function () {
        this._battery = 100;
    };
    return Smartphone;
}());
// We instantiate the class
var obj = new Smartphone('Negro', 'iPhone');
// We use the class
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
