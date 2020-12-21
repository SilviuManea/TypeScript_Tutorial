"use strict";
// //TypeScript Tutorial #11 - The DOM & Type Casting
//******************************************Example1 - Accessing the dom
// const anchor = document.querySelector('a')!;// '!' -> ensures that this anchor is not null(the developer mus be sure of that)
// //If we are trying to grab the anchor tag without checking id it returns a value TS complains that it mught be null
// // Solution 1 - check is is not null
// // if (anchor) {
// //     console.log(anchor.href);
// // }
// //or Solution 2 - (!)->we have to manually confirm that that anchor will not be null
// console.log(anchor.href);// <- it will not complain if we assure that the element is not null('!')
//******************************************Example2 - Type Casting
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form'); //when we use 'as' we dont have to use the exclamation mark '!'
//console.log(form.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//grab the form and add event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //autocasts the value from string to number
    );
});
