package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Company;



public class CompanyBuilder implements Createbuilder<Company> {
    
    String Name;
    String Description;
    String Address;
    String is_managed;
    Boolean Active;


    public CompanyBuilder setName(String name) {
        this.Name = name;
        return this;
    }


    public CompanyBuilder setDescription(String description) {
        this.Description = description;
        return this;
    }

    public CompanyBuilder setAddress(String address) {
        this.Address = address;
        return this;
    }

    public CompanyBuilder setIs_managed(String is_managed) {
        this.is_managed = is_managed;
        return this;
    }

    public CompanyBuilder setActive(Boolean active) {
        this.Active = active;
        return this;
    }



    
    @Override
    public Company Build(){
        return new Company(this.Name,
                           this.Description,
                           this.Address,
                           this.is_managed,
                           this.Active);
    }


}