public withsharing class Cl_Eg1_DataTable {
    @AuraEnabled(cacheable=true)
    public static List<contact> getContactList(){
        List<contact> contactdata=[select Id,FirstName,LastName,Email,Phone from contact limit 10];
    
       return contactdata;
    }
    
}
