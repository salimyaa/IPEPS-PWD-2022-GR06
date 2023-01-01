import {EmployeeStatus} from "../model/enum/EmployeeStatus";
import {Company} from "../../company/model/business/company";

export interface EmployeeCreatePayload{
  Lastname : string;
  Firstname: string;
  Address: string;
  Gender: string;
  Birthday: string;
  Ssin: string;
  status : EmployeeStatus;
  company: Company;
  active : boolean
}
