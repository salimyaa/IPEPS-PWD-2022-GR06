package ipeps.pwd.wallet.entity.payload;


import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.enums.EmployeeStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeCreatePayload {
     String Lastname;
     String Firstname;
     String Address;
     String Gender;
     String Birthday;
     String Ssin;
     EmployeeStatus status;
     Company company;
     Boolean active;



}
