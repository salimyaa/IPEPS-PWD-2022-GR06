import {CompanyCreatePayload} from "../payload/CompanyCreatePayload.interface";

export class companyUtils {


  public static CreateCompanyEmptyPayload():  CompanyCreatePayload  {

    return {
      title : '',
      address : '',
      description  : ''
      };

  }
}
