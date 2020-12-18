// TypeScript Tutorial #5 - Explicit Types


// explicit types
let character:string; //initialize a variable defining the type but not the value;
let age:number;
let isLoggedIn:boolean;

// age = 'luigi'; //nok
age = 30; //ok
isLoggedIn = true; //ok

// arrays
let ninjas:string[] = []; //defining and initializing(with = [];) empty array - beware  if is not initialized , it will fail at runtime if we try to assign any values

ninjas = ['yoshi' , 'mario'];

ninjas.push('silviu');

// union types | - mixed arrays
let mixed: (string|number)[] = []; //to add a new type let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
//mixed.push(false); //this will not work if we dont add the boolean type to the array
console.log(mixed);

//union types on variables
let uid: string|number;
uid = '123';
uid = 123;
//uid = false;

// objects
let ninjaOne : object;
ninjaOne = {name: 'yoshi' , age:30};
//ninjaOne = 'hello' //nok

let ninjaTwo: {
    name:string,
    age:number,
    beltColour:string
}
ninjaTwo = {name : 'mario' , age : 20 , beltColour : 'black'};

