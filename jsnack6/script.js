let numeroComputer = Math.floor(Math.random() * 10);
let numeroUtente = parseInt(prompt("Inserisci un numero intero da 0 a 10"));

if(numeroUtente <= 0 || numeroUtente > 10){
    console.log("Inserisci un numero tra 0 e 10");
} else {
    console.log("numero computer: " + numeroComputer);
    console.log("numero utente: " + numeroUtente);

    if(numeroUtente == numeroComputer){
        console.log("HAI VINTO!");
    } else {
        console.log("HAI PERSO");
    }
}