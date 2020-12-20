//TypeScript Tutorial #8 - Function Basics

// let greet = () => {
//     console.log('hello world');
// }

// greet = 'hello';

let greet : Function; //declare greet as type Function

greet = () => {//declare the actual function
    console.log('hello,again');
}

//const add = (a:number , b:number , c?: number | string) => { //pass a third(optional) parameter '?'without default value(we only need the '?')
const add = (a:number , b:number , c: number | string = 10) => {//third optional parameter but with default value(no '?' needed)
    console.log(a+b);
    console.log(c);//optional parameter
}

add(5,10,'20');

const minus = (a:number, b:number):number => { //:number specifies the type of data that is returned(optional)
    return a+b;
}

let result = minus(10,7);
//result = 'string'