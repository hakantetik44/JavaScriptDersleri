class Hayvan {
    constructor(ad, tur) {
        this.ad = ad;
        this.tur = tur;
    }

    yemekYe() {
        console.log(`${this.ad} ${this.tur} yemek yiyor.`);
    }

    sesCikar() {
        throw new Error("Bu metot soyut bir metottur ve alt sınıf tarafından uygulanmalıdır!");
    }
}

// Alt sınıflar
class Kopek extends Hayvan {
    constructor(ad) {
        super(ad, "Köpek"); // Soyut sınıfa ad ve tür gönderiliyor
    }

    sesCikar() {
        console.log(`${this.ad} havlıyor: Hav Hav!`);
    }
}

class Kedi extends Hayvan {
    constructor(ad) {
        super(ad, "Kedi");
    }

    sesCikar() {
        console.log(`${this.ad} miyavlıyor: Miyav Miyav!`);
    }
}


let hayvanlar = [
    new Kopek("Karabaş"),
    new Kedi("Pamuk"),
    new Kopek("Çomar")
];

hayvanlar.forEach(hayvan => {
    hayvan.yemekYe();
    hayvan.sesCikar();
});
