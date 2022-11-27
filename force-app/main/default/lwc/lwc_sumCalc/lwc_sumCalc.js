import { LightningElement,track } from 'lwc';

export default class Lwc_sumCalc extends LightningElement {
    @track result;
    num1;
    num2;
    num3;

    callme(event)
    {
        const evtname=event.target.name;
        if(evtname == 'aval')
        {
            this.num1=event.target.value;
        }
        else if(evtname == 'bval')
        {
            this.num2=event.target.value;
        }else if(evtname == 'cval')
        {
            this.num3=event.target.value;
        }else
        {
            this.Nnum=event.target.value;
        }
        
    }

    addme()
    {
        const a=parseInt(this.num1);
        const b=parseInt(this.num2);
        const c=parseInt(this.num3);
        this.result='Sum of the given numbers is:'+ (a+b+c);

    }

    calc()
    {
        const n=parseInt(this.Nnum);
        this.result='Sum of the N numbers is:'+ [n*(n+1)]/2;
    }


}