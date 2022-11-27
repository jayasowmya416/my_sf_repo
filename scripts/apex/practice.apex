List<Account> acc=[Select id,Name,Phone from Account];
Map<string,string> accMap=new Map<string,string>();
for(Account a:acc)
{
    accMap.put('Name','a.Name');
    accMap.put('Phone','a.Phone');
}
System.debug(accMap);