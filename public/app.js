import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let invoices = [];
let payments = [];
//selectin element from DOM
export const form = document.querySelector('.new-item-form');
export const type = document.querySelector('#type');
export const tofrom = document.querySelector('#tofrom');
export const details = document.querySelector('#details');
export const amount = document.querySelector('#amount');
//
const ul = document.querySelector('ul');
const li = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    li.render(doc, type.value, 'start');
    console.log(doc);
    tofrom.value = details.value = amount.value = "";
});
