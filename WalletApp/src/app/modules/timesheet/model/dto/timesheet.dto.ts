import {Employee} from "../../../employee/model/business/employee";
import {Contract} from "../../../contract/model/business/contract";

export interface TimesheetDto{
  timesheet_id:string;
  employee:Employee;
  contract:Contract;
  start_date:string;
  start_hours:string;
  end_hours:string;
  comment:string;
  timesheet_type:string;

}
