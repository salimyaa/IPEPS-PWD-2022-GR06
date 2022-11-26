package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.enums.OrganizationName;

public class OrganizationBuilder implements Createbuilder<Organization> {

    OrganizationName Name= OrganizationName.RH;
    String Description ="No Description";
    public OrganizationBuilder setName(OrganizationName name) {
        Name = name;
        return this;
    }

    public OrganizationBuilder setDescription(String description) {
        Description = description;
        return this;
    }

    @Override
    public Organization Build(){
        return new Organization(this.Name,this.Description);
    }


}