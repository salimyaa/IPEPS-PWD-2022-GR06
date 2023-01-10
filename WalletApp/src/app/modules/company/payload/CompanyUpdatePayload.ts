
import {Employee} from "../../employee/model/business/employee";

export interface CompanyUpdatePayload {
  companyId: string;
  name: string;
  Address:string;
  Description:string;
  Is_manage:string;
  Active:boolean;
  Deleted:boolean;
  Deleted_by:boolean;
  employees: Employee[]
}
