package ipeps.pwd.wallet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyCreatePayload {
    String Title;
    String Description;
    String Address;
    String Is_managed;
    Boolean Active;
    Boolean Deleted;
    Boolean Deleted_by;


}
