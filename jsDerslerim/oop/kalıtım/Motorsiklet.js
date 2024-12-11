import Arac from "./Arac.js";

class Motorsiklet extends Arac {

    constructor(marka, model, yıl, tip) {
        super(marka, model, yıl);
        this.tip = tip;
    }

    gösterTip() {
        console.log(`Bu motosikletin tipi: ${this.tip}`);
    }
}

console.log("****************************************************************Motosiklet*********************")
let motor = new Motorsiklet("Yamaha", "R6", 2023, "Spor")
motor.calistir();
motor.gösterTip();
motor.durdur();