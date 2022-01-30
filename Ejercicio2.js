let lista_principal = ["A", 1, 4, 5, "C", "B", 6, 4444, 8, "G", "D", 7, 3, "F", 2, 555];
let lista_numeros = [];
let lista_letras = [];

// recorre la lista principal
for(cont=0; cont < lista_principal.length; cont++)
{
    // se guarda la posción de la lista
    let item = lista_principal[cont];
        
    if(isNaN(item))
    {
        lista_letras.push(item);
    }
    else
    {
        lista_numeros.push(item); 
    }
}

lista_numeros.sort
(   function (prev, next)
    {
        return prev-next;
    } 
);

lista_letras.sort();

console.log("Numeros: " + lista_numeros);
console.log("Letras: " + lista_letras);
console.log("Principal: " + lista_principal);