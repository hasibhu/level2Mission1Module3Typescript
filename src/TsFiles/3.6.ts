

// getter and setter 


class BnakAccount  {

    public readonly id: number;  //not modifiable
    public name: string;
    private _balance: number; //not modifiable with accessing the class


    constructor(id: number, name: string, balance: number){ 
        this.id = id;
        this.name = name;
        this._balance = balance;
    }


    // public addDeposit(amount: number) {
    //     return this._balance += amount;
    // };

    // use setter 
    set addDeposit(amount: number) {
         this._balance += amount;
    };

    public withdrawDeposit(amount: number) {
        return this._balance -= amount;
    };
    

    // public currentBalance() {
    //     return this._balance;
    // }

    // use  getter
    get Balance() {
        return this._balance
    } 

};





const poorAccount = new BnakAccount(123, 'Anik', 500)

// poorAccount.addDeposit(2000)
poorAccount.addDeposit=3000
// console.log(poorAccount);
// poorAccount.withdrawDeposit(2000)
// console.log(poorAccount);

// current balance is being accessed with calling function 
// console.log(poorAccount.currentBalance());

// now current balance is being accessed without calling function 
console.log(poorAccount.Balance);


