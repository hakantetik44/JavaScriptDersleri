class Araba {

    constructor(marka, model, renk) {
        this.marka = marka;
        this.model = model;
        this.renk = renk;
    }

    calistir( ){

        console.log(`${this.marka} ${this.model} aracı çalışıyor.`);
    }
    durdur( ){
        console.log(`${this.marka} ${this.model} aracı durduruldu.`);

    }

}

let araba1 = new Araba("Mercedes", "G63" , "Kirmizi")
araba1.calistir();
araba1.durdur();




