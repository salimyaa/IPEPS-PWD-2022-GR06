import {Company} from "../../company/model/business/company";
import {EmployeeStatus} from "../model/enum/EmployeeStatus";

export interface  EmployeeUpdatePayload{
  Employee_id: string;
  Lastname : string;
  Firstname: string;
  Address: string;
  Gender: string;
  Birthday: string;
  Ssin: string;
  status : EmployeeStatus;
  company: Company;
  active : boolean;
  picture: string;
}
