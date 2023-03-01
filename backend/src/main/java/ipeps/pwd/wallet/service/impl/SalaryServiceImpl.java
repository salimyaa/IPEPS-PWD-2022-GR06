package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.entity.builder.SalaryBuilder;
import ipeps.pwd.wallet.entity.enums.SalaryAmount;
import ipeps.pwd.wallet.entity.payload.SalaryCreatePayload;
import ipeps.pwd.wallet.entity.payload.SalaryUpdatePayload;
import ipeps.pwd.wallet.repository.SalaryRepository;
import ipeps.pwd.wallet.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class SalaryServiceImpl implements SalaryService {

    @Autowired
    SalaryRepository SalaryRepository;
    @Override
    public List<Salary> list(){
        return SalaryRepository.findAll();
    }
    @Override
    public Salary detail(UUID Salary_id){
        return  SalaryRepository.findById(Salary_id).orElse(null);
    }
    @Override
    public Salary create(SalaryCreatePayload payload) {
        try{
            Salary Salary =new SalaryBuilder()
                    .setCreate_date(payload.getCreate_date())
                    .setTitle(payload.getTitle())
                    .setComment(payload.getComment())
                    .setAmount(payload.getAmount())
                    .setEmployee(payload.getEmployee())
                    .Build();
            return this.SalaryRepository.save(Salary);

        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public Salary update (SalaryUpdatePayload payload) {
        Salary detail = this.detail(payload.getSalary_id());
        if (detail != null) {
            detail.setCreate_date(payload.getCreate_date());
            detail.setTitle(payload.getTitle());
            detail.setComment(payload.getComment());
            detail.setAmount(payload.getAmount());
            detail.setEmployee(payload.getEmployee());

            return this.SalaryRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID Salary_id) {
        try{
            Salary detail = this.detail(Salary_id);
            if (detail != null) {
                this.SalaryRepository.delete(detail);
            }
            return true;
        }
        catch (Exception e){
            return false;
        }

    }
}
