import { LightningElement,track,wire } from 'lwc';
import getContactList from '@salesforce/apex/Cls_Eg1_DataTable.getContactList';

import { updateRecord} from 'lightning/uiRecordApi';//Mandate for DML
import {refreshApex} from '@salesforce/apex'; //optional for refresh
import {showToastEvent} from 'lightning/platformShowToastEvent';//OPtional for Display Toast Message

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';//Manadate for DML
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';//Manadate for DML
import ID_FIELD from '@salesforce/schema/Contact.Id';//Manadate for DML
const cols=[
    {label:'ContactFirstName', fieldName:'FirstName',editable:true},
    {label:'ContactLastName', fieldName:'LastName',editable:true},
    {label:'ContactEmail', fieldName:'Email', type:'email',editable:true},
    {label:'ContactPhone', fieldName:'Phone',type:'phone',editable:true}
];

export default class Lwc_Eg1_DataTable extends LightningElement {
    @track col= cols;
    @wire(getContactList) contact;
    handleSave(event)
    {

        
    }
}