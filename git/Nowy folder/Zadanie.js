
var wynik = document.getElementById("wynik");
var dane = document.getElementsByTagName("input");
var regex = /[0-9]{2}-[0-9]{3}/;

function sprawdz(){

    if(regex.test(dane[0].value)){
        console.log("kod-prawidłowe");
        dane[0].className = "dobrze";
    }
    else{
        console.log("kod-Nie prawidłowy");
        dane[0].className = "zle";
    }   
 
    
}




function sprawdzMiasto(){

    if(dane[1].value.match("^[A-Z]{1}[a-z]")){
        console.log("miasto-Dobrze");
        dane[1].className = "dobrze";
    }
    else{
        console.log("miasto-Nie dobrze");
        dane[1].className = "zle";
    }

}

function wywolaj(){
    sprawdz();
    sprawdzMiasto();
}