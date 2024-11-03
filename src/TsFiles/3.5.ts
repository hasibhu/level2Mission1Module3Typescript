

// access modifiers 


class BnakAccount  {

    public readonly id: number;  //not modifiable
    public name: string;
    private _balance: number; //not modifiable with accessing the class


    constructor(id: number, name: string, balance: number){ 
        this.id = id;
        this.name = name;
        this._balance = balance;
    }


    addDeposit(amount: number) {
        return this._balance += amount;
    };

    withdrawDeposit(amount: number) {
        return this._balance -= amount;
    };
    

    currentBalance() {
        return this._balance;
    }

};

const poorAccount = new BnakAccount(123, 'Anik', 500)

poorAccount.addDeposit(2000)
console.log(poorAccount);
poorAccount.withdrawDeposit(2000)
console.log(poorAccount);
console.log(poorAccount.currentBalance());


