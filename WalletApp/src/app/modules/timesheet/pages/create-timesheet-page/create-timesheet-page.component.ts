import { Component } from '@angular/core';
import {EmployeeClass} from "../../../employee/model/business/employeeClass";
import {EmployeeService} from "../../../employee/service/employee.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {map} from "rxjs/operators";
import {EmployeeHelper} from "../../../employee/helper/employee.helper";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Contract} from "../../../contract/model/business/contract";
import {ContractServiceService} from "../../../contract/service/contract-service.service";
import {Observable, tap} from "rxjs";
import {TimesheetCreatePayload} from "../../model/payload/timesheet.create.payload";
import {Employee} from "../../../employee/model/business/employee";
import {ContractHelper} from "../../../contract/helper/contract.helper";
import {TimesheetService} from "../../service/timesheet.service";

@Component({
  selector: 'app-create-timesheet-page',
  templateUrl: './create-timesheet-page.component.html',
  styleUrls: ['./create-timesheet-page.component.scss']
})
export class CreateTimesheetPageComponent {
selectedEmployee?:EmployeeClass;
timesheetForm!:FormGroup;
contracts?:Observable<Contract[]>;

  constructor(private emplService:EmployeeService, private activated:ActivatedRoute,private formBuilder:FormBuilder,
              private contractService:ContractServiceService, private timesheetService:TimesheetService,
              private router:Router) {

  }
  ngOnInit()
  {

    this.buildForm();
    this.getSelectedEmployeeDetails();

  }
  getSelectedEmployeeDetails()
  {
    if(this.activated.snapshot.params["id"])
    {
      this.emplService.detail(this.activated.snapshot.params["id"]).pipe(
        map(empl=>{
        return this.selectedEmployee=EmployeeHelper.interfactoToClass(empl);
      })
        ,tap(empl=>{
          this.getContractsByEmployeeId(empl.id);
        })).subscribe();
    }

  }
  buildForm()
  {
    this.timesheetForm= this.formBuilder.group({
       contract:[''],start_date:[''],
      start_hour:[null],end_hour:[null],type:[''],comment:['']
    })
  }

  private getContractsByEmployeeId(employeeID:string) {
  this.contracts= this.contractService.getAllContractsByEmployeeID(employeeID);
  }

  onCreateTimesheet() {
    let values=this.timesheetForm.value;
    let payload:TimesheetCreatePayload={} as TimesheetCreatePayload;
    let selectedContract:Contract=ContractHelper.getEmpty();
    this.contractService.detail(values.contract).pipe(map( result =>{
      payload.contract=result;
      if(this.selectedEmployee)
      {
        payload.employee= EmployeeHelper.toDto(EmployeeHelper.classToInterface(this.selectedEmployee));
      }
      payload.start_date=values.start_date;
      payload.start_hours="2000-01-01T"+values.start_hour+":01";
      payload.end_hours="2000-01-01T"+values.end_hour+":01";
      payload.comment=values.comment;
      payload.timesheet_type=values.type;
      return payload;

    }) ,map( data=>{
      this.timesheetService.create(data).subscribe();
      })
      ,tap(()=>{this.router.navigateByUrl("/timesheets")})


    ).subscribe();



  }
}
