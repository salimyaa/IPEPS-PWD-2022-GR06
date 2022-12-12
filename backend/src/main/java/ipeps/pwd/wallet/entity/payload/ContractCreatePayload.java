package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.enums.ContractHours;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContractCreatePayload {

    UUID Contract_id;
    String Title;
    String Description;
    Date Start_date;
    Date End_date;
    int nb_hours_by_week;
    Employee employee;

}
