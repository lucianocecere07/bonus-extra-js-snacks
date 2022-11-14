
//somma dei 10 numeri tramite un loop for (ERRORE!)
let numero = 0;
//let arrayNumeri =[];
let somma =0;
for(i=0; i<10; i++){
    let numero = parseInt(prompt("inserisci un numero intero"));
    console.log(numero);
    somma = somma + numero;
    //arrayNumeri.push(numero);
}
console.log("la somma dei numeri è: " + somma);


/* SOMMA TRAMITE ARRAY
for(i=0; i<arrayNumeri.length; i++){

    somma = somma + arrayNumeri[i];

}
*/
