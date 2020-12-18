// TypeScript Tutorial #5 - Explicit Types
// explicit types
var character; //initialize a variable defining the type but not the value;
var age;
var isLoggedIn;
// age = 'luigi'; //nok
age = 30; //ok
isLoggedIn = true; //ok
// arrays
var ninjas = []; //defining and initializing(with = [];) empty array - beware  if is not initialized , it will fail at runtime if we try to assign any values
ninjas = ['yoshi', 'mario'];
ninjas.push('silviu');
// union types - mixed arrays
// objects
