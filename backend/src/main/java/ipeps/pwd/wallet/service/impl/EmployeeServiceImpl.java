package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.service.EmployeeService;
import ipeps.pwd.wallet.entity.builder.EmployeeBuilder;
import ipeps.pwd.wallet.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.entity.payload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    @Override
    public List<Employee> list(){
        return employeeRepository.findAll();
    }
    @Override
    public Employee detail(UUID Employee_id){
        return  employeeRepository.findById(Employee_id).orElse(null);
    }
    @Override
    public Employee create(EmployeeCreatePayload payload) {
        try{
            Employee employee =new EmployeeBuilder()
                    .setLastname(payload.getLastname())
                    .setFirstName(payload.getFirstName())
                    .setAddress(payload.getAddress())
                    .setGender(payload.getGender())
                    .setSsin(payload.getSsin())
                    .setBirthday(payload.getBirthday())
                    .Build();
                      return this.employeeRepository.save(employee);

        }catch (Exception e) { e.printStackTrace();
            return null;
        }
    }
    @Override
        public Employee update (EmployeeUpdatePayload payload) {
            Employee detail = this.detail(payload.getEmployee_id());
            if (detail != null) {
                detail.setLastname(payload.getLastname());
                detail.setFirstName(payload.getFirstName());
                detail.setAddress(payload.getAddress());
                detail.setGender(payload.getGender());
                detail.setSsin(payload.getSsin());
                detail.setBirthday(payload.getBirthday());
                return this.employeeRepository.save(detail);
            }
            return detail;
        }

    @Override
    public boolean delete(UUID Employee_id) {
        try{
            Employee detail = this.detail(Employee_id);
            if (detail != null) {
                this.employeeRepository.delete(detail);
            }
            return true;
        }
        catch (Exception e){
            return false;
        }

    }
}
