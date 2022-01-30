let palabra = "Oso";

console.log("Palabra a comparar: " + palabra);

let palabraReverse=palabra.split("").reverse().join(""); 

if (palabra == palabraReverse) 
{
    console.log("Es palíndromo");
}
else
{
    console.log("No es palíndromo");   
}