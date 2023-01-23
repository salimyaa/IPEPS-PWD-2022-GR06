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
    UUID employee_id;
    @NotNull
    private String Lastname;
    @NotNull
    private String Firstname;
    private Boolean Active;
    private Boolean Deleted_by;
    @NotNull
    private String Address;
    @NotNull
    private String City;
    @NotNull
    private String Phone;
    @NotNull
    private String Email;
    @NotNull
    private String Gender;
    @NotNull
    private String Birthday;
    @NotNull
    @Column ( length= 12)
    private String Ssin;
    @NotNull
    private String Picture;
    @NotNull
    private EmployeeStatus status;
    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "Employee_Company", referencedColumnName = "company_id")
    @JsonIgnoreProperties("employeeList")
    private Company company;
    private Boolean Deleted;
    @OneToMany()
    List<Timesheet> timesheetList;
    @OneToMany()
    List<Salary> salaryList;

    public Employee(String Lastname, String Firstname, String Address, String Gender,
                    String Birthday, String Ssin,EmployeeStatus status,Company company,
                    Boolean Active,String City,String Phone,String Email,String Picture) {
        this.Lastname = Lastname;
        this.Firstname = Firstname;
        this.Address = Address;
        this.Gender = Gender;
        this.Birthday = Birthday;
        this.Ssin = Ssin;
        this.status = status;
        this.company = company;
        this.City= City;
        this.Phone= Phone;
        this.Email=Email;
        this.Active =Active;
        this.Picture=Picture;
    }



}
