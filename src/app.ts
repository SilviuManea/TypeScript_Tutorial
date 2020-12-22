//TypeScript Tutorial #13 - Public, Private & Readonly

//*************REMEMBER TO COMPILE WITH 'TSC' IF YOU MAKLE CHANGES IN ORDER TO BE EFECTIVE */

//Classes
class Invoice {

    //properties
    // readonly client: string; //we can read it from inside the class and outside but we cant change it
    // private details: string; //a private property will only be available inside the class
    // public amount: number; //public allows reading and changing the value outside of the class and inside

    //constructor v2- asigning the properties and their scope in the constructor directly
    constructor(
        readonly client : string, //in order to assign the properties directly in the constructor we have to use the modifiers(public,provate,readonly)
        private details : string,
        public amount : number

    ){}

    //methods
    format(){
        //this.client = 'something else' // <-- we can not change it because it's read only
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