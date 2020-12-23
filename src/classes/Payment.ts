//TypeScript Tutorial #16 - Interfaces with Classes
import{ HasFormatter } from '../interfaces/HasFormatter.js'

//Classes
export class Payment implements HasFormatter {//This class must follow the structure of the interfece HasFormatter

    constructor(
        readonly recipient : string, //in order to assign the properties directly in the constructor we have to use the modifiers(public,provate,readonly)
        private details : string,
        public amount : number

    ){}

    //methods
    format(){//lesson 16 <- we have to have the format() method in order to use this class because it implements the HasFormat interface
        //this.client = 'something else' // <-- we can not change it because it's read only
        return `${this.recipient} is owed €${this.amount} for ${this.details}`;
    }
}