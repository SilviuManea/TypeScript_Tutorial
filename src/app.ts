//TypeScript Tutorial #12 - Classes

//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */

//Classes
class Invoice {

    //properties
    client: string;
    details: string;
    amount: number;

    //constructor
    constructor(c:string , d:string , a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    //methods
    format(){
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}

//instantiate the class
const invOne = new Invoice('Mario' , 'work on the mario website' , 250);
const invTwo = new Invoice('Luigi' , 'work on the Luigi website' , 300);

//console.log(invOne , invTwo);

//create an array where we can only add invoice objects
let invoices:Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

//since this properties are public, we can modify them
invOne.client = 'yoshi';
invTwo.amount = 400;

console.log(invOne,invTwo);

//in lesson 13 we can learn how to use private properties and access modifiers to limit this.
//////////////////////////////////////////////////////////////

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