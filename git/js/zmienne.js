var imie;
imie = "Tomek";
nazwisko = "Magical"
document.write("Twoje imie to:" + imie );
document.write("<br>Twoje imie i nazwisko to: " + imie +"  " + nazwisko);

var wiek = 19;

console.log("Wiek to: " + wiek);

var x,y;
x = 10;
y = 5;

var wynik = x + y;

document.write("<br>" + wynik);
//alert(wynik);

x = 20;
y = 2;

var suma = x + y ;
var roznica = x - y;
var dzielenie = x / y;
var mnozenie = x * y;
var reszta = x % y;

// alert(reszta);

var a = 10, b = "3a";
//alert(a+b);;

console.log(typeof(a));

console.log(a + (a %3 )-10);

//Systemy liczbowe

var c = 10; //liczba w systeime dziesietnym
var d = 01076; //oktalny
var e = 0x10abc; //szesnatskowy

console.log(c) ;
console.log(d);
console.log(e);

console.trace();

var _zmienna = 1;
var _Zmienna = 2;

console.log(_zmienna);
console.log(_Zmienna);

var f= 2.5 ;
console.log(f);

var prawda = true;
console.log(typeof(prawda));

var text = "tekst";

console.log(typeof(text));


            
var tab = ["jeden", "dwa"];
            console.log(tab);


/*
var podajg = prompt("Podaj zmienną g");
console.log(podajg);
console.log(typeof(podajg));

podajg = parseInt(podajg);

console.log(typeof(podajg))
*/

//var podajLiczbe = prompt("Podaj liczbe rzeczywista", "np: 3.5");
podajLiczbe=parseFloat(podajLiczbe);
console.log(podajLiczbe);

var liczba = 5;
var tekst = "a";
var przerwa = " "
var wynik = typeof(liczba + przerwa);
console.log(wynik);


var imie= prompt ("Podaj imie");
var nazwisko= prompt ("Podaj nazwisko");
var dane = imie + " " +nazwisko;
var blok = document.getElementById("imie").textContent = "imie" + imie + "nazwisko" + nazwisko;
//blok.innerHTML = dane;

blok.textContent = dane;