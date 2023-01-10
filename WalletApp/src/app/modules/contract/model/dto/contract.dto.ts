import {Employee} from "../../../employee/model/business/employee";

export interface ContractDto {
  contract_id:string;
  title:string,
  description:string,
  start_date:string,
  end_date:string,
  nb_hours_by_week:number;
  employee:Employee;
  //timesheetlist:Timesheet[];
}
