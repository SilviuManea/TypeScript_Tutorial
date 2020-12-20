// TypeScript Tutorial #6 - Dynamic (any) Types
var age = 25; //declaration and initialization on the same line
age = true; //we can change it's value since is of type any - DO NOT USE THIS IF POSSIBLE
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
var mixed = []; //declare an array of any type of value
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
var ninja; //declare an object with properties of any type
ninja = { name: 'yoshi', age: 25 }; //use example ok
console.log(ninja);
ninja = { name: 25, age: 'yoshi' }; //use example where using any type can be a mistake
console.log(ninja);
