import { Component } from '@angular/core';
import {EmployeeClass} from "../../../employee/model/business/employeeClass";
import {EmployeeService} from "../../../employee/service/employee.service";
import {ActivatedRoute} from "@angular/router";
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
              private contractService:ContractServiceService, private timesheetService:TimesheetService) {

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
      start_hour:[null],end_hour:[null],type:[''],commentaire:['']
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
      payload.contract=ContractHelper.fromDto(result);
      if(this.selectedEmployee)
      {
        payload.employee= EmployeeHelper.classToInterface(this.selectedEmployee);
      }
      payload.start_date=values.start_date;
      payload.start_hour=values.start_hour;
      payload.end_hour=values.end_hour;
      payload.comment=values.commment;
      payload.timesheet_type=values.type;
      return payload;

    }) ,map( data=>{
      console.log(data)
      this.timesheetService.create(data).subscribe();
      })


    ).subscribe();



  }
}
