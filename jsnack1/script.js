//l'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
let numeroUno = parseInt(prompt("inserisci un numero intero"));
let numeroDue = parseInt(prompt("inserisci un secondo numero intero"));

if (numeroUno > numeroDue) {
    console.log("Il numero più grande è: " + numeroUno);
} else if (numeroUno < numeroDue) {
    console.log("Il numero più grande è: " + numeroDue);
} else {
    console.log("I numeri sono uguali: " + numeroUno);
}