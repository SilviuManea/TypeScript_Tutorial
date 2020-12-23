//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */
import { Invoice } from './classes/Invoice.js'; //TypeScript Tutorial #16 - Interfaces with Classes
import { Payment } from './classes/Payment.js'; //TypeScript Tutorial #16 - Interfaces with Classes
import { HasFormatter } from './interfaces/HasFormatter.js'; //TypeScript Tutorial #16 - Interfaces with Classes

// let docOne: HasFormatter; //this variable must be of type hasformatter, it must implement that interface
// let docTwo: HasFormatter; //this is making sure that whatever object in the future is stored inside docOne and two has to implement that interface

// docOne = new Invoice('yoshi' , 'web work' , 250);
// docTwo = new Payment('mario' , 'plumbing work' , 200);

// let docs: HasFormatter [] = []; // we create an array that only admits objects that implement the HasFormatter interface
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// //instantiate the class
// const invOne = new Invoice('Mario' , 'work on the mario website' , 250);
// const invTwo = new Invoice('Luigi' , 'work on the Luigi website' , 300);

// //console.log(invOne , invTwo);

// //create an array where we can only add invoice objects
// let invoices:Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// //in lesson 13 we can learn how to use private properties and access modifiers to limit this.
// //////////////////////////////////////////////////////////////
// invoices.forEach(inv => {
//     console.log(inv.client , inv.amount , inv.format());
// });


const form = document.querySelector('.new-item-form') as HTMLFormElement;//when we use 'as' we dont have to use the exclamation mark '!'


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//grab the form and add event listener
form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }

    console.log(doc);
});