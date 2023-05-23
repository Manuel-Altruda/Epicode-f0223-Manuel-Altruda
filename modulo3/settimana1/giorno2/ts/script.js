"use strict";
class SonAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficiente.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class MotherAccount extends SonAccount {
    constructor() {
        super();
        this.interessi = 0.9; // Tasso di interesse del 10%
    }
    calculateInterest() {
        const interest = this.getBalance() * this.interessi;
        this.deposit(interest);
        return interest;
    }
}
const sonAmountInput = document.getElementById('sonAmount');
const sonDepositButton = document.getElementById('sonDeposit');
const sonWithdrawButton = document.getElementById('sonWithdraw');
const sonBalanceText = document.getElementById('sonBalance');
const motherAmountInput = document.getElementById('motherAmount');
const motherDepositButton = document.getElementById('motherDeposit');
const motherWithdrawButton = document.getElementById('motherWithdraw');
const calculateInterestButton = document.getElementById('calculateInterest');
const motherBalanceText = document.getElementById('motherBalance');
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
//# sourceMappingURL=script.js.map