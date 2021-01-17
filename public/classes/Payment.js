export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed \$${this.amount} for ${this.details}.`;
    }
    reSet(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
}
