import { HasFormatter } from "../interfaces/hasFormatter.js";
import {form,details,tofrom,type,amount} from "../app.js";

export class ListTemplate{
    constructor(private container:HTMLUListElement){}
    render(item:HasFormatter,heading :string,pos:'start'|'end'){
       const li = document.createElement('li')
       const h4 = document.createElement('h4')
    
       h4.innerText=heading; 
       const p = document.createElement('p')

       p.innerText=item.format(); 

       const btnDelete = document.createElement('button');
       btnDelete.innerText="delete";
       btnDelete.setAttribute('id',"btn-d")
       btnDelete.addEventListener('click',()=>li.remove())

       const btnUpdate = document.createElement('button');
       btnUpdate.innerText="update";
       btnUpdate.setAttribute('id',"btn-u")
       btnUpdate.addEventListener('click',()=>{})

       li.append(h4);
       li.append(p);
       li.append(btnDelete);
       li.append( btnUpdate)

       if(pos==='start')
         this.container.prepend(li)
       else
        this.container.append(li)     ;
    
    }
   

}