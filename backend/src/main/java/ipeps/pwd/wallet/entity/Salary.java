package ipeps.pwd.wallet.entity;

import ipeps.pwd.wallet.entity.enums.SalaryAmount;
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
public class Salary implements Serializable {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name="UUID",strategy ="org.hibernate.id.UUIDGenerator")
    UUID Salary_id;
    @NotNull
    @Temporal(TemporalType.DATE)
    private Date create_date;
    @NotNull
    private String Title;
    @NotNull
    private String Comment;
    @NotNull
    private SalaryAmount Amount;
    @ManyToOne
    @JoinColumn(name = "Salary_Employee", referencedColumnName = "employee_id")
    private Employee employee;

    public Salary(Date create_date, String title, String comment, SalaryAmount amount, Employee employee) {
        this.create_date = create_date;
        this.Title = title;
        this.Comment = comment;
        this.Amount = amount;
        this.employee = employee;
    }
}
