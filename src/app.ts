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
    
});

//TypeScript Tutorial #18 - Generics

const addUID = <T extends {name:string} > (obj: T ) => { //T captures whatever object and whatever properties that object has, in order to be used later
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}; //when we return the object(using T), it's going to know what properties are on the object
}

let docOne = addUID({name: ' yoshi' , age: 40});
//let docTwo = addUID('hello') //this should not work, should not be allowed, we can combat this by extending the class object in the main function -> <T extends object> (obj: T )

console.log(docOne.name); // we can only access this because we captured that info(object property) using T on the main function addUID

//with interfaces
interface Resource <T>{ //this T means that the resource type is Generic(any type)
    uid:number;
    resourceName: string;
    data: T; //we can say that the data trrypoe can also be generic(but it must match the resource type from the interface)
}
//example
const docThree : Resource<string> = { //we pass a string
    uid: 1,
    resourceName: 'person',
    data:'shaun' //we have to use a string here
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread' , 'milk']
}

console.log(docThree, docFour);