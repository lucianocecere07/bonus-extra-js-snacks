let arrayNomi = ["jay", "daisy", "myrtle", "jordan", "henry", "nick", "tom", "meyer", "george"];

let nomeInvitatoFesta = false;

let nomeUtente = prompt("Inserisci il tuo nome");
let nomeUtenteMinuscolo = nomeUtente.toLowerCase();

for (let i = 0; i < arrayNomi.length; i++){
    let nomeInvitato = arrayNomi[i];
    if (nomeInvitato == nomeUtenteMinuscolo){
        nomeInvitatoFesta = true;
        break;
    }
}
if(!nomeInvitatoFesta){
    console.log("Non sei stato invitato alla festa");
} else {
    console.log("Puoi partecipare alla festa");
}