import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../service/employee.service";
import {ActivatedRoute, Params} from "@angular/router";

import {EmployeeUpdatePayload} from "../../../payload/EmployeeUpdatePayload";
import {EmployeeHelper} from "../../../helper/employee.helper";
import {Employee} from "../../../model/business/employee";
import {of, switchMap, tap} from "rxjs";
import {isNil} from "lodash";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  public Employee_id!: string;
  public payload?: EmployeeUpdatePayload;
  employeeForm: FormGroup;
  employee: Employee = EmployeeHelper.getEmpty();


  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private fb: FormBuilder
  ) {this.employeeForm = fb.group({})

  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      status: this.fb.control(''),
      city: this.fb.control(''),
      address: this.fb.control(''),
      phone: this.fb.control(''),
      email: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      ssin: this.fb.control(''),
      company: this.fb.control(''),
    });

    this.route.params
      .pipe(switchMap((param: Params) => {
        if (!isNil(param['id'])) {
          return this.employeeService.detail(param['id']);
        }
        return of(EmployeeHelper.getEmpty());
      }), tap((employee: Employee) => {
        this.employee = employee;
      }))
      .subscribe();


    /*this.activatedRouter.params
      .pipe(

      map((params:Params)=> params['Employee_id']),
        switchMap((Employee_id:string)=>{
        if(isNil(Employee_id)){
          return EMPTY;
        }else {
          return this.employeeService.detail(Employee_id);
        }

  })

      ).subscribe((response :ApiResponse) => {
      this.payload= (isNil(response)|| response.result) ? response.data : undefined;
    })*/

  }
}







