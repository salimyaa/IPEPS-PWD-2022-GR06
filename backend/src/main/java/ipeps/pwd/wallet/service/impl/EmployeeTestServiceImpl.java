package ipeps.pwd.wallet.service.impl;


import ipeps.pwd.wallet.entity.EmployeeTest;
import ipeps.pwd.wallet.repository.EmployeeTestRepository;
import ipeps.pwd.wallet.service.EmployeeTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeTestServiceImpl implements EmployeeTestService {
    @Autowired
    EmployeeTestRepository employeeTestRepository;
    @Override
    public List<EmployeeTest> list(){
        return employeeTestRepository.findAll();
    }
}
