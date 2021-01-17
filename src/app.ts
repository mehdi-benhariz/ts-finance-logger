import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";


let invoices :Invoice[]=[]
let payments:Payment[]=[]
//selectin element from DOM
export const form = document.querySelector('.new-item-form') as HTMLFormElement;
export const type = document.querySelector('#type') as HTMLSelectElement
export const tofrom = document.querySelector('#tofrom') as HTMLInputElement
export const details = document.querySelector('#details') as  HTMLInputElement
export const amount = document.querySelector('#amount') as  HTMLInputElement

//


const ul = document.querySelector('ul')!;
const li = new ListTemplate(ul)

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let doc:HasFormatter;
if(type.value==="invoice"){
    doc =new Invoice(tofrom.value,details.value,amount.valueAsNumber);
}else {
    doc =new Payment(tofrom.value,details.value,amount.valueAsNumber);
    
}
li.render(doc,type.value,'start')
    console.log(doc)
    tofrom.value=details.value=amount.value=""
})
