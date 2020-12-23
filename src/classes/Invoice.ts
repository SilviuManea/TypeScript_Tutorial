//TypeScript Tutorial #16 - Interfaces with Classes
import{ HasFormatter } from '../interfaces/HasFormatter.js'

//Classes
export class Invoice implements HasFormatter {//This class must follow the structure of the interfece HasFormatter

    //properties
    // readonly client: string; //we can read it from inside the class and outside but we cant change it
    // private details: string; //a private property will only be available inside the class
    // public amount: number; //public allows reading and changing the value outside of the class and inside

    //constructor v2- asigning the properties and their scope in the constructor directly
    constructor(
        readonly client : string, //in order to assign the properties directly in the constructor we have to use the modifiers(public,provate,readonly)
        private details : string,
        public amount : number

    ){}

    //methods
    format(){//lesson 16 <- we have to have the format() method in order to use this class because it implements the HasFormat interface
        //this.client = 'something else' // <-- we can not change it because it's read only
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}