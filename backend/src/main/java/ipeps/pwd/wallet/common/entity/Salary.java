package ipeps.pwd.wallet.common.entity;

import ipeps.pwd.wallet.common.entity.Entityenum.SalaryAmount;
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
public class Salary implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Salary_id;
    @NotNull
    private Date create_date;
    @NotNull
    private String Title;
    @NotNull
    private String Comment;
    @NotNull
    private SalaryAmount Amount;
    @ManyToOne
    @JoinColumn(name = "target", referencedColumnName = "Employee_id")
    private Employee employee;
}
