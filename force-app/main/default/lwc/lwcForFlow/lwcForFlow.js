import { LightningElement,api } from 'lwc';
import {
    FlowNavigationBackEvent,
    FlowNavigationNextEvent
        } from 'lightning/flowSupport';
export default class LwcForFlow extends LightningElement {
@api availableAction=[];
    handleBack()
    {
        if(this.availableAction.find((action) => action === 'BACK' ))
        {
        const navigateBack = new FlowNavigationBackEvent();
        this.dispatchEvent(navigateBack);
        }
    }
    handleNext()
    {
        if(this.availableAction.find((action) => action === 'NEXT'))
        {
        const navigateNext = new FlowNavigationNextEvent();
        this.dispatchEvent(navigateNext);
        }
    }
}