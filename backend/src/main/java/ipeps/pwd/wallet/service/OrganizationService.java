package ipeps.pwd.wallet.service;


import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.payload.OrganizationCreatePayload;
import ipeps.pwd.wallet.entity.payload.OrganizationUpdatePayload;
import java.util.List;
import java.util.UUID;


public interface OrganizationService {


    public List<Organization> list();

    public Organization detail(UUID organisation_id);

    public Organization create (OrganizationCreatePayload payload);
    public Organization update (OrganizationUpdatePayload payload);

    public boolean delete (UUID organisation_id);

}