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


//Il software deve chiedere per 10 volte all'utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
let numero = 0;
let arrayNumeri =[];
let somma =0;
for(let i=0; i<10; i++){
    let numero = parseInt(prompt("inserisci un numero intero"));
    console.log(numero);
    arrayNumeri.push(numero);
}
for(let i=0; i<arrayNumeri.length; i++){
    somma = somma + arrayNumeri[i];
}
console.log("la somma dei numeri è: " + somma);
console.log("il numero più grande è: " + Math.max(...arrayNumeri));
console.log("il numero più piccolo è: " + Math.min(...arrayNumeri));
let media = somma / arrayNumeri.length
console.log("la media dei numeri è: " + media);