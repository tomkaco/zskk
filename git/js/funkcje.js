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
