public with sharing class Cl_BringAccount {
    @AuraEnabled
    public static List<Account> BringAccData() {
        List<Account> acc=[Select Id,Name,Rating,Industry,Phone from Account];
        return acc;
    }
}
