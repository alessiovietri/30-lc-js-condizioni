let lampadina = false;

console.log('Valore di lampadina prima del click:', lampadina);

// click sull'interruttore

lampadina = !lampadina; // -> !false = true

console.log('Valore di lampadina dopo il click:', lampadina);

console.log('Altro valore di lampadina:', !lampadina);
console.log('Altro valore ancor di lampadina:', lampadina);













	
let utenteLoggato = false;
 
if (!utenteLoggato) { // if (!utenteLoggato == true)
  
 // questo blocco di istruzioni sarà eseguito
 // perchè !false === true
} 
 
// ... 100k LOC dopo...
 
if (utenteLoggato) { // if (utenteLoggato == true)
  
 // questo blocco di istruzioni non sarà eseguito
 // perchè false === false
} 













let x = 3;
let y = 4;
let z = 5;
	
if (((x === 3) && (y === 4)) && (z === 5)) {
  
    // Questo blocco viene eseguito 
    // solo se x è uguale a 3 e Y uguale a 4
    
    alert("X === 3 e Y === 4");
     
}

// SOLUZIONE ALTERNATIVA
	
if ((x === 3)) {
  
    if ((y === 4)) {
  
        // Questo blocco viene eseguito 
        // solo se x è uguale a 3 e Y uguale a 4
        
        alert("X === 3 e Y === 4");
         
    }
     
}

let a = 9;
let b = 7;

if(a == 9 || b == 10) {
    alert('Sono entrato qui dentro');
}