let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character = 20; //->it will complain because it's not the same type.
character = 'luigi';

//age = 'yoshy'; //->it will complain because it's not the same type.
age = 40;

//isBlackBelt = 'yes' //->it will complain because it's not the same type.
isBlackBelt = true;

const circ = (diameter:number) =>{ //:number forces the argument to be a number.
    return diameter *Math.PI;
}

//console.log(circ('hello')); //it will complain since is requesting a number.
console.log(circ(5)); // this one compiles ok

//TypeScript Tutorial #3 - Type Basics
