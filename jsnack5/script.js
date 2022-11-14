let arrayNumeri = [];
//let numero = 0;

for (i = 0; i < 6; i++) {
    let numero = parseInt(prompt("inserisci un numero intero"));
    if (numero % 2 != 0) {
        arrayNumeri.push(numero);
    }
}
console.log(arrayNumeri);