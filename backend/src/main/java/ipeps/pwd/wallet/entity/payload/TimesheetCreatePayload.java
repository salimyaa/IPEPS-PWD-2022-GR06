package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimesheetCreatePayload {
    Date Start_date;
    Date Start_hours;
    Date End_hours;
    String Comment;
    String Timesheet_type;
    Employee Employee;
    Contract Contract;


}
