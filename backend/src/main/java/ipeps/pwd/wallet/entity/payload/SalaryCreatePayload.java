package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.enums.SalaryAmount;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class SalaryCreatePayload {
    Date create_date;
    String Title;
    String Comment;
    SalaryAmount Amount;
    Employee employee;
}