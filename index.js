class BankAccount {
  constructor(owner, balance) {
    this._owner = owner;
    this._balance = balance;
  }

  get accountInfo() {
    return `Owner: ${this._owner} | Balance: ${this._balance}`;
  }
  set owner(owner) {
    if (owner.length > 0) {
      this._owner = owner;
    } else {
      console.log("Cannot Accept Empty");
    }
  }

  withdraw(funds) {
    if (this._balance > 0) {
      this._balance -= funds;
      console.log(`Withdraw successfully. New balance: ${this._balance}`);
    } else {
      console.log(`Not enough balance: ${this._balance}`);
    }
  }
  deposit(funds) {
    this._balance += funds;
    console.log(`Deposit successfully. New balance: ${this._balance}`);
  }
}

const bankOwner1 = new BankAccount("Rhogenn", 20000);
bankOwner1.withdraw(12000);
bankOwner1.deposit(32000);
console.log(bankOwner1.accountInfo);
