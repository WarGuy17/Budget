const budget = document.body.querySelector('#budget_number');
const budgetUsed = document.body.querySelector('#budget_used');
const budgetLeft = document.body.querySelector('#budget_left');
const barMarker = document.querySelector('#marker_bar');
const barFill = document.querySelector('.bar-fill');
const paymentButton = document.querySelector('#payment_button');


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

//the class below tracks the total budget of the month.
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

//the class below tracks what payments the user did.
class Payments {
    constructor(rent, carPayments, grocery, electric, subscriptions, phone, internet, miscellaneous){
        this._rent = rent;
        this._carPayments = carPayments;
        this._grocery = grocery;
        this._electric = electric;
        this._subscriptions = subscriptions;
        this._phone = phone;
        this._internet = internet;
        this._miscellaneous = miscellaneous;
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

    get miscellaneous(){
        return this._miscellaneous;
    }

    set rent(payment){
        this._rent = payment;
    }

    set carPayments(payment){
        this._carPayments = payment;
    }

    set grocery(payment){
        this._grocery = payment;
    }

    set electric(payment){
        this._electric = payment;
    }

    set subscriptions(payment){
        this._subscriptions = payment;
    }

    set phone(payment){
        this._phone = payment;
    }

    set internet(payment){
        this._internet = payment;
    }

    set miscellaneous(payment){
        this._miscellaneous = payment;
    }

    paymentTotal(){
        const rent = this._rent;
        const carPayments = this._carPayments;
        const grocery = this._grocery;
        const electric = this._electric;
        const subscriptions = this._subscriptions;
        const phone = this._phone;
        const internet = this._internet;
        const miscellaneous = this._miscellaneous;

        return rent + carPayments + grocery + electric + subscriptions + phone + internet + miscellaneous;
    }
}

const justinBudget = new Budget(60, 45, 105);

const justinPayment = new Payments(1250, 744, 600, 250, 60, 45, 105, 0);

const totalBudget = justinBudget.budgetTotal();
const spent = justinPayment.paymentTotal();
const remainingBudget = totalBudget - spent;
const usedPercent = Math.min(100, Math.max(0, (spent / totalBudget) * 100));


barFill.style.width = `${usedPercent}%`;
barMarker.style.left = `${usedPercent}%`;



budget.innerHTML = totalBudget;
budgetUsed.innerHTML = spent;
budgetLeft.innerHTML = remainingBudget;

paymentButton.addEventListener('click', () => {
    
})

if(usedPercent < 50){
    barFill.style.background = '#4caf50';
} else if(usedPercent < 90){
    barFill.style.background = '#ffeb3b';
} else {
    barFill.style.background = '#f44336';
}



