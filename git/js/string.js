var text = "ZSK - Zespół Szkół Komunikacji";
console.log(text.length);

var pierwszy = text.charAt(0);
console.log(pierwszy);

var ostatni = text.charAt(text.length - 1);

console.log(ostatni);

document.write(text.charAt(11));

document.write(text.charCodeAt(14));

var duze = text.toUpperCase();
console.log(duze);

var male = text.toLowerCase();
console.log(male);

var duzaMale = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
console.log(duzaMale);

var imie= prompt("Imie: ")

var wypisz = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
document.getElementById("h").innerHTML=wypisz;


console.log(text.substr(1,text.length - 2));