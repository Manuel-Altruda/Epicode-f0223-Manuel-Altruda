"use strict";
// Definizione della calsse astratta del lavoratore
class lavoratoreAutonomo {
    constructor(codredd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getTasseInps() {
        return this.tasseInps;
    }
    getTasseIrpef() {
        return this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        const tasseTotali = this.tasseInps + this.tasseIrpef;
        return this.redditoAnnuoLordo - tasseTotali;
    }
}
// Definizione delle classi lavoratoreAutonomoTipoA e lavoratoreAutonomoTipoB
class lavoratoreAutonomoTipoA extends lavoratoreAutonomo {
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.5;
    }
}
class lavoratoreAutonomoTipoB extends lavoratoreAutonomo {
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.9;
    }
}

 // Funzione chiamata al clic del pulsante "Calcola"
function calcolaTasse() {
    const codredd = Number(document.getElementById('codredd').value);
    const redditoAnnuoLordo = (document.getElementById('redditoAnnuoLordo').value);
    const tasseInps = (document.getElementById('tasseInps').value);
    const tasseIrpef = (document.getElementById('tasseIrpef').value);

    let lavoratore;

    if (codredd === 1) {
      lavoratore = new lavoratoreAutonomoTipoA(codredd, redditoAnnuoLordo, tasseInps, tasseIrpef);
    } else if (codredd === 2) {
      lavoratore = new lavoratoreAutonomoTipoB(codredd, redditoAnnuoLordo, tasseInps, tasseIrpef);
    } else {
      alert("Codice di redditività non valido!");
      return;
    }

    const tasseInpsOutput = lavoratore.getTasseInps();
    const tasseIrpefOutput = lavoratore.getTasseIrpef();
    const redditoAnnuoNetto = lavoratore.getRedditoAnnuoNetto();

    document.getElementById('tasseInpsOutput').innerHTML = tasseInpsOutput.toString();
    document.getElementById('tasseIrpefOutput').innerHTML = tasseIrpefOutput.toString();
    document.getElementById('redditoAnnuoNetto').innerHTML = redditoAnnuoNetto.toString();
    
    // Svuotamento dei campi di input
    document.getElementById('codredd').value = '';
    document.getElementById('redditoAnnuoLordo').value = '';
    document.getElementById('tasseInps').value = '';
    document.getElementById('tasseIrpef').value = '';
}

// ora vado ad usare le classi
const lavoratoreA = new lavoratoreAutonomoTipoA(1, 50000, 5000, 10000);
console.log("Lavoratore A:");
console.log("Tasse INPS:", lavoratoreA.getTasseInps());
console.log("Tasse IRPEF:", lavoratoreA.getTasseIrpef());
console.log("Reddito Annuo Netto:", lavoratoreA.getRedditoAnnuoNetto());
console.error("====================SVILUPPO IN CONSOLE===============================");
const lavoratoreB = new lavoratoreAutonomoTipoB(2, 70000, 6000, 12000);
console.log("Lavoratore B:");
console.log("Tasse INPS:", lavoratoreB.getTasseInps());
console.log("Tasse IRPEF:", lavoratoreB.getTasseIrpef());
console.log("Reddito Annuo Netto:", lavoratoreB.getRedditoAnnuoNetto());

console.error("====================SVILUPPO IN HTML===============================");