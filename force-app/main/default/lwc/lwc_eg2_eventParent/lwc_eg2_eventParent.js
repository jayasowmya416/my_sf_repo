import { LightningElement } from 'lwc';

export default class Lwc_eg2_eventParent extends LightningElement {
    vol=0;
    increasevol(event)
    {
        this.vol=this.vol + 1;
    }
    decreasevol(event)
    {
        if(this.vol > 0)
        {
            this.vol=this.vol - 1;
        }
    }

}