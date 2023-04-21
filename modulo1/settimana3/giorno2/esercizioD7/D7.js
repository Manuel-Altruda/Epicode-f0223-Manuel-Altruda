/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

    function concatenaStringhe(stringa1, stringa2) {

        // Ho usato substring perchè restituisce una parte della stringa che inizia con il carattere della specifica posizione richiesta

        // seleziono i primi 2 caratteri di str1
        let str1Iniziale = stringa1.substring(0, 2); 

        // seleziono gli ultimi 3 caratteri di str2
        let str2Finale = stringa2.substring(stringa2.length - 3);

        // concateno le due stringhe
        let nuovaStringa = str1Iniziale + str2Finale; 

        // converto la stringa in maiuscolo
        let nuovaStringaMaiuscola = nuovaStringa.toUpperCase();
        console.log(nuovaStringaMaiuscola);

    }
  
        concatenaStringhe("ciao", "uomo"); 
  


/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
 
    function generateRandomArray() {
        
        let array = [];
        
        for (let i = 0; i < 10; i++) {
    
            let randomNumber = Math.floor(Math.random() * 100);

            array.push(randomNumber);
            
        }

        return array;

    }

        let randomArray = generateRandomArray();
        console.log(randomArray);


/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/  
    {

        function filtraPari(array) {
            
            return array.filter(numero => numero % 2 === 0);
            
        }
        
        let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        let numeriParli = filtraPari(numeri);
        
        console.log(numeriParli);
    }



/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

    {

        function sommareNumeri(array) {

            let somma = 0;

            for (let i = 0; i < array.length; i++) {

                somma += array[i];
                
            }
                return somma;
        }

        let numeri = [1, 2, 3, 4, 5, 6];
        let risultato = sommareNumeri(numeri);
        console.log(risultato);

    }   

    

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

    function sommaArray(array) {

        return array.reduce((acc, curr) => acc + curr, 0);

    } console.log(sommaArray([1, 2, 3, 4, 5]));
  
  


/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

    function incrementArrayValues(arr, nParametro) {

        const incrementedArr = [];

        for (let i = 0; i < arr.length; i++) {

          incrementedArr.push(arr[i] + nParametro);

        }

        return incrementedArr;

      }
      
        let arr = [1, 2, 3, 4, 5];

        let nParametro = 3;

        let incrementedArr = incrementArrayValues(arr, nParametro);
        console.log(incrementedArr); 




/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

    function lunghezzaStringhe(arrayDiStringhe) {

        const lunghezze = [];
    
        for (let i = 0; i < arrayDiStringhe.length; i++) {

        lunghezze.push(arrayDiStringhe[i].length);

        }
    
        return lunghezze;

    }
  
    const arrayDiStringhe = ["EPICODE", "is", "great"];

    const lunghezze = lunghezzaStringhe(arrayDiStringhe);
    console.log(lunghezze); 


/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

    function createArrayDispari() {

        const arrayDispari = [];

        for (let i = 1; i <= 99; i += 2 ) {

        arrayDispari.push(i);
        
        }

        return arrayDispari;

    }
    
        let arrayDispari = createArrayDispari();
        console.log(arrayDispari);




/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    }
  ];
  
  /* ESERCIZIO 10
    Scrivi una funzione per trovare il film più vecchio nell'array fornito.
  */
  
        function trovaFilmPiuVecchio(movies) {

            let filmPiuVecchio = null;

            for (let i = 0; i < movies.length; i++) {

            let film = movies[i];

            if (!filmPiuVecchio || film.year < filmPiuVecchio.year) {

                filmPiuVecchio = film;

            }

            }

            return filmPiuVecchio;

        }

            let filmPiuVecchio = trovaFilmPiuVecchio(movies);
            console.log(filmPiuVecchio);
      
    
  /* ESERCIZIO 11
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */
  
        function conteggioFilmContenuti(movies) {

            return movies.length;

        }

        let numeroFilmContenuti =  conteggioFilmContenuti(movies);
        console.log(numeroFilmContenuti);




  /* ESERCIZIO 12
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */
  
        function titoliFilm(movies){

            let titoloFilm = [];

            for (let i = 0; i < movies.length; i++) {

                titoloFilm.push(movies[i].Title);

            }

            return titoloFilm;

        }
    
        let titoloFilm = titoliFilm(movies);
        console.log(titoloFilm);



  /* ESERCIZIO 13
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */
  
        function filmRecenti(movies){

            let annoRecente = new Date().getFullYear();

            let inizioMillennio = annoRecente - 10;

            let filmRecenti = movies.filter(filtro => filtro.Year >= inizioMillennio);
            return filmRecenti;
        }
        console.log(filmRecenti(movies));
        




  /* ESERCIZIO 14
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */
  
        function idFilm(movies, imdbID){

            for(let i = 0; i < movies.length; i){

                if(movies[i].imdbID === imdbID){

                    return movies[i];

                }

            }
                return null;
        }
            let filmId = idFilm(movies, "t4154796");
            console.log(filmId);





  /* ESERCIZIO 15
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */
        

    function sommaAnni(movies){

        let anniTotale = 0;

        for(let i = 0; i < movies.length; i++){

            anniTotale += movies[i].Year;

        }

        return anniTotale;  

    }