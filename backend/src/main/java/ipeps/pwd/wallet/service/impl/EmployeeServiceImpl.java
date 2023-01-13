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
                    .setFirstname(payload.getFirstname())
                    .setAddress(payload.getAddress())
                    .setGender(payload.getGender())
                    .setSsin(payload.getSsin())
                    .setBirthday(payload.getBirthday())
                    .setActive(payload.getActive())
                    .setStatus(payload.getStatus())
                    .setCompany(payload.getCompany())
                    .setCity(payload.getCity())
                    .setPhone(payload.getPhone())
                    .setEmail(payload.getEmail())
                    .Build();
                      return this.employeeRepository.save(employee);

        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @Override
        public Employee update (EmployeeUpdatePayload payload) {
            Employee detail = this.detail(payload.getEmployee_id());
            if (detail != null) {
                detail.setLastname(payload.getLastname());
                detail.setFirstname(payload.getFirstname());
                detail.setAddress(payload.getAddress());
                detail.setGender(payload.getGender());
                detail.setSsin(payload.getSsin());
                detail.setBirthday(payload.getBirthday());
                detail.setActive(payload.getActive());
                detail.setStatus(payload.getStatus());
                detail.setCompany(payload.getCompany());
                detail.setCity(payload.getCity());
                detail.setPhone(payload.getPhone());
                detail.setEmail(payload.getEmail());
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
