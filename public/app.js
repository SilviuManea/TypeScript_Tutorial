"use strict";
//TypeScript Tutorial #13 - Public, Private & Readonly
//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */
//Classes
var Invoice = /** @class */ (function () {
    //properties
    // readonly client: string; //we can read it from inside the class and outside but we cant change it
    // private details: string; //a private property will only be available inside the class
    // public amount: number; //public allows reading and changing the value outside of the class and inside
    //constructor v2- asigning the properties and their scope in the constructor directly
    function Invoice(client, //in order to assign the properties directly in the constructor we have to use the modifiers(public,provate,readonly)
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //methods
    Invoice.prototype.format = function () {
        //this.client = 'something else' // <-- we can not change it because it's read only
        return this.client + " owes \u20AC" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
//instantiate the class
var invOne = new Invoice('Mario', 'work on the mario website', 250);
var invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);
//console.log(invOne , invTwo);
//create an array where we can only add invoice objects
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//in lesson 13 we can learn how to use private properties and access modifiers to limit this.
//////////////////////////////////////////////////////////////
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form'); //when we use 'as' we dont have to use the exclamation mark '!'
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//grab the form and add event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
