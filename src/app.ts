//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */
import { Invoice } from './classes/Invoice.js'; //TypeScript Tutorial #16 - Interfaces with Classes
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'; //TypeScript Tutorial #16 - Interfaces with Classes
import { HasFormatter } from './interfaces/HasFormatter.js'; //TypeScript Tutorial #16 - Interfaces with Classes

const form = document.querySelector('.new-item-form') as HTMLFormElement;//when we use 'as' we dont have to use the exclamation mark '!'

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance 
const ul = document.querySelector('ul')!; //grab the referente of the list from html
const list = new ListTemplate(ul);

//grab the form and add event listener
form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }

    list.render(doc , type.value , 'end'); //this renders the invoice or payment on the main list
    //console.log(doc);
});