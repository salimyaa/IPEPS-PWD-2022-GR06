package ipeps.pwd.wallet.entity.payload;


import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.enums.EmployeeStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeUpdatePayload {
    UUID employee_id;
    String Lastname;
    String Firstname;
    String Address;
    String Gender;
    String Birthday;
    String Ssin;
    EmployeeStatus status;
    Company company;
    Boolean active;
    Boolean deleted;
    Boolean deleted_by;
    String City;
    String Phone;
    String Email;
    String Picture;
}
