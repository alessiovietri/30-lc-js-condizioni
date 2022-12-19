/*

    Fai inserire 2 parole all'utente e vedi qual è la più lunga
    1. Chiedo la prima parola all'utente
    2. Chiedo la seconda parola all'utente
    2+. Verifico correttezza input
    3. Conto i caratteri di entrambe le parole
    4. Condizione: 
    - Se il numero di caratteri della prima parola è maggiore del numero di quelli della seconda, stampo "Prima più lunga"
    - Se il numero di caratteri della seconda parola è maggiore del numero di quelli della prima, stampo "Seconda più lunga"
    - Se il numero di caratteri della prima parola è uguale al numero di quelli della seconda, stampo "Sono uguali"

*/

let primaParola;
let secondaParola;
let caratteriPrimaParola;
let caratteriSecondaParola;

primaParola = prompt('Inserisci la prima parola');
secondaParola = prompt('Inserisci la seconda parola');

console.log('primaParola', primaParola);
console.log('secondaParola', secondaParola);

// La proprietà "length" di una stringa mi fa sapere da quanti caratteri è composta
// Es. let stringa = 'cane'; =======> stringa.length ha valore 4

caratteriPrimaParola = primaParola.length;
console.log('caratteriPrimaParola', caratteriPrimaParola, typeof caratteriPrimaParola);
caratteriSecondaParola = secondaParola.length;
console.log('caratteriSecondaParola', caratteriSecondaParola, typeof caratteriSecondaParola);

if (caratteriPrimaParola > caratteriSecondaParola) {

    alert('Prima più lunga');
    console.log('Prima più lunga');
    
}
// else if (caratteriSecondaParola > caratteriPrimaParola) {
else if (caratteriPrimaParola < caratteriSecondaParola) {

    alert('Seconda più lunga');
    console.log('Seconda più lunga');

}
// else {
else if (caratteriPrimaParola == caratteriSecondaParola) {

    alert('Sono uguali');
    console.log('Sono uguali');

}