import { LightningElement,track } from 'lwc';
export default class Lwc_eg1_css extends LightningElement {
    @track Name;
    callme(event)
    {
        this.Name=event.target.value;
    }

}