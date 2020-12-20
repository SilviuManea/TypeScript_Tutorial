//TypeScript Tutorial #10 - Function Signatures

//let greet : Function;

// example 1
let greet:(a:string, b:string) => void; //signature

greet = (name:string , greeting:string) =>{ //use the function- typescript already knows it returns void
    console.log(`${name} says ${greeting}`);
}

// example 2

let calc:(a:number , b:number , c:string) => number;// signature

calc = (numOne:number , numTwo:number , action:string) : number => {
    if(action === 'add'){
        return numOne + numTwo;
    }else{
        return numOne - numTwo; //the else is needed because if the action is not 'add' this does not return a number and it must always return a number(because of the signature)
    }
}

// example 3

let logDetails: (obj: {name:string, age:number}) => void; //signature



// logDetails = (ninja: {name:string , age:number}) =>{ //returns void
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }

//OR using alias: person

type person = {name:string, age:number}; //alias

logDetails = (ninja:person) =>{ //returns void
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

