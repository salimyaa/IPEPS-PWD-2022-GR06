package ipeps.pwd.wallet.entity;


import ipeps.pwd.wallet.entity.enums.ContractHours;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Contract implements Serializable {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name="UUID",strategy ="org.hibernate.id.UUIDGenerator")
    UUID Contract_id;
    @NotNull
    private String Title;
    @NotNull
    private String Description;
    @Temporal(TemporalType.DATE)
    private Date Start_date;
    @Temporal(TemporalType.DATE)
    private Date End_date;
    @NotNull
    private int nb_hours_by_week;
    @ManyToOne
    @JoinColumn(name = "Contract_Employee", referencedColumnName = "Employee_id")
    private Employee employee;
    @OneToMany
    List<Timesheet> timesheetList;


    public Contract(String title, String description, Date startDate, Date endDate, int nb_hours_by_week, Employee employee)
    {
        this.Title= title;
        this.Description=description;
        this.Start_date=startDate;
        this.End_date=endDate;
        this.nb_hours_by_week = nb_hours_by_week;
        this.employee=employee;
    }
}