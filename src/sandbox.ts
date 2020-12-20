//TypeScript Tutorial #9 Type Aliases

type StringOrNum = string|number; //define out custom type alias(string or number)
type objWithName = { name: string , uid:StringOrNum};//object with name

const logDetails = (uid: StringOrNum , item: string) => {//example
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {//example
    console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello again`);
}