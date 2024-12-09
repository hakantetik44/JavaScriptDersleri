let insan = {
    ad: "Ali",
    yas: 30,
    meslek: "Muhendis",
    konus: function () {
        console.log("Merhaba , ben  "  + this.ad)
    }};

    insan.konus();


    let ogrenci= {
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
    this.selamlama = function (){
        console.log("Merhaba , ben  "  + this.ad + " benim yasim " + this.yas + " ve ben  " + this.bolum + " bolumunde okuyorum ")
    }

}

let ogrenci1 = new Ogrenci("Ali",20,"Bilgisayar");
let ogrenci2 = new Ogrenci("Ayse",27,"Beden egitimi ogretmeni");


ogrenci1.selamlama();
ogrenci2.selamlama();






















