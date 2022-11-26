package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.enums.OrganizationName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationCreatePayload  {
    OrganizationName Name;
    String Description;

}