// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    function giveMeRandom() {

        return Math.floor(Math.random() * 10) + 1; // generazione di un numero casuale tra 1 e 10
    }
    
    function checkArray(arr) {

        let somma = 0;

        for (let i = 0; i < arr.length; i++) {

        console.log(`${arr[i]} ${arr[i] > 5 ? "è maggiore di 5" : "non è maggiore di 5"}`);

        if (arr[i] > 5) {

            somma += arr[i];

        }

        }

        return somma;
    }
    
        let array = [giveMeRandom(), giveMeRandom(), giveMeRandom(), giveMeRandom(), giveMeRandom()];
        
        let result = checkArray(array);
        console.log(`La somma dei numeri maggiori di 5 è ${result}`);
  



/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    {

        let shoppingCart = [

            { price: 10, name: "T-shirt", id: 1, quantity: 2 },

            { price: 200, name: "Jeans", id: 2, quantity: 1 },

            { price: 5, name: "calzini", id: 3, quantity: 4 },

          ];
          
          function shoppingCartTotal(shoppingCart) {

            let total = 0;

            for (let i = 0; i < shoppingCart.length; i++) {

              const item = shoppingCart[i];

              total += item.price * item.quantity;

            }

            return total;

          }

          let total = shoppingCartTotal(shoppingCart);
          console.log(total); 
          

       
    

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

        function addToShoppingCart(item) {
            
            shoppingCart.push(item);
    
    
            return shoppingCart.length;
        }
    
        let newItem = {
            price: 129.99,
            name: "Nike",
            id: 1234,
            quantity: 1
        };
        
        let totalItems = addToShoppingCart(newItem);
        
        console.log(totalItems);  
      
        
        
        
        /* EXTRA 4
        Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
        Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
        */
       
       /* SCRIVI QUI LA TUA RISPOSTA */
       
       function maxShoppingCart(shoppingCart) {

            let maxItem = null;

            for (let i = 0; i < shoppingCart.length; i++) {

                let item = shoppingCart[i];

                if (!maxItem || item.price > maxItem.price) {

                    maxItem = item;

                }

            }

                return maxItem;

        }

            let maxItem = maxShoppingCart(shoppingCart);
            console.log(maxItem); 
       
    
            
        
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    function latestShoppingCart(shoppingCart) {

        return shoppingCart[shoppingCart.length - 1];
    
    }

        let latestItem = latestShoppingCart(shoppingCart);

        console.log(latestItem);

    }

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
