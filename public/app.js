"use strict";
//TypeScript Tutorial #13 - Public, Private & Readonly
//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */
//Classes
var Invoice = /** @class */ (function () {
    //constructor
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //methods
    Invoice.prototype.format = function () {
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
console.log(invoices);
//since this properties are public, we can modify them
invOne.client = 'yoshi';
invTwo.amount = 400;
console.log(invOne, invTwo);
//in lesson 13 we can learn how to use private properties and access modifiers to limit this.
//////////////////////////////////////////////////////////////
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
