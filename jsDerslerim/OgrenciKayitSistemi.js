let ogrenciler = [];
let dersler=["Matematik", "Fizik", "Kimya","Biyoloji"];
let aktifDonem = "Güz";

function ogrenciEkle(ad, soyad, yas, notlar, devamsizlik) {

    let ogrenci = {
        id: ogrenciler.length + 1,
        ad: ad,
        soyad: soyad,
        yas: yas,
        notlar: notlar,
        devamsizlik: devamsizlik,
        kayitTarihi: new Date().toLocaleDateString()
    };


    ogrenciler.push(ogrenci);
    return `${ad} ${soyad} başarıyla eklendi. Öğrenci ID: ${ogrenci.id}`;
}

function ogrenciSil(id) {
    let index = ogrenciler.findIndex(ogrenci => ogrenci.id === id);
    if(index !== -1) {
        let silinenOgrenci = ogrenciler.splice(index, 1);
        return `${silinenOgrenci[0].ad} ${silinenOgrenci[0].soyad} silindi.`;
    }
    return "Öğrenci bulunamadı.";
}

function ogrenciGuncelle(id, yeniBilgiler) {
    let ogrenci = ogrenciler.find(o => o.id === id);
    if(ogrenci) {
        Object.assign(ogrenci, yeniBilgiler);
        return "Bilgiler güncellendi.";
    }
    return "Öğrenci bulunamadı.";
}

function notOrtalamasiHesapla(notlar) {
    let toplam = 0;
    let dersSayisi = 0;

    for(let ders in notlar) {
        toplam += notlar[ders];
        dersSayisi++;
    }

    return dersSayisi > 0 ? toplam / dersSayisi : 0;
}

function harfNotuHesapla(ortalama) {
    if(ortalama >= 90) return "AA";
    if(ortalama >= 80) return "BA";
    if(ortalama >= 70) return "BB";
    if(ortalama >= 60) return "CB";
    return "FF";
}

function devamsizlikKontrol(devamsizlik) {
    const maksDevamsizlik = 20;
    let kalan = maksDevamsizlik - devamsizlik;

    if(kalan <= 0) {
        return "Devamsızlıktan kaldı";
    } else if(kalan <= 5) {
        return `Dikkat! Sadece ${kalan} gün devamsızlık hakkı kaldı`;
    }
    return `Devamsızlık durumu iyi. ${kalan} gün hakkı var`;
}


function tumOgrencileriListele() {
    console.log("\n----- ÖĞRENCİ LİSTESİ -----");
    ogrenciler.forEach(ogrenci => {
        let ortalama = notOrtalamasiHesapla(ogrenci.notlar);
        let harfNotu = harfNotuHesapla(ortalama);
        let devamsizlikDurumu = devamsizlikKontrol(ogrenci.devamsizlik);

        console.log(`
        ID: ${ogrenci.id}
        Ad Soyad: ${ogrenci.ad} ${ogrenci.soyad}
        Yaş: ${ogrenci.yas}
        Ortalama: ${ortalama.toFixed(2)}
        Harf Notu: ${harfNotu}
        Devamsızlık: ${devamsizlikDurumu}
        Kayıt Tarihi: ${ogrenci.kayitTarihi}
        ----------------------`);
    });
}

function basariliOgrencileriBul(minOrtalama = 70) {
    return ogrenciler.filter(ogrenci => {
        let ortalama = notOrtalamasiHesapla(ogrenci.notlar);
        return ortalama >= minOrtalama;
    });
}



console.log(ogrenciEkle("Ali", "Yılmaz", 20, {matematik: 85, fizik: 90, kimya: 75}, 5));
console.log(ogrenciEkle("Ayşe", "Demir", 19, {matematik: 95, fizik: 88, kimya: 92}, 3));
console.log(ogrenciEkle("Mehmet", "Kaya", 21, {matematik: 65, fizik: 70, kimya: 60}, 15));



tumOgrencileriListele();


let basarililar = basariliOgrencileriBul(80);
console.log("\nBaşarılı Öğrenciler (Ortalama >= 80):");
basarililar.forEach(ogrenci => {
    console.log(`${ogrenci.ad} ${ogrenci.soyad}`);
});


switch(aktifDonem) {
    case "Güz":
        console.log("\nGüz dönemi kayıtları devam ediyor");
        break;
    case "Bahar":
        console.log("\nBahar dönemi kayıtları devam ediyor");
        break;
    default:
        console.log("\nKayıt dönemi değil");
}