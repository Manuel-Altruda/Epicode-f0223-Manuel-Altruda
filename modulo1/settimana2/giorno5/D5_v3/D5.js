<<<<<<< HEAD
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort(); 

console.log(pets); 


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// for (var i = pets.length - 1; i >= 0; i--) {
//   console.log(pets[i]);
// }

pets.reverse();
console.log(pets);




/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let firstPet = pets.shift(); 
pets.push(firstPet); 

console.log(pets); 




/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'ABCD' + i; 
}

console.log(cars);





/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
  const newCar = {
  brand: "Fiat",
  model: "Punto",
  color: "grey",
  trims: ["Abarth", "Sport"]
};
  cars.push(newCar);

  for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();
    
  }


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

  const justTrims = []

for (let i = 0; i < cars.length; i++) {
 
  justTrims.push(cars[i].trims[0]);
}

  console.log(justTrims);



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while (i < numericArray.length && numericArray[i] != 32) {
  console.log(numericArray[i]);
  i++;
}




/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]


const posizioneAlfabeto = [];

for (let i = 0; i < charactersArray.length; i++) {

  const char = charactersArray[i];

  switch (char) {

    case "a":

      posizioneAlfabeto.push(1);

      break;

    case "b":

      posizioneAlfabeto.push(2);

      break;

    case "c":

      posizioneAlfabeto.push(3);

      break;

    case "d":

      posizioneAlfabeto.push(4);

      break;

    case "e":

      posizioneAlfabeto.push(5);

      break;

    case "f":

      posizioneAlfabeto.push(6);

      break;

    case "g":

      posizioneAlfabeto.push(7);

      break;

    case "h":

      posizioneAlfabeto.push(8);

      break;

    case "i":

      posizioneAlfabeto.push(9);

      break;

    case "j":

      posizioneAlfabeto.push(10);

      break;

    case "k":

      posizioneAlfabeto.push(11);

      break;

    case "l":

      posizioneAlfabeto.push(12);

      break;

    case "m":

      posizioneAlfabeto.push(13);

      break;

    case "n":

      posizioneAlfabeto.push(14);

      break;

    case "o":

      posizioneAlfabeto.push(15);

      break;

    case "p":

      posizioneAlfabeto.push(16);

      break;

    case "q":

      posizioneAlfabeto.push(17);

      break;

    case "r":

      posizioneAlfabeto.push(18);

      break;

    case "s":

      posizioneAlfabeto.push(19);

      break;

    case "t":

      posizioneAlfabeto.push(20);

      break;

    case "u":

      posizioneAlfabeto.push(21);

      break;

    case "v":

      posizioneAlfabeto.push(22);

      break;

    case "w":

      posizioneAlfabeto.push(23);

      break;

    case "x":

      posizioneAlfabeto.push(24);

      break;

    case "y":

      posizioneAlfabeto.push(25);

      break;

    case "z":

      posizioneAlfabeto.push(26);

      break;

    default:
      
      posizioneAlfabeto.push(0);
  }
}

=======
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort(); 

console.log(pets); 


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// for (var i = pets.length - 1; i >= 0; i--) {
//   console.log(pets[i]);
// }

pets.reverse();
console.log(pets);




/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let firstPet = pets.shift(); 
pets.push(firstPet); 

console.log(pets); 




/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'ABCD' + i; 
}

console.log(cars);





/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
  const newCar = {
  brand: "Fiat",
  model: "Punto",
  color: "grey",
  trims: ["Abarth", "Sport"]
};
  cars.push(newCar);

  for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();
    
  }


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

  const justTrims = []

for (let i = 0; i < cars.length; i++) {
 
  justTrims.push(cars[i].trims[0]);
}

  console.log(justTrims);



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while (i < numericArray.length && numericArray[i] != 32) {
  console.log(numericArray[i]);
  i++;
}




/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]


const posizioneAlfabeto = [];

for (let i = 0; i < charactersArray.length; i++) {

  const char = charactersArray[i];

  switch (char) {

    case "a":

      posizioneAlfabeto.push(1);

      break;

    case "b":

      posizioneAlfabeto.push(2);

      break;

    case "c":

      posizioneAlfabeto.push(3);

      break;

    case "d":

      posizioneAlfabeto.push(4);

      break;

    case "e":

      posizioneAlfabeto.push(5);

      break;

    case "f":

      posizioneAlfabeto.push(6);

      break;

    case "g":

      posizioneAlfabeto.push(7);

      break;

    case "h":

      posizioneAlfabeto.push(8);

      break;

    case "i":

      posizioneAlfabeto.push(9);

      break;

    case "j":

      posizioneAlfabeto.push(10);

      break;

    case "k":

      posizioneAlfabeto.push(11);

      break;

    case "l":

      posizioneAlfabeto.push(12);

      break;

    case "m":

      posizioneAlfabeto.push(13);

      break;

    case "n":

      posizioneAlfabeto.push(14);

      break;

    case "o":

      posizioneAlfabeto.push(15);

      break;

    case "p":

      posizioneAlfabeto.push(16);

      break;

    case "q":

      posizioneAlfabeto.push(17);

      break;

    case "r":

      posizioneAlfabeto.push(18);

      break;

    case "s":

      posizioneAlfabeto.push(19);

      break;

    case "t":

      posizioneAlfabeto.push(20);

      break;

    case "u":

      posizioneAlfabeto.push(21);

      break;

    case "v":

      posizioneAlfabeto.push(22);

      break;

    case "w":

      posizioneAlfabeto.push(23);

      break;

    case "x":

      posizioneAlfabeto.push(24);

      break;

    case "y":

      posizioneAlfabeto.push(25);

      break;

    case "z":

      posizioneAlfabeto.push(26);

      break;

    default:
      
      posizioneAlfabeto.push(0);
  }
}

>>>>>>> ff596c00807040fb14a60d577becd26baf5a4f28
console.log(posizioneAlfabeto);