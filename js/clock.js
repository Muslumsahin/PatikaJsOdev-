let getName = prompt("İsminizi Giriniz");
//Kullanıcıdan prompt() ile ismini aldık ve getName isimli bir değişkene atadık.
document.getElementById("myName").innerHTML = getName;
//Kullanıcıdan aldığımız bilgiyi innerHTML metodu ile myName id'li span etiketine yazdırdık.

function showTime(){
const today = new Date();
// Şuanki tarihimizi today isimli değikene atadık.
let d = today.getDay();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
// Şuanki zamanızı saat, dakika, saniye olarak böldük ve değişkenlerimize atadık.
m = checkTime(m);
s = checkTime(s);
// Burada m (dakika) ve s (saniye) değişkenlerimizi checkTime isimli fonksiyonumuzdan geçirdik.

document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s + days[d];
//myClock id'li divimize zamanlarımızı innerHTML metodu ile yazdırdık.
setTimeout(showTime, 1000);
}
function checkTime(i){
    if (i< 10){ i= "0" + i};
    return i;
}
// checkTime isimli fonksiyonumuzla eğer sayımız 10'dan küçük ise başına 0 rakamını koyuyoruz. 

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
// Günlerin Türkçe isimlerini içeren "days" isimili bir dizi oluşturduk.
showTime();







