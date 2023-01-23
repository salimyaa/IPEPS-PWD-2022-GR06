import {EmployeeStatus} from "../enum/EmployeeStatus";
import {Company} from "../../../company/model/business/company";
import {PayloadInterface} from "@shared/model";

export interface EmployeeCreatePayload extends PayloadInterface{
  Lastname : string;
  Firstname: string;
  Address: string;
  Gender: string;
  Birthday: string;
  Ssin: string;
  status : EmployeeStatus;
  //company : Company;
  active : boolean;
  picture: string;
}
