// Definizione della calsse astratta del lavoratore
abstract class lavoratoreAutonomo {
    protected codredd: number;
    protected redditoAnnuoLordo: number;
    protected tasseInps: number;
    protected tasseIrpef: number;
  
    constructor(codredd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
      this.codredd = codredd;
      this.redditoAnnuoLordo = redditoAnnuoLordo;
      this.tasseInps = tasseInps;
      this.tasseIrpef = tasseIrpef;
    }
  
    abstract getUtileTasse(): number; // ho messo abstract perchè poi questo metodo lo implemento nelle classi derivate
  
    getTasseInps(): number {    // metodo per farmi accedere alle tasse inps
      return this.tasseInps;
    }
  
    getTasseIrpef(): number {   // metodo per farmi accedere alle tasse irpef
      return this.tasseIrpef;
    }
  
    getRedditoAnnuoNetto(): number {    // metodo per farmi accedere al reddito annuo netto
      const tasseTotali = this.tasseInps + this.tasseIrpef;
      return this.redditoAnnuoLordo - tasseTotali;
    }
  }
  
// Definizione delle classi lavoratoreAutonomoTipoA e lavoratoreAutonomoTipoB

class lavoratoreAutonomoTipoA extends lavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoAnnuoLordo * 0.5;
    }
}
  
class lavoratoreAutonomoTipoB extends lavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoAnnuoLordo * 0.9;
    }
}

// ora vado ad usare le classi

const lavoratoreA = new lavoratoreAutonomoTipoA(1, 50000, 5000, 10000);
console.log("Lavoratore A:");
console.log("Tasse INPS:", lavoratoreA.getTasseInps());
console.log("Tasse IRPEF:", lavoratoreA.getTasseIrpef());
console.log("Reddito Annuo Netto:", lavoratoreA.getRedditoAnnuoNetto());

console.error("===================================================")

const lavoratoreB = new lavoratoreAutonomoTipoB(2, 70000, 6000, 12000);
console.log("Lavoratore B:");
console.log("Tasse INPS:", lavoratoreB.getTasseInps());
console.log("Tasse IRPEF:", lavoratoreB.getTasseIrpef());
console.log("Reddito Annuo Netto:", lavoratoreB.getRedditoAnnuoNetto());

  