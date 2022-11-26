package ipeps.pwd.wallet.entity;

import ipeps.pwd.wallet.entity.enums.OrganizationName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Organization implements Serializable {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name="UUID",strategy ="org.hibernate.id.UUIDGenerator")
    UUID organisation_id;
    @NotNull
    private OrganizationName Name;

    public Organization(OrganizationName name, String description) {
        this.Name = name;
        this.Description = description;
    }

    @ManyToOne()
    @JoinColumn(name = "Organization_company", referencedColumnName = "Company_id")
    private Company company;
    private String Description;






}
