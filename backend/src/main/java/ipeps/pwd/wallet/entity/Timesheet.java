package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Timesheet implements Serializable {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name="UUID",strategy ="org.hibernate.id.UUIDGenerator")
    UUID timesheet_id;
    @NotNull
    @Temporal(TemporalType.DATE)
    private Date start_date;
    @NotNull
    @Temporal(TemporalType.TIME)
    private Date start_hours;
    @NotNull
    @Temporal(TemporalType.TIME)
    private Date end_hours;
    @NotNull
    private String comment;
    @NotNull
    private String timesheet_type;
    @ManyToOne()
    @JoinColumn(name = "employee_timesheet", referencedColumnName = "employee_id")
    @JsonIgnoreProperties("timesheetList")
    private Employee Employee;
    @ManyToOne()
    @JoinColumn(name="contract_timesheet", referencedColumnName="Contract_id")
    @JsonIgnoreProperties("timesheetList")
    private Contract Contract;



    public Timesheet(String comment, Date start_date, Date start_hours, Date end_hours, ipeps.pwd.wallet.entity.Employee employee, ipeps.pwd.wallet.entity.Contract contract, String timesheet_type)
    {
        this.comment=comment;
        this.start_date=start_date;
        this.start_hours=start_hours;
        this.end_hours=end_hours;
        this.timesheet_type=timesheet_type;
        this.Employee=employee;
        this.Contract=contract;
    }

    @Override
    public String toString()
    {
        return this.timesheet_id.toString()+' '+this.comment+" " + this.start_date.toString();
    }

}
