
// Object state
class Smartphone {
    // Encapsulation
    private color: string;
    private brand: string;
    private _battery: number;

    //initialize object values via constructor
    constructor (color:string, brand:string) {
        this.color = color;
        this.brand = brand;
        this._battery = 100;
    }

    // Object behavior
    makeAPhoneCall(): void{
        if(this._battery === 0){
            throw "The cell phone battery has run out.";
        }
        this._battery -= 10;
    }

    get battery(): number {
        return this._battery;
    }

    recharge() {
        console.log('The Smartphone battery was recharged.')
        this._battery = 100;
    }

}

// We instantiate the class
let obj = new Smartphone('Black', 'iPhone');

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