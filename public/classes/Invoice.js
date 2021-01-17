export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes \$${this.amount} for ${this.details}.`;
    }
    reSet(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
}
