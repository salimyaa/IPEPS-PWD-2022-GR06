package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ipeps.pwd.wallet.entity.enums.EmployeeStatus;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
public class Employee implements Serializable {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name="UUID",strategy ="org.hibernate.id.UUIDGenerator")
    UUID Employee_id;
    @NotNull
    private String Lastname;
    @NotNull
    private String Firstname;
    private Boolean Active;
    private Boolean Deleted_by;
    @NotNull
    private String Address;
    @NotNull
    private String Gender;
    @NotNull
    private String Birthday;
    @NotNull
    @Column ( length= 12)
    private String Ssin;
    @NotNull
    private EmployeeStatus status;
    @ManyToOne
    @JoinColumn(name = "Employee_Company", referencedColumnName = "Company_id")
    @JsonIgnoreProperties("employeeList")
    private Company company;
    private Boolean Deleted;
    @OneToMany()
    List<Timesheet> timesheetList;
    @OneToMany()
    List<Salary> salaryList;

  /* @Override
    public String toString(){
        return  "Employee{"+
                "Employee_id=" + Employee_id +
                ", Lastname='"+ Lastname + '\'' +
                ", Firstname='"+ Firstname + '\'' +
                ", Address='"+ Address + '\'' +
                ", Gender='"+ Gender + '\'' +
                ", Birthday='"+ Birthday + '\'' +
                ", Ssin='"+ Ssin + '\'' +
                '}';
    }*/

    public Employee(String Lastname, String Firstname, String Address, String Gender,
                    String Birthday, String Ssin,EmployeeStatus status,Company company,
                    Boolean Active) {
        this.Lastname = Lastname;
        this.Firstname = Firstname;
        this.Address = Address;
        this.Gender = Gender;
        this.Birthday = Birthday;
        this.Ssin = Ssin;
        this.status = status;
        this.company = company;

        this.Active =Active;
    }



}