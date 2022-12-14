package ipeps.pwd.wallet.common.entity;


import ipeps.pwd.wallet.common.entity.Entityenum.ContractHours;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Contract implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Contract_id;
    @NotNull
    private String Title;
    @NotNull
    private String Description;
    @NotNull
    private Date Start_date;
    @NotNull
    private Date End_date;
    @NotNull
    private ContractHours nb_hours_by_week;
    @ManyToOne
    @JoinColumn(name = "target", referencedColumnName = "Employee_id")
    private Employee employee;


}