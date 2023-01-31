package ipeps.pwd.wallet.service;



import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.entity.payload.EmployeeUpdatePayload;

import java.util.List;
import java.util.UUID;


public interface EmployeeService {

    public List<Employee> list();

    public Employee detail(UUID employee_id);

    public Employee create (EmployeeCreatePayload payload);
    public Employee update (EmployeeUpdatePayload payload);

    public boolean delete(UUID employee_id);

}
