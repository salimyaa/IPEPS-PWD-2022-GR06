package ipeps.pwd.wallet.common.entity;

import ipeps.pwd.wallet.common.entity.Entityenum.EmployeeStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Employee_id;
    @NotNull
    private String Lastname;
    @NotNull
    private String FirstName;
    @NotNull
    private String Address;
    @NotNull
    private String Gender;
    @NotNull
    private String Birthday;
    @NotNull
    private Double Ssin;
    @NotNull
    private EmployeeStatus status;
    @ManyToOne
    @JoinColumn(name = "target", referencedColumnName = "company_id")
    private Company company;

    @Override
    public String toString(){
        return  "Employee{"+
                "Employee_id=" + Employee_id +
                ", Lastname='"+ Lastname + '\'' +
                ", Firstname='"+ FirstName + '\'' +
                ", Address='"+ Address + '\'' +
                ", Gender='"+ Gender + '\'' +
                ", Birthday='"+ Birthday + '\'' +
                ", Ssin='"+ Ssin + '\'' +
                '}';
    }


}