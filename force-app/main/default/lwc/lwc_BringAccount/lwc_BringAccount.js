import { LightningElement,wire,track } from 'lwc';

import ACCDATA from '@salesforce/apex/Cl_BringAccount.BringAccData';

export default class Lwc_BringAccount extends LightningElement 
{
    @track accounts;
    @track errorHappened;
    @wire(ACCDATA) accountDataReceived({error,data}){
        if(data)
        {
            this.accounts= data
        }
        else if(error)
        {
            this.errorHappened = error;
            alert(error);
            console.log(error);
        }

    };
}