import {EmployeeStatus} from "../enum/EmployeeStatus";
import {Company} from "../../../company/model/business/company";
import {PayloadInterface} from "@shared/model";

export interface EmployeeUpdatePayload extends PayloadInterface {
  employee_id: string;
  Lastname : string;
  Firstname: string;
  Address: string
  City: string;
  Gender: string;
  Birthday: string;
  Ssin: string;
  status : EmployeeStatus;
  company: Company;
  active : boolean;
  Picture: string;
  Phone: string;
  Email: string;

}
