var lPierwsza = document.getElementById("1");
var lDruga = document.getElementById("2");

var elDodawanie, elOdejmowanie, elMnozenie, elDzielenie, elPotegowanie;
var rezultat;

elDodawanie = document.getElementById("dodawanie");
elOdejmowanie = document.getElementById("odejmowanie");
elMnozenie = document.getElementById("mnozenie");
elDzielenie = document.getElementById("dzielenie");
elPotegowanie = document.getElementById("potegowanie");

rezultat = document.getElementById("wynik");
function liczby(){
    if(lPierwsza.value == "" || lDruga.value == "" ){
        rezultat.textContent = "Proszę uzupełnić obie liczby."
        return false;
    }
    return true;
}

elDodawanie.onclick = function(){

    if(liczby())
        rezultat.textContent = parseFloat(lPierwsza.value) + parseFloat(lDruga.value);

}
elOdejmowanie.onclick = function(){
    if(liczby())
        rezultat.textContent = parseFloat(lPierwsza.value) - parseFloat(lDruga.value);
}
elMnozenie.onclick = function(){
    if(liczby())
        rezultat.textContent = parseFloat(lPierwsza.value) * parseFloat(lDruga.value);

}
elDzielenie.onclick = function(){
    if(lDruga.value == "0"){
        rezultat.textContent = "Nie wolno dzielić przez zero.";
        return
    }
    if(liczby())
        rezultat.textContent = parseFloat(lPierwsza.value) / parseFloat(lDruga.value)}

elPotegowanie.onclick = function(){
    if(parseInt(lDruga.value) == 0){
        rezultat.textContent = 1;
        return;}

    if(parseInt(lDruga.value) < 0){
        rezultat.textContent = "Wykładnik potęgi musi być dodatni";
        return; }

    var wartosc = 1;
    for(var i = 0; i < parseInt(lDruga.value); i++){

        wartosc *= lPierwsza.value
    }

    rezultat.textContent = "Wynik działania wynosi:  " + wartosc;
}