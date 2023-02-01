import {Employee} from "../../../employee/model/business/employee";
import {Contract} from "../../../contract/model/business/contract";

export interface TimesheetCreatePayload {
  employee:Employee;
  contract:Contract;
  start_date:string;
  start_hour:string;
  end_hour:string;
  comment:string;
  timesheet_type:string;

}
