package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.Employee;

import java.util.Date;

public class ContractBuilder implements Createbuilder<Contract> {


    String title;
    String description;

    Date startDate;
    Date endDate;
    int nb_hours_by_week;
    Employee employee;

    public ContractBuilder setTitle(String title) {
        this.title = title;
        return this;
    }
    public ContractBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public ContractBuilder setStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }

    public ContractBuilder setEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }

    public ContractBuilder setNb_hours_by_week(int nb_hours_by_week) {
        this.nb_hours_by_week = nb_hours_by_week;
        return this;
    }

    public ContractBuilder setEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }





    @Override
    public Contract Build() {
        return new Contract(this.title,this.description,this.startDate,this.endDate,this.nb_hours_by_week,this.employee);
    }
}
