package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.entity.enums.SalaryAmount;
import java.util.Date;

public class SalaryBuilder implements Createbuilder<Salary>{

    Date create_date;
    String Title;
    String Comment;
    SalaryAmount Amount;
    Employee employee;

    public SalaryBuilder setCreate_date(Date create_date) {
        this.create_date = create_date;
        return this;
    }

    public SalaryBuilder setTitle(String title) {
        this.Title = title;
        return this;
    }

    public SalaryBuilder setComment(String comment) {
        this.Comment = comment;
        return this;
    }

    public  SalaryBuilder setAmount(SalaryAmount amount) {
        this.Amount = amount;
        return this;
    }

    public  SalaryBuilder setEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }
    @Override
    public Salary Build(){
        return new Salary(
                this.create_date,
                this.Title,
                this.Comment,
                this.Amount,
                this.employee);
    }
}
