// Math.random() genera un numero casuale tra 0 e 0.999999999999999999...
console.log('Random 1', Math.random());

// Math.random() genera un numero casuale tra 0 e 0.999999999999999999...
const constRandom = Math.random();
console.log('constRandom', constRandom);

// Se voglio un numero casuale compreso tra 0 e 9, moltiplico Math.random() per 10...
console.log('constRandom * 10', constRandom * 10);

// ...e lo arrotondo per difetto
console.log('Math.floor(constRandom * 10)', Math.floor(constRandom * 10));

// Se lo voglio tra 1 e 10, semplicemente aggiungo 1
console.log('Math.floor(constRandom * 10) + 1', Math.floor(constRandom * 10) + 1);
console.log('Math.ceil(constRandom * 10)', Math.ceil(constRandom * 10));