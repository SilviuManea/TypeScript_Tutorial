var character = 'mario';
var age = 30;
var isBlackBelt = false;
//character = 20; //->it will complain because it's not the same type.
character = 'luigi';
//age = 'yoshy'; //->it will complain because it's not the same type.
age = 40;
//isBlackBelt = 'yes' //->it will complain because it's not the same type.
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
//console.log(circ('hello')); //it will complain since is requesting a number.
console.log(circ(5)); // this one compiles ok
//TypeScript Tutorial #3 - Type Basics
