import { HasFormatter } from "../interfaces/hasFormatter";

export class Payment implements HasFormatter {
    constructor( 
        public  recipient : string,
        public details :string,
        public amount : number,){}

    format(){
        return `${this.recipient} is owed \$${this.amount} for ${this.details}.`;
    }
    reSet(c:string,d:string,a:number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
}