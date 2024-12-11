import Arac from "./Arac.js";


class Araba extends Arac  {

    constructor(marka, model, yıl, renk) {
        super(marka, model, yıl);
        this.renk = renk;
    }

    gösterRenk() {
        console.log(`Bu arabanın rengi: ${this.renk}`);
    }

}

let araba = new Araba("Toyota" ,"Corolla",2025,"Kirmizi")
araba.calistir()
araba.gösterRenk();


