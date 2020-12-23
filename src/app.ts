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

    //using tuples to pass values
    let values: [string, string, number];
    values = [tofrom.value,details.value,amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values)//we use the spread operator to spread out the values
    }else{
        doc = new Payment(...values)
    }

    list.render(doc , type.value , 'end'); //this renders the invoice or payment on the main list
    
});

//TypeScript Tutorial #20 - Tuples

//array
let arr = ['ryu' , 25 , true]; 
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false , 'yoshi'];
//tuple
let tup: [string , number , boolean] =  ['ryu', 25 , true]; //this works ok because the position types match
//let tup: [string , number , boolean] =  ['ryu', true , true]; //this does not work because the positions types dont match
tup[0] = 'ken';
tup[1] = 30;
tup[2] = false;

let student: [string, number];
student = ['chun-li',232354];
