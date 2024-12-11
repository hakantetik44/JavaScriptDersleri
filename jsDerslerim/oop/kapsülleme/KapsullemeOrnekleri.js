class Ogrenci{

   constructor(ad, notOrt) {
       this._ad = ad;
       this._notOrt = notOrt;
    }


    get ad() {
        return this._ad;
    }

    set ad(value) {
        this._ad = value;
    }

    get notOrt() {
        return this._notOrt;
    }

    set notOrt(yeniNot) {
       if(yeniNot>=0 && yeniNot<=100){
           this._notOrt =yeniNot ;
       }
       else{
           console.log("Notun 0 ile 100 arasında olması gerekiyor.");
       }
    }

}

let ogrenci = new Ogrenci("Ali",85);
console.log(`Ad: ${ogrenci.ad}, Not Ortalaması: ${ogrenci.notOrt}`);
ogrenci.ad = "Ayse";
console.log("Yeni ad :" , ogrenci.ad);
ogrenci.notOrt = 95;
console.log("Yeni not ortalaması :" , ogrenci.notOrt);
console.log("******************************")
ogrenci.notOrt = 120;
console.log("Yeni not ortalaması :" , ogrenci.notOrt);
























