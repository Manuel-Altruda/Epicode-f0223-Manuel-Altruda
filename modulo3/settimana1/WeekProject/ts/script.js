"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: €${this.carica.toFixed(2)}`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        const costoChiamata = min * this.costoMinuto;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            const id = this.numeroChiamate;
            const durata = min;
            const dataOra = new Date();
            this.registroChiamate.push({ id, durata, dataOra });
            console.log(`Chiamata effettuata: durata ${min} minuti.`);
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    mostraRegistroChiamate() {
        console.log("Registro chiamate:");
        for (const chiamata of this.registroChiamate) {
            console.log(`ID: ${chiamata.id}`);
            console.log(`Durata: ${chiamata.durata} minuti`);
            console.log(`Data e ora: ${chiamata.dataOra}`);
            console.log("--------------------");
        }
    }
    filtraChiamatePerDataOra(dataOra) {
        console.log(`Chiamate effettuate il ${dataOra}:`);
        const chiamateFiltrate = this.registroChiamate.filter(chiamata => {
            const chiamataDataOra = chiamata.dataOra;
            return (chiamataDataOra.getFullYear() === dataOra.getFullYear() &&
                chiamataDataOra.getMonth() === dataOra.getMonth() &&
                chiamataDataOra.getDate() === dataOra.getDate() &&
                chiamataDataOra.getHours() === dataOra.getHours() &&
                chiamataDataOra.getMinutes() === dataOra.getMinutes());
        });
        for (const chiamata of chiamateFiltrate) {
            console.log(`ID: ${chiamata.id}`);
            console.log(`Durata: ${chiamata.durata} minuti`);
            console.log(`Data e ora: ${chiamata.dataOra}`);
            console.log("--------------------");
        }
    }
}

function mostraRegistroChiamate() {
    const smartphone1 = new Smartphone();
    const registroChiamate = smartphone1.registroChiamate;
  
    if (registroChiamate.length === 0) {
      console.log("Nessuna chiamata nel registro.");
      return;
    }
  
    const randomIndex = getRandomIndex(registroChiamate.length);
    const randomChiamata = registroChiamate[randomIndex];
  
    console.log(`Chiamata casuale nel registro:`);
    console.log(`ID: ${randomChiamata.id}`);
    console.log(`Durata: ${randomChiamata.durata} minuti`);
    console.log(`Data e ora: ${randomChiamata.dataOra}`);
  }
  
  function mostraNumeroChiamate() {
    const smartphone1 = new Smartphone();
    const numeroChiamate = smartphone1.getNumeroChiamate();
    console.log(`Numero chiamate: ${numeroChiamate}`);
  }
  
  function mostraCarica() {
    const smartphone1 = new Smartphone();
    const carica = smartphone1.carica.toFixed(2);
    console.log(`Credito residuo: €${carica}`);
  }
  
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

// vado a fare un check di controllo per vedere se tutto funziona in console
const smartphone1 = new Smartphone();
smartphone1.ricarica(10);
console.log(smartphone1.numero404()); // Credito residuo: €10.00
smartphone1.chiamata(5); // Chiamata effettuata: durata 5 minuti.
console.log(smartphone1.numero404()); // Credito residuo: €9.00
console.log("--------------------");
console.log(smartphone1.getNumeroChiamate()); // Output: 1
console.log("--------------------");
smartphone1.chiamata(10); // Credito insufficiente per effettuare la chiamata.
console.log(smartphone1.numero404()); // Credito residuo: €9.00
smartphone1.azzeraChiamate();
console.log("--------------------");
console.log(smartphone1.getNumeroChiamate()); // Output: 0
console.log("--------------------");
smartphone1.chiamata(3); // Chiamata effettuata: durata 3 minuti.
console.log(smartphone1.numero404()); // Credito residuo: €8.40
smartphone1.chiamata(2); // Chiamata effettuata: durata 2 minuti.
console.log(smartphone1.numero404()); // Credito residuo: €8.00
smartphone1.mostraRegistroChiamate();
smartphone1.filtraChiamatePerDataOra(new Date(2023, 4, 26, 12, 34));
const smartphone2 = new Smartphone();
smartphone2.ricarica(20);
smartphone2.chiamata(8); // Chiamata effettuata: durata 8 minuti.
smartphone2.chiamata(12); // Chiamata effettuata: durata 12 minuti.
smartphone2.mostraRegistroChiamate();
const smartphone3 = new Smartphone();
smartphone3.ricarica(5);
smartphone3.chiamata(2); // Chiamata effettuata: durata 2 minuti.
smartphone3.mostraRegistroChiamate();
//# sourceMappingURL=script.js.map