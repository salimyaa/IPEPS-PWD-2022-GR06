import {EmployeeStatus} from "../enum/EmployeeStatus";
import {PayloadInterface} from "@shared/model";
import {CompanyDto} from "../../../company/model/dto/company.dto";

export interface EmployeeCreatePayload extends PayloadInterface{
  Lastname : string;
  Firstname: string;
  Address: string;
  Gender: string;
  Birthday: string;
  Ssin: string;
  status : EmployeeStatus;
  company : Partial<CompanyDto>;
  active : boolean;
  picture: string;
}
