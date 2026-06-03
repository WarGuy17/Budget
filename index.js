//these are the imports from other js documents.
import {budget, budgetUsed, budgetLeft, barMarker, barFill, paymentButton, paymentPopup, closeButton} from './variables.js';

//the class below tracks the total budget of the month.
//need to add logic to the setters to make sure the inputs are not going below 0
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
//Need to make an array as one property and have the user input them into the constructor arguements.
//then loop through it as a method instead of individually adding them
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

//this is logic colors checking the percentage and coloring the bar differently.
function colorBar(){
    if(usedPercent < 50){
        barFill.style.background = '#4caf50';
    } else if(usedPercent < 90){
        barFill.style.background = '#ffeb3b';
    } else {
        barFill.style.background = '#f44336';
    }
}

//made a budget using the Budget Class.
const justinBudget = new Budget(60, 45, 105);

//made a payment using the Payment Class.
const justinPayment = new Payments(0, 744, 600, 250, 60, 45, 105, 0);

//method that calculates the total budget.
const totalBudget = justinBudget.budgetTotal();

//method that calculates the total spent.
const spent = justinPayment.paymentTotal();

//simple subtraction between totalBudget and spent to get difference into a new variable.
const remainingBudget = totalBudget - spent;

//using Math.min and Math.max putting a clamp on 100% being the cap and 0% being the lowest. Using this for bar.
const usedPercent = Math.min(100, Math.max(0, (spent / totalBudget) * 100));

//fills bar 
barFill.style.width = `${usedPercent}%`;

//adds a marker at the end of the bar.
barMarker.style.left = `${usedPercent}%`;

colorBar();

//Budget Total
budget.innerHTML = totalBudget;

//Budget Used
budgetUsed.innerHTML = spent;

//Budget Left
budgetLeft.innerHTML = remainingBudget;

//defaults popup to be hidden in beginning of script.
paymentPopup.classList.add('hidden');

//this is for the Payments button to allow the popup to be seen.
paymentButton.addEventListener('click', () => {
    paymentPopup.classList.remove('hidden');
})

//this is the close or x button on the popup to close the window.
closeButton.addEventListener('click', () => {
    paymentPopup.classList.add('hidden');
})






