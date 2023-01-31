import {EmployeeStatus} from "../enum/EmployeeStatus";
import {PayloadInterface} from "@shared/model";
import {CompanyDto} from "../../../company/model/dto/company.dto";
import {employeeUtils} from "../utils/employee.utils";

export interface EmployeeCreatePayload extends PayloadInterface{
  Lastname : string;
  Firstname: string;
  Address: string;
  Gender: string;
  Birthday: string;
  Ssin: string;
  status : EmployeeStatus;
  company : Partial<CompanyDto> | employeeUtils | null;
  active : boolean;
  picture: string;
}
