import { LightningElement,wire,track,api } from 'lwc';
import findContacts from '@salesforce/apex/Cl_eg1_SearchContactWire.findContacts';

export default class Lwc_Eg1_SearchContactWire extends LightningElement 
{
    @track searchText;
    @track reccc;
    @track errrr;
    //wire a property
    @wire(findContacts,{searchKey:'$searchText'}) contacts; 
    //wire function
    @wire(findContacts,{searchKey:'$searchText'}) 
    con({error,data})
    {
        if(data)
        {
            this.reccc=data;
            
        }
        else if(error)
        {
            this.errrr=error;
            this.reccc=undefined;
        }
    };
    searchMe(event)
    {
      this.searchText = event.target.value;
    }

}