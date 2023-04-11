/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/


/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    let l1 = 5;
    let l2 = 10;
    
    let rettangolo = area(l1, l2);

    function area(l1, l2) {

        return l1 * l2;

    }

    console.log(rettangolo);



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    let n1 = 11;
    let n2 = 11;

    function crazySum(n1, n2) {

        
        if(n1 === n2){

            return (n1 + n2) * 3;

        } else {

            return (n1 + n2);

        }

    }
    console.log(crazySum(n1, n2));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    
{

    function crazyDiff(numero) {
        
        let diff = Math.abs(numero - 19);
        
        if (numero > 19) {
            
            return diff * 3;
            
        } else {
            
            return diff;
            
        }
        
    }
    
    console.log(crazyDiff(19));
    
}
    


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    {

        function boundary(numero) {
            
            return (numero >=20 && numero <= 100) || numero === 400;
            
        }
        console.log(boundary(400));
        
    }

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

      function epify(stringa) {

        if (stringa.startsWith("EPICODE")) {

            return stringa;

        } else {

            return "EPICODE" + stringa;

        }

    }

    console.log(epify("EPICODE"));




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    {

        function check3and7(numero) {

            if (numero % 3 === 0 && numero % 7 === 0) {

                return true;

            } else {

                return false;

            }

        }
        
        console.log(check3and7(4));
        
        
    }


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    {

        function reverseString(stringa) {

            let array = stringa.split("");

            array.reverse();

            return array.join("");

        }

        console.log(reverseString("EPICODE"));


    }



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


    {

        function upperFirst(stringa) {
            
            let words = stringa.split(" ");
          
            
            for (let i = 0; i < words.length; i++) {

              let word = words[i];
        
              let upper = word.charAt(0).toUpperCase();
              word = upper + word.slice(1);
          
              words[i] = word;

            }
          
            let result = words.join(" ");
          
            return result;

        }

            let stringa = "questa è una stringa di prova";
            let result = upperFirst(stringa);
            

    }

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    {

        function cutString(str) {
            
            if (str.length < 3) {
                
                return "La stringa deve avere almeno 3 caratteri.";
                
            } else {

                return str.slice(1, -1);

            }
        }
     
            console.log(cutString("ciao")); 
            console.log(cutString("hello world")); 
            console.log(cutString("a")); 

        
        
    }

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    function giveMeRandom(n) {

        let result = [];

        for (let i = 0; i < n; i++) {

                let randomNumber = Math.floor(Math.random() * 11); 

                result.push(randomNumber);

            }
                
            return result;

    }
            console.log(giveMeRandom(6));

