/*creo un array vuoto. chiedi per 6 volte un numero all'utente. Se dispari inseriscilo nell'array e stampa alla fine l'array*/ 
let arrayNumeri = [];


for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("inserisci un numero intero"));
    if (numero % 2 != 0) {
        arrayNumeri.push(numero);
    }
}
for (let i=0; i < arrayNumeri.length; i++){
console.log(arrayNumeri[i]);
}