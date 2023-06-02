<<<<<<< HEAD
class SonAccount {
    private balance: number;
  
    constructor() {
      this.balance = 0;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
    }
  
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Saldo insufficiente.");
      }
    }
  
    getBalance(): number {
      return this.balance;
    }
}
  
  class MotherAccount extends SonAccount {
    private interessi: number;
  
    constructor() {
      super();
      this.interessi = 0.10; // Tasso di interesse del 10%
    }
  
    calculateInterest(): number {
      const interest = this.getBalance() * this.interessi;
      this.deposit(interest);
      return interest;
    }
  }
  
    const sonAmountInput = document.getElementById('sonAmount') as HTMLInputElement;
    const sonDepositButton = document.getElementById('sonDeposit') as HTMLButtonElement;
    const sonWithdrawButton = document.getElementById('sonWithdraw') as HTMLButtonElement;
    const sonBalanceText = document.getElementById('sonBalance') as HTMLParagraphElement;

    const motherAmountInput = document.getElementById('motherAmount') as HTMLInputElement;
    const motherDepositButton = document.getElementById('motherDeposit') as HTMLButtonElement;
    const motherWithdrawButton = document.getElementById('motherWithdraw') as HTMLButtonElement;
    const calculateInterestButton = document.getElementById('calculateInterest') as HTMLButtonElement;
    const motherBalanceText = document.getElementById('motherBalance') as HTMLParagraphElement;

    // Creazione degli oggetti conto corrente
    const sonAccount = new SonAccount();
    const motherAccount = new MotherAccount();

    // Eventi per il conto figlio
    sonDepositButton.addEventListener('click', () => {
    const amount = parseFloat(sonAmountInput.value);
    sonAccount.deposit(amount);
    sonBalanceText.textContent = `Saldo: ${sonAccount.getBalance()}`;
    });

    sonWithdrawButton.addEventListener('click', () => {
    const amount = parseFloat(sonAmountInput.value);
    sonAccount.withdraw(amount);
    sonBalanceText.textContent = `Saldo: ${sonAccount.getBalance()}`;
    });

    // Eventi per il conto madre
    motherDepositButton.addEventListener('click', () => {
    const amount = parseFloat(motherAmountInput.value);
    motherAccount.deposit(amount);
    motherBalanceText.textContent = `Saldo: ${motherAccount.getBalance()}`;
    });

    motherWithdrawButton.addEventListener('click', () => {
    const amount = parseFloat(motherAmountInput.value);
    motherAccount.withdraw(amount);
    motherBalanceText.textContent = `Saldo: ${motherAccount.getBalance()}`;
    });

    calculateInterestButton.addEventListener('click', () => {
    const interest = motherAccount.calculateInterest();
    motherBalanceText.textContent = `Saldo: ${motherAccount.getBalance()} (Interesse: ${interest})`;
    });
=======
class SonAccount {
    private balance: number;
  
    constructor() {
      this.balance = 0;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
    }
  
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Saldo insufficiente.");
      }
    }
  
    getBalance(): number {
      return this.balance;
    }
}
  
  class MotherAccount extends SonAccount {
    private interessi: number;
  
    constructor() {
      super();
      this.interessi = 0.10; // Tasso di interesse del 10%
    }
  
    calculateInterest(): number {
      const interest = this.getBalance() * this.interessi;
      this.deposit(interest);
      return interest;
    }
  }
  
    const sonAmountInput = document.getElementById('sonAmount') as HTMLInputElement;
    const sonDepositButton = document.getElementById('sonDeposit') as HTMLButtonElement;
    const sonWithdrawButton = document.getElementById('sonWithdraw') as HTMLButtonElement;
    const sonBalanceText = document.getElementById('sonBalance') as HTMLParagraphElement;

    const motherAmountInput = document.getElementById('motherAmount') as HTMLInputElement;
    const motherDepositButton = document.getElementById('motherDeposit') as HTMLButtonElement;
    const motherWithdrawButton = document.getElementById('motherWithdraw') as HTMLButtonElement;
    const calculateInterestButton = document.getElementById('calculateInterest') as HTMLButtonElement;
    const motherBalanceText = document.getElementById('motherBalance') as HTMLParagraphElement;

    // Creazione degli oggetti conto corrente
    const sonAccount = new SonAccount();
    const motherAccount = new MotherAccount();

    // Eventi per il conto figlio
    sonDepositButton.addEventListener('click', () => {
    const amount = parseFloat(sonAmountInput.value);
    sonAccount.deposit(amount);
    sonBalanceText.textContent = `Saldo: ${sonAccount.getBalance()}`;
    });

    sonWithdrawButton.addEventListener('click', () => {
    const amount = parseFloat(sonAmountInput.value);
    sonAccount.withdraw(amount);
    sonBalanceText.textContent = `Saldo: ${sonAccount.getBalance()}`;
    });

    // Eventi per il conto madre
    motherDepositButton.addEventListener('click', () => {
    const amount = parseFloat(motherAmountInput.value);
    motherAccount.deposit(amount);
    motherBalanceText.textContent = `Saldo: ${motherAccount.getBalance()}`;
    });

    motherWithdrawButton.addEventListener('click', () => {
    const amount = parseFloat(motherAmountInput.value);
    motherAccount.withdraw(amount);
    motherBalanceText.textContent = `Saldo: ${motherAccount.getBalance()}`;
    });

    calculateInterestButton.addEventListener('click', () => {
    const interest = motherAccount.calculateInterest();
    motherBalanceText.textContent = `Saldo: ${motherAccount.getBalance()} (Interesse: ${interest})`;
    });
>>>>>>> ff596c00807040fb14a60d577becd26baf5a4f28
  