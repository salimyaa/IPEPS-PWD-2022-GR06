package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Timesheet;

import java.util.Date;

public class TimesheetBuilder implements Createbuilder<Timesheet> {
    Date start_date;
    Date start_hours;
    Date end_hours;
    String comment;
    String timesheet_type;
    Employee employee;
    Contract contract;

    public TimesheetBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public TimesheetBuilder setStart_hours(Date start_hours) {
        this.start_hours = start_hours;
        return this;
    }

    public TimesheetBuilder setEnd_hours(Date end_hours) {
        this.end_hours = end_hours;
        return this;
    }

    public TimesheetBuilder setComment(String comment) {
        this.comment = comment;
        return this;
    }

    public TimesheetBuilder setTimesheet_type(String timesheet_type) {
        this.timesheet_type = timesheet_type;
        return this;
    }

    public TimesheetBuilder setEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public TimesheetBuilder setContract(Contract contract) {
        this.contract = contract;
        return this;
    }


    @Override
    public Timesheet Build() {
        return new Timesheet(
                this.comment,
                this.start_date,
                this.start_hours,
                this.end_hours,
                this.employee,
                this.contract,
                this.timesheet_type);
    }
}
