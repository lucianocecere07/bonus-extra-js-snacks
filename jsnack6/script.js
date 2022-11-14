let numeroMax = parseInt(prompt("Inserisci numero massimo consentito"));

let numeroComputer = Math.floor(Math.random() * numeroMax);
let numeroUtente = parseInt(prompt("Inserisci un numero intero"));

if(numeroUtente <= 0 || numeroUtente > numeroMax){
    console.log("Inserisci un numero consentito");
} else {
    console.log("numero computer: " + numeroComputer);
    console.log("numero utente: " + numeroUtente);

    if(numeroUtente == numeroComputer){
        console.log("HAI VINTO!");
    } else {
        console.log("HAI PERSO");
    }
}