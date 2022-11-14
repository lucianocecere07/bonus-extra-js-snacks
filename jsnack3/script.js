/*//somma dei 10 numeri tramite un loop for (ERRORE!)
let numero = 0;
//let arrayNumeri =[];
let somma =0;
for(i=0; i<10; i++){
    let numero = parseInt(prompt("inserisci un numero intero"));
    console.log(numero);
    somma = somma + numero;
    //arrayNumeri.push(numero);
}
console.log("la somma dei numeri è: " + somma);*/


//SOMMA TRAMITE ARRAY
let numero = 0;
let arrayNumeri =[];
let somma =0;
for(i=0; i<10; i++){
    let numero = parseInt(prompt("inserisci un numero intero"));
    console.log(numero);
    //somma = somma + numero;
    arrayNumeri.push(numero);
}
for(i=0; i<arrayNumeri.length; i++){
    somma = somma + arrayNumeri[i];
}
console.log("la somma dei numeri è: " + somma);
console.log("il numero più grande è: " + Math.max(...arrayNumeri));
console.log("il numero più piccolo è: " + Math.min(...arrayNumeri));
let media = somma / arrayNumeri.length
console.log("la media dei numeri è: " + media);