/*let isim = "John Doe";
console.log("Onun adi : " + isim);


const yas = 25;
console.log("yasi: " + yas);

var okul = "Istanbul Üniversitesi";
console.log("Okul: " + okul);


let isim = "Ahmet";
let soyisim = "Yıldırım";
let adres= "Adalet Mahallesi, 1234 Sokak";
let yas = 30;
let boy = 1.75;



console.log("Adı: " + isim + ", Soyadı: " + soyisim);

let tamIsim= isim + " " + soyisim;
console.log("Tam İsim: " + tamIsim);

let tamIsim2 = `${isim} ${soyisim}`;
console.log("Tam İsim 2: " + tamIsim2);

console.log("yasi "+ yas +" " + "boyu: "+" "+  boy);

let boyVeYas= boy + " " + yas;
console.log("Boy ve Yaş: " + boyVeYas);

let toplam = 10 + 5;
console.log("Toplam: " + toplam);

let fark = 10 - 5;
console.log("Fark: " + fark);

let carpma = 10 * 5;
console.log("Çarpma: " + carpma);

let bolme = 10 / 5;
console.log("Bölme: " + bolme);

let esitmi= 5===5;
console.log("5'ün 3'den büyük mü?: " + esitmi);

let tanimsiz;
console.log("Tanımsız Değişken: " + tanimsiz);

let isim= null;
console.log("Adı: " + isim);

let sayi = 42;
let metinSayi =String(sayi); //"42
let metinSayi2 = sayi.toString();
console.log(metinSayi + " "+ metinSayi2)

let metinsayi3= "123";
let sayi3 = parseInt(metinsayi3);
let sayi4 = parseFloat(metinsayi3);
let sayi5 = Number(metinsayi3);
console.log(sayi3 + " "+ sayi4 + " "+ sayi5);

let sayiBoolean= Boolean(1);
let metinBoolean= Boolean("");
console.log(sayiBoolean + " "+ metinBoolean);


let DogumYili = 2000;
let suankiYili =2024;
let yasHesaplama = suankiYili - DogumYili;
console.log("Yasınız: " + yasHesaplama);
console.log(`Yaşınız: ${yasHesaplama}`);

let fahrenheit  = 100;
let celsius = (fahrenheit - 32) * 5/9;
console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);

let a = 10;
let b = 20;

let toplam = a + b;
console.log("Toplam: " + toplam);

let fark = a - b;
console.log("Fark: " + fark);

let carpma = a * b;
console.log("Çarpma: " + carpma);

let us = a**2;
console.log("Karesi: " + us);

let sayi= 5 ;
sayi++;
console.log("Artırmış Sayı: " + sayi);

sayi--;
console.log("Azaltmış Sayı: " + sayi);
let x = 5;
let y= x++;
console.log(x+y);


let m = 5;
let n = ++m;
console.log(n);
console.log(m);

let x = 5;
let y = "5";
console.log(x==y);
console.log(x===y);
console.log(x!=y);
console.log(x!==y);
console.log(x>3);
console.log(x<3);
console.log(x>=3);
console.log(x<=3);


let yas =18;
let ogrenci =true;
let ehliyetAlabilir= yas>=18;
console.log("Ehliyet Alabilir: " + ehliyetAlabilir);
let indirimliGiris= yas<30 && ogrenci;
console.log("Indirimli Giriş: " + indirimliGiris);

let ucretliGiris= yas<6 || yas>=65;
console.log("Ücretli Giriş: " + ucretliGiris);

let yetiskinDegil = !(yas>=18);
console.log("Yetiskin Değil: " + yetiskinDegil);

let kosul =(yas>=18 && ogrenci) || (yas<30 && ogrenci) || (yas<6 && yas>=30) || (yas>65);
console.log("Kosul: " + kosul);


let sayi = 10;
sayi+=5;
sayi-=3;
sayi*=2;
console.log("Artırmış Sayı: " + sayi);


let vize= 60;
let final= 59;
let ortalama = (vize* 0.4)+ (final*0.6);
console.log(`Ortalama: ${ortalama}`);
let gectiMi= ortalama>=59;
console.log(`Dersten geçti mi?: ${gectiMi}`);



let fiyat=100;
let ogrenciMi= false;
let indirimliMi= true;

let sonFiyat= fiyat;

if(ogrenciMi && indirimliMi){
    sonFiyat -= sonFiyat*0.7;//30
}else if(ogrenciMi){
    sonFiyat -= sonFiyat*0.8;//20
} else if(indirimliMi){
    sonFiyat -= sonFiyat*0.9; //10
}

console.log(`Odenecek tutar: ${sonFiyat} TL`);



let yas = 17;
if(yas>=18){
    console.log("Ehliyet alabilirsin");
}
else {
    console.log("Ehliyet alamazsin");
}

let not = 10;
 if(not>=90){
     console.log("Harf notu: AA");
 }
 else if(not>=80){
     console.log("Harf notu: BA");
 }
 else if(not>=70){
     console.log("Harf notu: BB");
 }
 else if(not>=60){
     console.log("Harf notu: CB");
 }
 else {
     console.log("Harf notu: FF");
 }



let kullaniciAdi = "admin";
let sifre = "123456";

if(kullaniciAdi === "admin"){
    if(sifre === "123456"){
        console.log("Giriş başarılı");
    } else {
        console.log("Hatalı şifre");
    }
} else {
    console.log("Hatalı kullanıcı adı");
}

let gun="Salı";

switch(gun){
    case "Pazartesi":
        console.log("Haftanin ilk gunu Pazartesi");
        break;
    case "Salı":
        console.log("Gününüz Salı");
        break;
    case "Çarşamba":
        console.log("Gününüz Carşamba");
        break;
    case "Perşembe":
        console.log("Gününüz Perşembe");
        break;
    case "Cuma":
        console.log("Gününüz Cuma");
        break;
    case "Cumartesi":
        console.log("Gününüz Cumartesi");
        break;
    case "Pazar":
        console.log("Gününüz Pazar");
        break;
    default:
        console.log("Hatalı gün");
}




let gün = "Cumas";

switch (gün) {
    case "Pazartesi":
        console.log("Haftanın ilk günü");
        break;
    case "Salı":
    case "Çarşamba":
    case "Perşembe":
        console.log("Hafta içi");
        break;
    case "Cuma":
        console.log("Hafta sonu yaklaşıyor");
        break;
    case "Cumartesi":
    case "Pazar":
        console.log("Hafta sonu");
        break;
    default:
        console.log("Geçersiz gün");
}




let yas = 10;
let durum = yas>=18? "Ehliyet alabilirsin" : "Ehliyet alamazsin";
console.log(durum);

let not = 43;
let harfNotu = not>=90? "AA" : not>=80? "BA" : not>=70? "BB" : not>=60? "CB" : "FF";
console.log(`Harf notu: ${harfNotu}`);


let sayi1= 10;
let sayi2= 5;
let islem= "*";

switch(islem){
    case "+":
        console.log(sayi1 + sayi2);
        break;
    case "-":
        console.log(sayi1 - sayi2);
        break;
    case "*":
        console.log(sayi1 * sayi2);
        break;
    case "/":
        console.log(sayi1 / sayi2);
        break;
    default:
        console.log("Geçersiz işlem");
}


for(let i=0; i<=5;i++){
    console.log((i));
}

let meyveler= ["Elma", "Armut", "Kivi", "Portakal", "Mandarin"];
for(let i=0; i<meyveler.length; i++){
    console.log((meyveler[i]));
}

for(let meyve of meyveler){
    console.log((meyve));
}


let kisi = {ad: "Ali", yas: 30, meslek: "Muhendis"};
for(let key in kisi){
    console.log(`${key}: ${kisi[key]}`)
}


let sayac = 5;
while(sayac < 10){
    console.log(sayac);
    sayac++;
}

let sayi =1;
do {
    console.log(sayi);
    sayi++;
} while(sayi <= 5);


for(let i=0; i<=5; i++){
    if(i===2)break;
    console.log(i);
}


for(let i=0; i<=5; i++){
    if(i===2)continue;
    console.log(i);
}



let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sayilar.forEach(sayi => {console.log(sayi*2);});

let ikiKati =sayilar.map(sayi => sayi*2);
console.log(ikiKati);

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ciftSayilar = sayilar.filter(sayi => sayi%2 === 0);
console.log(ciftSayilar);

let tekSayilar = sayilar.filter(sayi => sayi%2!== 0);
console.log(tekSayilar);




for(let i=0; i<10;i++){
    for(let j=0; j<10; j++){
        console.log((i)*(j));
        console.log(`${i} x ${j} = ${i * j}`);

    }
    console.log("-----------");
}


function  MerhabaDunya() {
    console.log("Merhaba Dünya!");
}

MerhabaDunya();


function selamVer(isim) {
    console.log(`Selam, ${isim}!`);
    console.log("Bu bir JavaScript fonksiyonu.");
}


selamVer("Ahmet");

function topla(a, b) {
    console.log(a + b);
}

topla(5, 7);

function carp(a, b) {
    return a * b;
}
let sonuc = carp(5, 7);
console.log(sonuc);


function kisiBilgileri(ad, yas) {
    return {
        ad:ad,
        yas: yas,
        yetiskinMi:yas>=18
    }
}

let kisi1 = kisiBilgileri("Ahmet", 25);
console.log(kisi1.ad);
console.log(kisi1.yetiskinMi);
console.log(kisi1.yas);


function selam(isim="Ziyaretçi") {
    console.log(`Selam, ${isim}!`);
}
selam();
selam("Mehmet");

function kare(x) {
    return x*x;
}

let sonuc = kare(5);
console.log(sonuc);

const kareAl =(x) => x*x;

console.log(kareAl(7));

const hesapla = (a, b) => {
    let toplam = a + b;
    let cikarim = a - b;
    let carpim = a * b;
    return {toplam, cikarim, carpim};
}

let hesaplayalim = hesapla(5, 7);
console.log(`Toplam: ${hesaplayalim.toplam}`);
console.log(`Çıkarma: ${hesaplayalim.cikarim}`);
console.log(`Çarpma: ${hesaplayalim.carpim}`);


function HesapMakinesi(sayi1,sayi2,islem) {
    switch(islem){
        case "+":
            return sayi1 + sayi2;
        case "-":
            return sayi1 - sayi2;
        case "*":
            return sayi1 * sayi2;
        case "/":
            return sayi1 / sayi2;
        default:
            return "Geçersiz işlem";
    }
}

console.log(HesapMakinesi(5, 3, "+"));
console.log(HesapMakinesi(5, 3, "-s"));



let meyveler = ["Elma", "Armut", "Kivi", "Portakal", "Mandarin"];

let sayilar = new Array(10,11,12,13);

let bosDizi= []

let karisik=[
    'ali',
    25,
    true,
    {ad:"ali", yas:25},
    ['kedi','kopek']
]

console.log(meyveler[0]);
console.log(meyveler[meyveler.length-2])

meyveler[0]='kayisi';
console.log(meyveler);

console.log(meyveler.length);



let matris = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matris[2][2]);




dizi.push('f');
console.log(dizi);
dizi.unshift('x');
console.log(dizi);
let ilkEleman = dizi.shift();
console.log(ilkEleman);

let dizi = ['a', 'b', 'c', 'd', 'e'];
let parca =dizi.slice(1, 3);
console.log(parca);


console.log(sayilar.includes(3));
console.log(sayilar.indexOf(4));
console.log(sayilar.lastIndexOf(5));
*/
let sayilar = [1, 2, 3, 4, 5];
let buyukSayiIndex= sayilar.findIndex(sayi => sayi > 3);
console.log(buyukSayiIndex);

let buyuksayi = sayilar.find(sayi => sayi > 3);
console.log(buyuksayi);




let ogrenciler = [
    {ad: "Ali", notlar: [80, 90, 75]},
    {ad: "Veli", notlar: [70, 85, 95]},
    {ad: "Ayse", notlar: [65, 80, 70]},
    {ad: "Fatma", notlar: [95, 90, 85]},
    {ad: "Selim", notlar: [85, 75, 90]}
]

ogrenciler.forEach(ogrenci => {
    let notOrtalamasi = ogrenci.notlar.reduce((toplam, not) => toplam + not, 0) / ogrenci.notlar.length;
    console.log(`${ogrenci.ad}'in not ortalaması: ${notOrtalamasi}`);
})
  console.log('*******************')
let enYuksekNot = ogrenciler.reduce((enYuksekNot, ogrenci) => {
    let ogrenciNotOrtalamasi = ogrenci.notlar.reduce((toplam, not) => toplam + not, 0) / ogrenci.notlar.length;
    return enYuksekNot > ogrenciNotOrtalamasi? enYuksekNot : ogrenciNotOrtalamasi;
})

console.log("En yüksek not ortalaması:", enYuksekNot);

































































































