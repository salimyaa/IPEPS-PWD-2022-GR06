import { Component } from '@angular/core';
import {Employee} from "../../../employee/model/business/employee";
import {EmployeeService} from "../../../employee/service/employee.service";

import {EmployeeHelper} from "../../../employee/helper/employee.helper";
import {map as mapl} from "lodash" ;
import {map} from "rxjs/operators";
import {tap} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EmployeeHomePageComponent} from "../../../employee/page/employee-home-page/employee-home-page.component";
import {EmployeeClass} from "../../../employee/model/business/employeeClass";
import {CompanyHelper} from "../../../company/helper/company.helper";
import {Router} from "@angular/router";

@Component({
  selector: 'app-timesheet-home-page',
  templateUrl: './timesheet-home-page.component.html',
  styleUrls: ['./timesheet-home-page.component.scss']
})
export class TimesheetHomePageComponent {
  employees?:EmployeeClass[];
  selectedEmployee?:EmployeeClass;
  employeeControl!:FormControl;

  constructor(private emplService:EmployeeService, private formBuilder:FormBuilder, private router:Router) {
  }
  ngOnInit()
  {
    this.getEmplList();
    this.employeeControl= new FormControl<string>('');
    this.employeeControl.valueChanges.pipe(map(value=>{
      this.selectedEmployee=value;
    })).subscribe();

  }
  getEmplList()
  {
    this.emplService.getEmployeeList().pipe(
      map(emplDto=>
      {this.employees=
        mapl(emplDto,(elem)=>
        {
          return EmployeeHelper.interfactoToClass(EmployeeHelper.fromDto(elem));
        })
      }
         )
      ,tap(()=>{console.log(this.employees);})
    ).subscribe();
  }
  onNewTimesheet()
  {
    this.router.navigateByUrl("timesheets/createTimesheet/"+this.selectedEmployee?.id)
  }

}
