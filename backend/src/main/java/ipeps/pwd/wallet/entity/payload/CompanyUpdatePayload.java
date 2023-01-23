package ipeps.pwd.wallet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyUpdatePayload {
    UUID company_id;
    String Title;
    String Description;
    String Address;
    String Is_managed;
    Boolean Active;
    Boolean Deleted;
    Boolean Deleted_by;


}
