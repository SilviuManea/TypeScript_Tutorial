//arrays
let names = ['luigi','mario','yoshi'];

names.push('toad'); // -->same type, will work
//names.push(3); // -->different types
//names[0] = 3; // -->different types

let numbers = [10,20,30,40];

numbers.push(25);
//numbers.push('silviu'); // -->different types
//numbers.push[1] = 'silviu' // -->different types

let mixed = ['ken', 4 , 'chun-li', 8 , 9]; //mixed type array

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

//objects

let ninja = { //also this has to be always of type object
    name : 'mario', //the property type remains fixed
    belt: 'black',
    age:30
};

//updating properties
ninja.age = 40;
ninja.name = 'ryu';
//ninja.age = '30' // age has to be the same type as in the declaration

//updating the object - we can only update the values of the different properties, but we can not add new ones or change their type
ninja = {
    name : 'yoshi',
    belt : 'orange',
    age:40,
    //skills: [] //we can not change the structura of the initial object (ninja)
}

//TypeScript Tutorial #4 - Objects & Arrays
