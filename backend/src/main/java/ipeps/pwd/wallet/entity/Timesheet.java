package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
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
    @JoinColumn(name = "Employee_timesheet", referencedColumnName = "Employee_id")
    private Employee Employee;
}
