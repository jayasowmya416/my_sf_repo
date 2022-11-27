import { LightningElement } from 'lwc';

export default class Lwc_eg1_event extends LightningElement 
{
    callIncrease()
    {
        const inc=new CustomEvent('incre');//step1:creating Event
        this.dispatchEvent(inc);//step2.Dispatching event
    }
    callDecrease()
    {
        //step1,step2 create and Dispatch Event
        
        this.dispatchEvent(new CustomEvent('decre'));

    }
}