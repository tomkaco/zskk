function witaj (imie){
  document.write("Witajta " +imie); 
    
}
function poleProstokata (a,b){
    
    return a*b;
    
};
var a = prompt("Podaj a: ");
var b = prompt("Podaj b: ");

console.log(poleProstokata(a, b));

var name="Janusz";
witaj(name);

function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;

    var objetosc = pole * wysokosc;

    var wynik = [pole, objetosc];
    return wynik;

}
var a = prompt('Podaj szerokość')
var b = prompt('Podaj dlugosc')
var c = prompt('Podaj wysokosc')

var x = prompt('Podaj wartość', '0 - pole', '1 - objetosc')
var poleProstokata = poleObjetosc(2,3,4)[1];

console.log(poleProstokata);



