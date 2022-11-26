package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
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
public class Company implements Serializable {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name="UUID",strategy ="org.hibernate.id.UUIDGenerator")
    UUID  Company_id;
    @NotNull
    private String Name;
    @NotNull
    private String Description;
    @NotNull
    private String Address;
    @NotNull
    private String Is_managed;
    @OneToMany()
    List<Employee> employeeList;
    @OneToMany()
    List<Organization> organizationList;
    private Boolean Active;
    private Boolean Deleted;
    private Boolean Deleted_by;

    public Company(String Name, String Description, String Address, String Is_managed, Boolean Active, Boolean Deleted, Boolean Deleted_by) {
        this.Name = Name;
        this.Description = Description;
        this.Address = Address;
        this.Is_managed = Is_managed;
        this.Active = Active;
        this.Deleted = Deleted;
        this.Deleted_by = Deleted_by;
    }


}