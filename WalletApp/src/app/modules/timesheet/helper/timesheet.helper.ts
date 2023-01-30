import {Timesheet} from "../model/business/timesheet";
import {TimesheetDto} from "../model/dto/timesheet.dto";

export class TimesheetHelper{
  public static fromDto(dto:TimesheetDto):Timesheet
{
    return { id:dto.timesheet_id,employee:dto.employee,contract:dto.contract,start_date:dto.start_date,
    start_hour:dto.start_hour,end_hour:dto.end_hour,comment:dto.comment,timesheet_type:dto.timesheet_type} as Timesheet
}

}
