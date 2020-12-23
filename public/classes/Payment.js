//Classes
export class Payment {
    constructor(recipient, //in order to assign the properties directly in the constructor we have to use the modifiers(public,provate,readonly)
    details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //methods
    format() {
        //this.client = 'something else' // <-- we can not change it because it's read only
        return `${this.recipient} is owed €${this.amount} for ${this.details}`;
    }
}
