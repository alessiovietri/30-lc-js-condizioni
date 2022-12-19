let x = 3;
let y = 4;
let z = 5;

const testUno = true;
  
console.log(testDue);
	
if (((x === 3) && (y === 4)) && (z === 5)) {
  
    console.log(testUno);

    const testDue = false;
  
    // Questo blocco viene eseguito 
    // solo se x è uguale a 3 e Y uguale a 4
    
    console.log("X === 3 e Y === 4");
     
}
  
console.log(testDue);

// SOLUZIONE ALTERNATIVA
	
if ((x === 3)) {

    const testTre = true;
  
    if ((y === 4)) {
  
        console.log(testUno);

        console.log(testTre);

        const testQuattro = false;

        // Questo blocco viene eseguito 
        // solo se x è uguale a 3 e Y uguale a 4
        
        console.log("X === 3 e Y === 4");
         
    }

    console.log(testQuattro);
     
}

let a = 9;
let b = 7;

if(a == 9 || b == 10) {
    console.log('Sono entrato qui dentro');
}