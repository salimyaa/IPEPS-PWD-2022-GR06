package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.entity.payload.ContractUpdatePayload;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
public interface ContractService {
    public List<Contract> list();

    public Contract detail(UUID contract_id);

    public Contract create (ContractCreatePayload payload);
    public Contract update (ContractUpdatePayload payload);

    public boolean delete(UUID Contract_id);
}
