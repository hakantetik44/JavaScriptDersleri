let insan = {
    ad: "Ali",
    yas: 30,
    meslek: "Muhendis",
    konus: function () {
        console.log("Merhaba , ben  " + this.ad)
    }
};

insan.konus();


let ogrenci = {
    ad: "Ayse",
    yas: 25,
    bolum: "Bilgisayar",
    notlar: [80, 90, 75]
}


let araba = {
    marka: "Toyota",
    model: "Camry",
    yil: 2022,
    çalıştır: function () {
        console.log("Araba çalışıyor.")
    }
}

console.log(araba.marka)
araba.çalıştır();

// Constructor (Yapıcı) Yöntemi

function Ogrenci(ad, yas, bolum) {
    this.ad = ad;
    this.yas = yas;
    this.bolum = bolum;
    this.selamlama = function () {
        console.log("Merhaba , ben  " + this.ad + " benim yasim " + this.yas + " ve ben  " + this.bolum + " bolumunde okuyorum ")
    }

}

let ogrenci1 = new Ogrenci("Ali", 20, "Bilgisayar");
let ogrenci2 = new Ogrenci("Ayse", 27, "Beden egitimi ogretmeni");


ogrenci1.selamlama();
ogrenci2.selamlama();

let öğrenciPrototip = {
    selamla: function () {
        console.log("Merhaba, ben " + this.ad);
    }
};

let öğrenci = Object.create(öğrenciPrototip);
öğrenci.ad = "Mehmet";
öğrenci.yaş = 23;

öğrenci.selamla();


let kisi = {ad: "veli", yas: 30}
console.log(kisi.ad)
console.log(kisi["yas"]);
kisi.meslek= "Fizikci";
kisi.yas= 45;

console.log(kisi)

delete kisi.meslek;
console.log(kisi)


class Kullanici {
    constructor(ad, email,yas) {
        this.ad = ad;
        this.email = email;
        this.yas = yas;
    }
    selamla() {
        console.log("Merhaba, benim adım " + this.ad);
        console.log("E-mailim: " + this.email);
        console.log("Yaşım: " + this.yas);
    }
}
let kullanici1 = new Kullanici("Ahmet","ahmet@gmail.com",19);
let kullanici2 = new Kullanici("ziya","ziyah@hotamil.com",27);

kullanici1.selamla();
kullanici2.selamla();


























