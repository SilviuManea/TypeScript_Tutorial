//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */
import { Invoice } from './classes/Invoice.js'; //TypeScript Tutorial #16 - Interfaces with Classes
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'; //TypeScript Tutorial #16 - Interfaces with Classes
const form = document.querySelector('.new-item-form'); //when we use 'as' we dont have to use the exclamation mark '!'
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance 
const ul = document.querySelector('ul'); //grab the referente of the list from html
const list = new ListTemplate(ul);
//grab the form and add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end'); //this renders the invoice or payment on the main list
    //console.log(doc);
});
