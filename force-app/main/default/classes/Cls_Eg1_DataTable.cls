public with sharing class Cls_Eg1_DataTable {
    
        @AuraEnabled(cacheable=true)
    public static List<contact> getContactList(){
        
       return [select Id,FirstName,LastName,Email,Phone from contact limit 10];
    
    }

    
}
