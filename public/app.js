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
    //using tuples to pass values
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values); //we use the spread operator to spread out the values
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end'); //this renders the invoice or payment on the main list
});
//TypeScript Tutorial #20 - Tuples
//array
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
//tuple
let tup = ['ryu', 25, true]; //this works ok because the position types match
//let tup: [string , number , boolean] =  ['ryu', true , true]; //this does not work because the positions types dont match
tup[0] = 'ken';
tup[1] = 30;
tup[2] = false;
let student;
student = ['chun-li', 232354];
