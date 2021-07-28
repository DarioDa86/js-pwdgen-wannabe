//1- richiedere nome all'utente
var nome = prompt("Inserisci il tuo nome");
document.getElementById('nome').innerHTML += nome;
//2- richiedere cognome all'utente
var cognome = prompt("Inserisci il tuo cognome");
document.getElementById('cognome').innerHTML += cognome;

//3- richiedere colore preferito all'utente
var colore = prompt("Inserisci il tuo colore preferito");
document.getElementById('colore').innerHTML += colore;

const bool_class = 40

//4- stampare sulla schermo: nome, cognome, colore + 40

document.getElementById('pwd-creata').innerHTML += nome += cognome += colore += bool_class;
