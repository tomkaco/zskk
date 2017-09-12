var kolory = ['biały', 'zielony', 'czerwony'];

var elKolor = document.getElementById('kolor');
elKolor.textContent = kolory[0];

var samochody = new Array('BMW', 'Audi', 'Ferrari');

console.log(samochody[0]);
console.log(samochody[samochody.length - 1]);
console.log("Iloeść elementów w talbicy: " + samochody.length);

var nowy = prompt("Samochodzik: ")

samochody[0] = nowy;
elKolor.textContent = samochody;

var tab = new Array(
    new Array('Jan', 'Kowal', 'Poznanń'),
    new Array('Anna', 'Nowak', 'Gniezno'),
    new Array('Anna', 'Kowal', 'Poznanń')
);
console.log(tab[1][2]);

var imiona = ['Janusz', 'Adrian', 'Andrzej', 'Zenek'];
console.log(imiona);

var posortowaneImiona  = imiona.sort();

console.log(posortowaneImiona);

var odwrocImiona = posortowaneImiona.reverse();
odwrocImiona.pop();
console.log(odwrocImiona);

odwrocImiona.unshift('Paweł');
odwrocImiona.unshift('Skrrt');
console.log(odwrocImiona);

console.log(odwrocImiona.indexOf("Paweł"));


//tablica z liczbami

var cyfry = [1, 2, 20, 190, -1, 1000000];
console.log(cyfry);

var posortowaneCyfry = cyfry.sort();
console.log(posortowaneCyfry);

var sortuCyfryPrawidlowo = cyfry.sort(function(a,b){
return (a-b);
});
console.log(sortuCyfryPrawidlowo);
//zad dom Utworz formularz z loginem i hasłem (password), Zapisz dane w tablicy. Zapisz wynik w naglowku drugiego stopnia. Uzytkownik podaje rowniez kolor w jakim ma byc wszystko wyswietlone.
