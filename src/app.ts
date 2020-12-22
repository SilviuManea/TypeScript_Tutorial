//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */

//TypeScript Tutorial #15 - Interfaces
interface IsPerson { //defining the interface
    name: string;
    age: number;
    speak(a: string): void;
    spend(a:number):number;
}

const me: IsPerson = { //creating a constant that matches the structure of the interface.
    name: 'silviu',
    age: 33 ,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number {
        console.log('I spent', amount);
        return amount;
    }
};

//using the interface on a paramter so that when we use the method we have to match all its methods and properties
const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}
//invoking the method greetPerson with only one property
//greetPerson({name:'silviu'}) //<--it does not work because it does not match the interface

//invoking the method with a person object
greetPerson(me); //<--since me is a OK match of the interface it works ok.


console.log(me);

let someone : IsPerson //in order to use that variable in the future we have to first match its properties from the interface



import {Invoice} from './classes/Invoice.js' //important it has to be .js since the browser is importing the compiled file


//instantiate the class
const invOne = new Invoice('Mario' , 'work on the mario website' , 250);
const invTwo = new Invoice('Luigi' , 'work on the Luigi website' , 300);

//console.log(invOne , invTwo);

//create an array where we can only add invoice objects
let invoices:Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

//in lesson 13 we can learn how to use private properties and access modifiers to limit this.
//////////////////////////////////////////////////////////////
invoices.forEach(inv => {
    console.log(inv.client , inv.amount , inv.format());
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;//when we use 'as' we dont have to use the exclamation mark '!'


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//grab the form and add event listener
form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})