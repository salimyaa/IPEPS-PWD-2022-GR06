package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.enums.EmployeeStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public  class EmployeeBuilder implements Createbuilder<Employee> {

    String Lastname;
    String Firstname;
    String Address;
    String Gender;
    String Birthday;
    String Ssin;
    EmployeeStatus status;
    Company company;
    Boolean active;
    Boolean deleted;
    Boolean deleted_by;

    public EmployeeBuilder setLastname(String Lastname){
        this.Lastname = Lastname;
        return this;
    }
    public EmployeeBuilder setFirstname(String Firstname) {
        this.Firstname = Firstname;
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
    public EmployeeBuilder setStatus(EmployeeStatus status) {
        this.status = status;
        return this;
    }

    public EmployeeBuilder setCompany(Company company) {
        this.company = company;
        return this;
    }

    public EmployeeBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public EmployeeBuilder setDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }

    public EmployeeBuilder setDeleted_by(Boolean deleted_by) {
        this.deleted_by = deleted_by;
        return this;
    }

    @Override
    public Employee Build(){
        return new Employee(this.Lastname,
                            this.Firstname,
                            this.Address,
                            this.Gender,
                            this.Birthday,
                            this.Ssin,
                            this.status,
                            this.company,
                            this.deleted,
                            this.deleted_by,
                            this.active
                            );
    }


    public void getDeleted_by(Boolean deleted_by) { };
}