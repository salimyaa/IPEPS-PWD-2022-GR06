import {CompanyHelper} from "../../../company/helper/company.helper";
import {Company} from "../../../company/model/business/company";


export class employeeUtils {


  public static CreateEmployeeEmptyPayload():  { Firstname: string; Ssin: string; Address: string; Lastname: string; active: boolean; Birthday: string; company: Company; Gender: string; picture: string; status: string }
  {

  return {
    Lastname : '',
    Firstname  : '',
    Address : '',
    Gender: '' ,
    Birthday : '',
    Ssin : '',
    status : '',
    company :CompanyHelper.getEmpty(),
    active : false,
    picture : ''
  };

}
}
