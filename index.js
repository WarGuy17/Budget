const wage = 35.32;

function monthlyPay(hours){
    let payCheck;
    if(hours <= 80){
        payCheck = hours * wage;
    }
    else if(hours > 80){
        const overTime = hours - 80;
        const overTimeWage = wage * 1.5;
        const overTimePay = overTime * overTimeWage;
        payCheck = 80 * wage;
        payCheck = payCheck + overTimePay;
    }
    console.log(Math.round((payCheck * .677)* 2));
}

monthlyPay(84);

class Budget {
    constructor(subscriptions, phone, internet){
        this._rent = 1450;
        this._carPayments = 744;
        this._grocery = 600;
        this._electric = 250;
        this._subscriptions = subscriptions;
        this._phone = phone;
        this._internet = internet;
    }

    get rent(){
        return this._rent;
    }

    get carPayments(){
        return this._carPayments;
    }

    get grocery(){
        return this._grocery;
    }

    get electric(){
        return this._electric;
    }

    get subscriptions(){
        return this._subscriptions;
    }

    get phone(){
        return this._phone;
    }

    get internet(){
        return this._internet;
    }

    set rent(price){
        this._rent = price;
    }

    set carPayments(price){
        this._carPayments = price;
    }

    set grocery(price){
        this._grocery = price;
    }
    
    set electric(price){
        this._electric = price;
    }

    set subscriptions(price){
        this._subscriptions = price;
    }

    set phone(price){
        this._phone = price;
    }

    set internet(price){
        this._internet = price;
    }

    budgetTotal(){
        const rent = this._rent;
        const carPayments = this._carPayments;
        const grocery = this._grocery;
        const electric = this._electric;
        const subscriptions = this._subscriptions;
        const phone = this._phone;
        const internet = this._internet;

        return rent + carPayments + grocery + electric + subscriptions + phone + internet;
    }
}

const justinBudget = new Budget(60, 45, 105);

console.log(justinBudget.budgetTotal());