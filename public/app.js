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
});
//TypeScript Tutorial #18 - Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); //when we return the object(using T), it's going to know what properties are on the object
};
let docOne = addUID({ name: ' yoshi', age: 40 });
//let docTwo = addUID('hello') //this should not work, should not be allowed, we can combat this by extending the class object in the main function -> <T extends object> (obj: T )
console.log(docOne.name); // we can only access this because we captured that info(object property) using T on the main function addUID
//example
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun' //we have to use a string here
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
