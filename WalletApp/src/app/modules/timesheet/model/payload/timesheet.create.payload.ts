import {Employee} from "../../../employee/model/business/employee";
import {Contract} from "../../../contract/model/business/contract";
import {EmployeeDto} from "../../../employee/model/dto/employee.dto";
import {ContractDto} from "../../../contract/model/dto/contract.dto";

export interface TimesheetCreatePayload {
  employee:EmployeeDto;
  contract:ContractDto;
  start_date:string;
  start_hours:string;
  end_hours:string;
  comment:string;
  timesheet_type:string;

}
