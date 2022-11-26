package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.enums.OrganizationName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationUpdatePayload {
    UUID organisation_id;
    OrganizationName Name;
    String Description;

}