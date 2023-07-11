function generaNumeroCasuale(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function calcolaDistanza(numero: number, target: number): number {
    return Math.abs(numero - target);
  }
  
  function confrontaGiocatori(giocatore1: number, giocatore2: number, numeroCasuale: number): string {
    const distanza1 = calcolaDistanza(giocatore1, numeroCasuale);
    const distanza2 = calcolaDistanza(giocatore2, numeroCasuale);
  
    if (giocatore1 === numeroCasuale && giocatore2 === numeroCasuale) {
      return `Entrambi i giocatori hanno indovinato il numero casuale ${numeroCasuale}!`;
    } else if (giocatore1 === numeroCasuale) {
      return `Il giocatore 1 ha indovinato il numero casuale ${numeroCasuale}!`;
    } else if (giocatore2 === numeroCasuale) {
      return `Il giocatore 2 ha indovinato il numero casuale ${numeroCasuale}!`;
    } else {
      if (distanza1 === distanza2) {
        return `Nessuno dei due ha indovinato il numero casuale ${numeroCasuale}, ma entrambi si sono avvicinati alla stessa distanza.`;
      } else if (distanza1 < distanza2) {
        return `Nessuno dei due ha indovinato il numero casuale ${numeroCasuale}, ma il giocatore 1 si è avvicinato di più.`;
      } else {
        return `Nessuno dei due ha indovinato il numero casuale ${numeroCasuale}, ma il giocatore 2 si è avvicinato di più.`;
      }
    }
  }
  
  const giocatore1 = 5;
  const giocatore2 = 10;
  const numeroCasuale = generaNumeroCasuale(1, 100);
  
  const risultato = confrontaGiocatori(giocatore1, giocatore2, numeroCasuale);
  console.log(risultato);
  