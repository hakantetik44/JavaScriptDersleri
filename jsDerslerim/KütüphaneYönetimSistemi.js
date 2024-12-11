class Kitap {
    #adi;
    #yazar;
    #oduncDurum;
    #stok;

    constructor(adi, yazar, stok = 1) {
        this.#adi = adi;
        this.#yazar = yazar;
        this.#oduncDurum = false;
        this.#stok = stok;
    }

    get adi() {
        return this.#adi;
    }

    get yazar() {
        return this.#yazar;
    }

    get oduncDurum() {
        return this.#oduncDurum;
    }

    set oduncDurum(deger) {
        if (typeof deger === "boolean") {
            this.#oduncDurum = deger;
        } else {
            throw new Error("Geçersiz durum değeri!");
        }
    }

    get stok() {
        return this.#stok;
    }

    set stok(deger) {
        if (typeof deger === "number" && deger >= 0) {
            this.#stok = deger;
        } else {
            throw new Error("Stok değeri geçerli bir sayı olmalıdır!");
        }
    }

    bilgiGoster() {
        console.log(`Kitap: ${this.#adi}, Yazar: ${this.#yazar}, Ödünç Durumu: ${this.#oduncDurum ? "Ödünçte" : "Mevcut"}, Stok: ${this.#stok}`);
    }
}

class Kullanici {
    constructor(ad, soyad, tur) {
        this.ad = ad;
        this.soyad = soyad;
        this.tur = tur; // "Üye" veya "Misafir"
    }

    bilgiGoster() {
        console.log(`Ad: ${this.ad}, Soyad: ${this.soyad}, Tür: ${this.tur}`);
    }
}

class Kutuphane {
    constructor(ad) {
        this.ad = ad;
        this.kitaplar = [];
        this.kullanicilar = [];
    }

    kitapEkle(kitap) {
        this.kitaplar.push(kitap);
    }

    kullaniciEkle(kullanici) {
        this.kullanicilar.push(kullanici);
    }




    kitaplariListele() {
        console.log(`${this.ad}'sinin Kitap Listesi:`);
        this.kitaplar.forEach((kitap, index) => {
            console.log(`${index + 1}.`);
            kitap.bilgiGoster();
        });
    }

    kitapOduncAl(kullanici, kitapAdi) {
        const kitap = this.kitaplar.find(k => k.adi === kitapAdi);

        if (kitap && !kitap.oduncDurum && kitap.stok > 0) {
            kitap.oduncDurum = true;
            kitap.stok--;
            console.log(`${kullanici.ad} ${kullanici.soyad}, "${kitapAdi}" kitabını ödünç aldı.`);
        } else if (kitap && kitap.oduncDurum) {
            console.log(`"${kitapAdi}" kitabı zaten ödünç alınmış!`);
        } else if (kitap && kitap.stok === 0) {
            console.log(`"${kitapAdi}" kitabı stokta yok!`);
        } else {
            console.log(`"${kitapAdi}" kitabı kütüphanede bulunmamaktadır.`);
        }
    }

    kitapIadeEt(kitapAdi) {
        const kitap = this.kitaplar.find(k => k.adi === kitapAdi);

        if (kitap) {
            if (kitap.oduncDurum) {
                kitap.oduncDurum = false;
                kitap.stok++;
                console.log(`"${kitapAdi}" kitabı başarıyla iade edildi. Mevcut stok: ${kitap.stok}`);
            } else {
                console.log(`"${kitapAdi}" kitabı zaten mevcut durumda.`);
            }
        } else {
            console.log(`"${kitapAdi}" kitabı kütüphanede bulunmamaktadır.`);
        }
    }
}

const kutuphane = new Kutuphane("Merkez Kütüphane");

kutuphane.kitapEkle(new Kitap("Savaş ve Barış", "Tolstoy", 5));
kutuphane.kitapEkle(new Kitap("1984", "George Orwell", 3));
kutuphane.kitapEkle(new Kitap("Dönüşüm", "Kafka", 2));

const uye = new Kullanici("Ali", "Yılmaz", "Üye");
const misafir = new Kullanici("Fatma", "Kaya", "Misafir");
kutuphane.kullaniciEkle(uye);
kutuphane.kullaniciEkle(misafir);

kutuphane.kitaplariListele();

kutuphane.kitapOduncAl(uye, "1984");
kutuphane.kitapOduncAl(misafir, "Savaş ve Barış");

kutuphane.kitapIadeEt("1984");

kutuphane.kitaplariListele();
