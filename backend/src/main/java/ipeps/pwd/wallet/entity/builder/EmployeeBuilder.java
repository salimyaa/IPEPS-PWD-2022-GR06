package ipeps.pwd.wallet.entity.builder;


import ipeps.pwd.wallet.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public  class EmployeeBuilder implements Createbuilder<Employee> {
    String Lastname;
    String FirstName;
    String Address;
    String Gender;
    String Birthday;
    String Ssin;


    public EmployeeBuilder setLastname(String Lastname){
        this.Lastname = Lastname;
        return this;
    }
    public EmployeeBuilder setFirstName(String FirstName){
        this.FirstName = FirstName;
        return this;
    }
    public EmployeeBuilder setAddress(String Address){
        this.Address = Address;
        return this;
    }
    public EmployeeBuilder setGender(String Gender){
        this.Gender = Gender;
        return this;
    }public EmployeeBuilder setBirthday(String Birthday){
    this.Birthday = Birthday;
    return this;
}
    public EmployeeBuilder setSsin(String Ssin){
        this.Ssin = Ssin;
        return this;
    }

    @Override
    public Employee Build(){
        return new Employee(this.Lastname,
                            this.FirstName,
                            this.Address,
                            this.Gender,
                            this.Birthday,
                            this.Ssin);
    }
}