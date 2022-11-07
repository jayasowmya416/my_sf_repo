public class CreateAccount {
    Public String Name{set;get;}
    Public String Phone{set;get;}
    Public String Fax{set;get;}
    Public String Industry{set;get;}
    Public void CreateAc()
    {
        Account a=new Account();
    a.Name=Name;
    a.Phone=Phone;
    a.Fax=Fax;
    a.Industry=Industry;
        Insert a;
    }
}