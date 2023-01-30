package ipeps.pwd.wallet.service.impl;
import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.builder.ContractBuilder;
import ipeps.pwd.wallet.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.entity.payload.ContractUpdatePayload;
import ipeps.pwd.wallet.repository.ContractRepository;
import ipeps.pwd.wallet.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public class ContractServiceImpl implements ContractService {
    @Autowired
    ContractRepository contractRepository;

    @Override
    public List<Contract> list() {
        return contractRepository.findAll();
    }

    @Override
    public List<Contract> listByEmployeeID(UUID employee_id)
    {
        return contractRepository.listByEmployeeID(employee_id);
    }

    @Override
    public Contract detail(UUID contract_id) {
        return contractRepository.findById(contract_id).orElse(null);
    }

    @Override
    public Contract create(ContractCreatePayload payload) {
        try{
            Contract contract=new ContractBuilder()
                    .setTitle(payload.getTitle())
                    .setDescription(payload.getDescription())
                    .setStartDate(payload.getStart_date())
                    .setEndDate(payload.getEnd_date())
                    .setNb_hours_by_week(payload.getNb_hours_by_week())
                    .setEmployee(payload.getEmployee())
                    .Build();
            return this.contractRepository.save(contract);
        } catch (Exception e)
        {

            return null;
        }
    }

    @Override
    public Contract update(ContractUpdatePayload payload) {
        Contract contract = this.detail(payload.getContract_Id());
        if(contract!=null)
        {
            contract.setTitle(payload.getTitle());
            contract.setDescription(payload.getDescription());
            contract.setStart_date(payload.getStart_date());
            contract.setEnd_date(payload.getEnd_date());
            contract.setEmployee(payload.getEmployee());
            contract.setNb_hours_by_week(payload.getNb_hours_by_week());
            return this.contractRepository.save(contract);
        }
        else {
            return null;
        }

    }

    @Override
    public boolean delete(UUID Contract_id) {
        try{
            Contract detail = this.detail(Contract_id);
            if(detail!=null){
                this.contractRepository.delete(detail);
                return true;
            }
            else{
                return false;
            }


        }
        catch (Exception e)
        {
            return false;
        }

    }
}
