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
    private ContractHours nb_hours_by_week;
    @ManyToOne
    @JoinColumn(name = "Contract_Employee", referencedColumnName = "Employee_id")
    private Employee employee;


}