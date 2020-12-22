//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */
import { Invoice } from './classes/Invoice.js'; //important it has to be .js since the browser is importing the compiled file
//instantiate the class
const invOne = new Invoice('Mario', 'work on the mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);
//console.log(invOne , invTwo);
//create an array where we can only add invoice objects
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//in lesson 13 we can learn how to use private properties and access modifiers to limit this.
//////////////////////////////////////////////////////////////
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form'); //when we use 'as' we dont have to use the exclamation mark '!'
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//grab the form and add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
