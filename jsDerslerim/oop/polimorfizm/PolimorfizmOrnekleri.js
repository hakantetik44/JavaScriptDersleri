class Hayvan{

    constructor(ad){
        this.ad = ad;
    }

    sesVer(){
        console.log('Hayvan ses çıkartıyor.');
    }

    hareket(){
        console.log('Hayvan hareket ediyor.');
    }

}

class Kedi extends Hayvan{
    sesVer(){
        console.log(`${this.ad} miyavlıyor: Miyav Miyav!`);
    }

    hareket(){
        console.log(`${this.ad} koşarak hareket ediyor.`);
    }

    tirmala(){
        console.log(`${this.ad} tirmaliyor.`);
    }

}

class Köpek extends Hayvan{
    sesVer(){
        console.log(`${this.ad} havlıyor: Hav Hav!`);
    }

    hareket(){
        console.log(`${this.ad} koşuyor`);
    }

    kalk(){
        console.log(`${this.ad} kalkıyor`);
    }
}

class Kus extends Hayvan{
    sesVer(){
        console.log(`${this.ad} ötüyor: Cik Cik!`);
    }

    hareket() {
        console.log(`${this.ad} uçuyor`);
    }
}

function hayvanlariSeslendir(hayvan){
    hayvan.sesVer();
    hayvan.hareket();

}

let kopek = new Köpek('Karabas');
let kedi = new Kedi('Bosna');
let kus = new Kus('Kaplan');

hayvanlariSeslendir(kopek);
hayvanlariSeslendir(kedi);
hayvanlariSeslendir(kus);


let hayvanlar = [
    new Köpek("Karabaş"),
    new Kedi("Pamuk"),
    new Kus("Bülbül")
]


hayvanlar.forEach(hayvan => {
    hayvan.sesVer();
    hayvan.hareket();
});