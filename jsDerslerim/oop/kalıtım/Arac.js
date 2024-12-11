class Arac {

    constructor(marka, model, yıl) {
        this.marka = marka;
        this.model = model;
        this.yıl = yıl;
    }

    calistir() {
        console.log(`${this.marka} ${this.model} çalıştırıldı!`);
    }

    durdur() {
        console.log(`${this.marka} ${this.model} durduruldu!`);
    }

}

module.exports = Arac;