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
    public Company detail(UUID company_id){
        return  companyRepository.findById(company_id).orElse(null);
    }
    @Override
    public Company create(CompanyCreatePayload payload) {
        try{
            Company company =new CompanyBuilder()
                    .setTitle(payload.getTitle())
                    .setDescription(payload.getDescription())
                    .setAddress(payload.getAddress())
                    .setIs_managed(payload.getIs_managed())
                    .setActive(payload.getActive())
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
            detail.setTitle(payload.getTitle());
            detail.setDescription(payload.getDescription());
            detail.setAddress(payload.getAddress());
            detail.setIs_managed(payload.getIs_managed());
            detail.setActive(payload.getActive());

            return this.companyRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID company_id) {
        try{
            Company detail = this.detail(company_id);
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
