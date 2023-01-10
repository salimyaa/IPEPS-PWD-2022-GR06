import {Company} from "../../../company/model/business/company";

export interface Employee {
  id: string,
  firstname: string,
  lastname: string
  status : string;
  company: Company;
}
