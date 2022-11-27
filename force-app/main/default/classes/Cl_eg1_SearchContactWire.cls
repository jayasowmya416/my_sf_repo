public with sharing class Cl_eg1_SearchContactWire {
   
   @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts( string searchKey)
    {
        string sk='%' + searchKey + '%';
       List<Contact> conList= [select Id,Name,Phone,Email from Contact where FirstName like :sk];
        return conList;
    }
}