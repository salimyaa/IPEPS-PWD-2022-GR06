import {Timesheet} from "../model/business/timesheet";
import {TimesheetDto} from "../model/dto/timesheet.dto";
import {EmployeeHelper} from "../../employee/helper/employee.helper";
import {ContractHelper} from "../../contract/helper/contract.helper";

export class TimesheetHelper{
  public static fromDto(dto:TimesheetDto):Timesheet
{
    return { id:dto.timesheet_id,employee:dto.employee,contract:dto.contract,start_date:dto.start_date,
    start_hours:dto.start_hours,end_hours:dto.end_hours,comment:dto.comment,timesheet_type:dto.timesheet_type} as Timesheet
}

  static getEmpty() {
    return { id:'',employee:EmployeeHelper.getEmpty(),contract:ContractHelper.getEmpty(),start_date:'',
    start_hours:"",end_hours:'',comment:'',timesheet_type:''} as Timesheet
  }
}
