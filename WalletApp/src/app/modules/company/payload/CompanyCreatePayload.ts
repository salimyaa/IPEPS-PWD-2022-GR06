
import {Employee} from "../../employee/model/business/employee";

export interface CompanyCreatePayload{
  name: string;
  Address:string;
  Description:string;
  Is_manage:string;
  Active:boolean;
  Deleted:boolean;
  Deleted_by:boolean;
  employees: Employee[]

}
