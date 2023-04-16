/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

  let sum = 10 + 20;

  console.log(sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

  let random = Math.floor(Math.random() * 21); 

  console.log(random);




/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

  let me = {

    name: "Manuel",
    surname: "Altruda",
    age: 21

  }



/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

  delete me.age;
  // console.log(me);




/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

 me.skills = ["JavaScript", "HTML", "CSS"];


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

  me.skills.push("C");

  console.log(me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

  me.skills.pop();


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

  function dice() {

   return Math.floor(Math.random() * 6) + 1;

  }

  console.log(dice());


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

  function whoIsBigger(n1, n2) {

    if (n1 > n2) {

      return n1;
      
    } else {

      return n2;
    }

  }
  console.log(whoIsBigger(10, 20));


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

  function splitMe(stringa) {

    let parole = stringa.split(" ");

    return parole;

  }

    let stringa = "I love coding";
    let parole = splitMe(stringa);
    console.log(parole);




/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

  function deleteOne(str, isFirst) {

    if (isFirst) {

      return str.slice(1);

    } else {

      return str.slice(0, -1);

    }

  }

  console.log(deleteOne("ciao a tutti", false));




/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

  function onlyLetters(stringa) {

      return stringa.replace(/[0-9]/g, '');

  }

  console.log(onlyLetters("I have 4 dogs")); // "I have dogs"





/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
   
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
  return emailRegex.test(email);
}

  console.log(isThisAnEmail("AntonioCassano@gmail.com")); // true
  console.log(isThisAnEmail("ManuelAltgmail.com")); // false



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

  function whatDayIsIt() {

    let ggDs = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let today = new Date();

    let gDs = ggDs[today.getDay()];

    return gDs;

  }

    console.log(whatDayIsIt()); 









/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numeroDigiri) {
  let sum = 0;
  let values = [];

  for (let i = 0; i < numeroDigiri; i++) {
    const value = dice();
    sum += value;
    values.push(value);
  }

  return { sum, values };
}

console.log(rollTheDices(3)); 





/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

  function howManyDays(date) {

    // Converto la data in un oggetto Date
    let inputDate = new Date(date);

    // Ottengo la data odierna
    let today = new Date();

    // Calcolo la differenza in millisecondi tra le due date
    let diffInMs = today - inputDate;

    // Calcolo la differenza in giorni arrotondando il risultato verso il basso
    let diffInGiorni = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    // Ritorno il risultato
    return diffInGiorni;
  }
   console.log(howManyDays("2022-05-01")); 




/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

  function isTodayMyBirthday(birthday) {

    let today = new Date();

    let birthdate = new Date(birthday);

    return (
      birthdate.getDate() === today.getDate() &&
      birthdate.getMonth() === today.getMonth()
    );

  }


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

  function deleteProp(obj, prop) {

    delete obj[prop];

    return obj;

  }

  console.log(deleteProp({ name: "Manuel", surname: "Altruda", age: 21 }))
    


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

  function newestMovie(movies) {

    if (movies.length == 0) {

        return null;

    }

    let filmRecente = movies[0];

    for (let i = 1; i < movies.length; i++) {

      if (movies[i].year > filmRecente.year) { 

        filmRecente = movies[i];

      }
    }
      return filmRecente;
  }

   




/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

  function countMovies(movies) {

    return movies.length;

  }

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {

  let anni = movies.map(movie => movie.year);

  return anni;

}



/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {

  let thisYear = new Date().getFullYear();

  let lastMillenniumStartYear = thisYear - 1000;

  return movies.filter(movie => {

    let productionYear = new Date(movie.productionDate).getFullYear();

    return productionYear >= lastMillenniumStartYear && productionYear < thisYear;

  });

}


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

  function sumAllTheYears(movies) {

    let sum = 0;

    for (let i = 0; i < movies.length; i++) {

      sum += movies[i].year;

    }

    return sum;

  }

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(title) {
  const filteredMovies = movies.filter(movie => movie.Title.includes(title));
  return filteredMovies;
}


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

  function searchAndDivide(stringa,movies) {

    let match = [];

    let unmatch = [];


    for (let i = 0; i < movies.length; i++) {

      if (movies[i].Title.includes(stringa)) {
        
        match.push(movies[i]);

      } else {

        unmatch.push(movies[i]);
      
      }

    }
      return {match: match, unmatch: unmatch};
  }

  





/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/



  // COMMENTATO PERCHè L'HO SPOSTATO IN FONDO ALLA PAGINA SOTTO L'ARRAY DI FILM

  // function removeIndex(index) {

  //   movies.splice(index, 1);

  //   return movies;

  // }
  // console.log(removeIndex(1)); 




// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

  function selezionaContainer() {

    let container = document.getElementById("container");

    return container;

  }


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

  function selezionaTd() {

    let td = document.getElementsByTagName("td");

    return td;

  }

 
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

  function stampaContenutoTd() {

    let td = document.getElementsByTagName("td");

    for (let i = 0; i < td.length; i++) {

      console.log(td[i].textContent);

    }

  }

  stampaContenutoTd();



/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

  function aggiungiBackground() {

    let links = document.querySelectorAll("a");

    links.forEach(link => {

      link.style.backgroundColor = "red";

    });

  }

    aggiungiBackground();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

    function aggiungiElementoAllaLista(oggetto) {

      let lista = document.getElementById("myList");

      let list = document.createElement("li");

      list.textContent = oggetto;

      lista.appendChild(list);

    }

    aggiungiElementoAllaLista("Manuel");




/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

    function svuotaLista() {

      let lista = document.getElementById("myList");

      lista.textContent = " ";

    }
    console.log(svuotaLista());



/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

  function aggiungiClasseTr() {

    let tr = document.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {

      tr[i].classList.add("test");

    }

  }

  console.log(aggiungiClasseTr());


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

  function halfTree(altezza) {

    let albero = " ";

    for (let i = 0; i < altezza; i++) {

      albero += "*".repeat(i) + "\n";

    }

    return albero;
  }

  console.log(halfTree(4));



/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/



  function tree(altezza) {

   for (let i = 1; i < altezza; i++) {

    let diram = "";

    for (let j = 1; j < altezza - i; j++) {

      diram += " " //allineamento dell'albero tramite gli spazi

    }

    for (let k = 1; k <= 2 * i - 1; k++) {

      diram += "*";
    }
    console.log(diram);
    }
  
  }
  tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

  let filmRecente = newestMovie(movies);
    
  console.log(filmRecente);


  let numFilm = countMovies(movies);

  console.log(numFilm);

  let somma = sumAllTheYears(movies);
  console.log(sum);

 
  console.log(searchAndDivide("Star Wars", movies));



  function removeIndex(index) {

    movies.splice(index, 1);

    return movies;

  }
  console.log(removeIndex(10)); 
