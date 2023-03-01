package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimesheetUpdatePayload {
    UUID timesheet_id;
    Date start_date;
    Date start_hours;
    Date end_hours;
    String comment;
    String timesheet_type;
    Employee employee;
    Contract contract;

}
