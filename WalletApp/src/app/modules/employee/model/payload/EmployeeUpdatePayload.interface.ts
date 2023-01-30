import {EmployeeStatus} from "../enum/EmployeeStatus";
import {PayloadInterface} from "@shared/model";
import {CompanyDto} from "../../../company/model/dto/company.dto";

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
  company: Partial<CompanyDto>;
  active : boolean;
  Picture: string;
  Phone: string;
  Email: string;

}
