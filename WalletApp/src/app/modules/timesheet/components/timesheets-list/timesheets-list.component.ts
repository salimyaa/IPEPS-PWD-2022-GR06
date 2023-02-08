import {Component, Input} from '@angular/core';
import {EmployeeClass} from "../../../employee/model/business/employeeClass";
import {Timesheet} from "../../model/business/timesheet";
import {TimesheetService} from "../../service/timesheet.service";
import {Observable, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-timesheets-list',
  templateUrl: './timesheets-list.component.html',
  styleUrls: ['./timesheets-list.component.scss']
})
export class TimesheetsListComponent {
  @Input() selectedEmployee!:EmployeeClass;
  timesheets!:Timesheet[];
  displayedColumns: string[]=['contractTitle',"startDate","startHour",
    "endHour","type","comment"];
  constructor(private timesheetService:TimesheetService) {
  }

ngOnInit()
{
  this.refreshList();
}
ngOnChanges()
{

  this.refreshList();
}
refreshList()
{
  this.timesheetService.getAllTimesheetsBYEmployeeID(this.selectedEmployee.id).pipe(
    map(result=>{
      this.timesheets=result;
    })
  ).subscribe();
}


}
