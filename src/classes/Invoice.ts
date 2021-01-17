import { HasFormatter } from "../interfaces/hasFormatter";

export class Invoice implements HasFormatter {
    constructor( 
        public  client : string,
        public details :string,
        public amount : number,){}

    format(){
        return `${this.client} owes \$${this.amount} for ${this.details}.`;
    }
    reSet(c:string,d:string,a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
}