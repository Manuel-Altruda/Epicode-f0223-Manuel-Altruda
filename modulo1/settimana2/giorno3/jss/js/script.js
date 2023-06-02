<<<<<<< HEAD
/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 8;
let n2 = 10;

if (n1 > n2) {
    console.log(` Il primo numero che e' ${n1} e' maggiore di ${n2}che e' il secondo numero`); 
    } else if (n1 < n2) {
        console.log(` Il secondo numero che e' ${n2} e' maggiore del primo numero che e' ${n1}`); 
    } else {
        console.log("i numeri sono uguali");
    }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n = 11;

if (n != 5) {
    console.log("not equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{ 

    function div5(n) {
    
    if (n % 5 == 0) {
        console.log("divisibile per 5");
    } else {
        console.log("non divisibile per 5");
    }

}
    let result = div5(5);
}

{
    function div5_V2(n2) {

        if (n2 % 5 === 0) {
            console.log("divisibile per 5");
        } else {
            console.log("non divisibile per 5");
        }
        
    }

    let result = div5_V2(11);

}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
{ 
    let n1 = 8;
    let n2 = 16;

    if ( n1 == 8 || n2 == 8) {

        console.log(" e' 8 uno dei due numeri ");

        } else if ( n1 + n2 == 8) { 

        console.log(" la somma di due numeri e' 8 ");

            }   else if ( n1 - n2 == 8 || n2 - n1 == 8) {  
                console.log(" la differenza di due numeri e' 8 ");
            }

}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{   
    
    let totalShoppingCart = 60;
    

    function checkout(totalShoppingCart) {
        if (totalShoppingCart > 50) {
            console.log("il carrello dell'utente ha diritto alla spedizione gratuita");
        } else if (totalShoppingCart < 50) {
                console.log("il carrello dell'utente non ha diritto alla spedizione gratuita");
            } 
    
    }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{

    let totaleCarrello = 120;
    let totaleCosto = 10;
    let promo = 0.20
    
        if (totaleCarrello > 50) {
            
            console.log(`Totale Carrelo : ${totaleCarrello * promo}€.`);
        
        } else {
            console.log(`Totale Carrello : ${(totaleCarrello + totaleCosto) * promo}€.`);
        }
    
}

{

    let totaleCarrello = 40;
    let totaleCosto = 10;
    let promo = 0.20

    if (totaleCarrello > 50) {
            
        console.log(`Totale Carrelo : ${totaleCarrello * promo}€.`);
    
    } else {
        console.log(`Totale Carrello : ${(totaleCarrello + totaleCosto) * promo}€.`);
    }

}




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    let numeri = [2, 4, 10];

    numeri.sort(function(a, b) {
        return a - b;
    });
    console.log(numeri);
   





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{
    let numeri = [11];

    if (typeof numeri === 'number') {
        console.log("variabile di tipo number");
    } else {
        console.log("variabile di tipo string");
    }

}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function pari(n) {
    if (n % 2 == 0) {
        console.log("pari");
    } else {
        console.log("dispari");
    }
}
    pari(5);


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/


  let val = 7
  if (val < 5) {
     console.log("Meno di 5");
    } else if (val < 10) {
       console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }






/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

    const me = { 

    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  } 
    me.city = 'Toronto';
    console.log(me);
  
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  /* SCRIVI QUI LA TUA RISPOSTA */


  delete me.lastName;
  console.log(me);
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  /* SCRIVI QUI LA TUA RISPOSTA */
    
  me.skills.pop();
  console.log(me);
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  /* SCRIVI QUI LA TUA RISPOSTA */

  let arrayNumeri = [];
  arrayNumeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  /* SCRIVI QUI LA TUA RISPOSTA */

    arrayNumeri[9] =  100;


  
=======
/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 8;
let n2 = 10;

if (n1 > n2) {
    console.log(` Il primo numero che e' ${n1} e' maggiore di ${n2}che e' il secondo numero`); 
    } else if (n1 < n2) {
        console.log(` Il secondo numero che e' ${n2} e' maggiore del primo numero che e' ${n1}`); 
    } else {
        console.log("i numeri sono uguali");
    }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n = 11;

if (n != 5) {
    console.log("not equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{ 

    function div5(n) {
    
    if (n % 5 == 0) {
        console.log("divisibile per 5");
    } else {
        console.log("non divisibile per 5");
    }

}
    let result = div5(5);
}

{
    function div5_V2(n2) {

        if (n2 % 5 === 0) {
            console.log("divisibile per 5");
        } else {
            console.log("non divisibile per 5");
        }
        
    }

    let result = div5_V2(11);

}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
{ 
    let n1 = 8;
    let n2 = 16;

    if ( n1 == 8 || n2 == 8) {

        console.log(" e' 8 uno dei due numeri ");

        } else if ( n1 + n2 == 8) { 

        console.log(" la somma di due numeri e' 8 ");

            }   else if ( n1 - n2 == 8 || n2 - n1 == 8) {  
                console.log(" la differenza di due numeri e' 8 ");
            }

}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{   
    
    let totalShoppingCart = 60;
    

    function checkout(totalShoppingCart) {
        if (totalShoppingCart > 50) {
            console.log("il carrello dell'utente ha diritto alla spedizione gratuita");
        } else if (totalShoppingCart < 50) {
                console.log("il carrello dell'utente non ha diritto alla spedizione gratuita");
            } 
    
    }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{

    let totaleCarrello = 120;
    let totaleCosto = 10;
    let promo = 0.8
    
        if (totaleCarrello > 50) {
            
            console.log(`Totale Carrelo : ${totaleCarrello * promo}€.`);
        
        } else {
            console.log(`Totale Carrello : ${(totaleCarrello + totaleCosto) * promo}€.`);
        }
    
}

{

    let totaleCarrello = 40;
    let totaleCosto = 10;
    let promo = 0.8

    if (totaleCarrello > 50) {
            
        console.log(`Totale Carrelo : ${totaleCarrello * promo}€.`);
    
    } else {
        console.log(`Totale Carrello : ${(totaleCarrello + totaleCosto) * promo}€.`);
    }

}




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    let numeri = [2, 4, 10];

    numeri.sort(function(a, b) {
        return a - b;
    });
    console.log(numeri);
   





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{
    let numeri = [11];

    if (typeof numeri === 'number') {
        console.log("variabile di tipo number");
    } else {
        console.log("variabile di tipo string");
    }

}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function pari(n) {
    if (n % 2 == 0) {
        console.log("pari");
    } else {
        console.log("dispari");
    }
}
    pari(5);


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/


  let val = 7
  if (val < 5) {
     console.log("Meno di 5");
    } else if (val < 10) {
       console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }






/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

    const me = { 

    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  } 
    me.city = 'Toronto';
    console.log(me);
  
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  /* SCRIVI QUI LA TUA RISPOSTA */


  delete me.lastName;
  console.log(me);
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  /* SCRIVI QUI LA TUA RISPOSTA */
    
  me.skills.pop();
  console.log(me);
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  /* SCRIVI QUI LA TUA RISPOSTA */

  let arrayNumeri = [];
  arrayNumeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  /* SCRIVI QUI LA TUA RISPOSTA */

    arrayNumeri[9] =  100;


  
>>>>>>> ff596c00807040fb14a60d577becd26baf5a4f28
