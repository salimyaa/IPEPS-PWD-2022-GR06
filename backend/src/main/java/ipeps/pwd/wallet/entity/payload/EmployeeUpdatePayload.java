package ipeps.pwd.wallet.entity.payload;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeUpdatePayload {
    UUID Employee_id;
    String Lastname;
    String FirstName;
    String Address;
    String Gender;
    String Birthday;
    String Ssin;

}
