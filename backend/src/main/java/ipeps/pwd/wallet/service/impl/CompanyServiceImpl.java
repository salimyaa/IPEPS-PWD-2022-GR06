package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.builder.CompanyBuilder;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.repository.CompanyRepository;
import ipeps.pwd.wallet.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    CompanyRepository companyRepository;
    @Override
    public List<Company> list(){
        return companyRepository.findAll();
    }
    @Override
    public Company detail(UUID Company_id){
        return  companyRepository.findById(Company_id).orElse(null);
    }
    @Override
    public Company create(CompanyCreatePayload payload) {
        try{
            Company company =new CompanyBuilder()
                    .setName(payload.getName())
                    .setDescription(payload.getDescription())
                    .setAddress(payload.getAddress())
                    .setIs_managed(payload.getIs_managed())
                    .setActive(payload.getActive())
                    .setDeleted(payload.getDeleted())
                    .setDeleted_by(payload.getDeleted_by())
                    .Build();
            return this.companyRepository.save(company);

        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public Company update (CompanyUpdatePayload payload) {
        Company detail = this.detail(payload.getCompany_id());
        if (detail != null) {
            detail.setName(payload.getName());
            detail.setDescription(payload.getDescription());
            detail.setAddress(payload.getAddress());
            detail.setIs_managed(payload.getIs_managed());
            detail.setActive(payload.getActive());
            detail.setDeleted(payload.getDeleted());
            detail.setDeleted_by(payload.getDeleted_by());
            return this.companyRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID Company_id) {
        try{
            Company detail = this.detail(Company_id);
            if (detail != null) {
                this.companyRepository.delete(detail);
            }
            return true;
        }
        catch (Exception e){
            return false;
        }

    }
}
