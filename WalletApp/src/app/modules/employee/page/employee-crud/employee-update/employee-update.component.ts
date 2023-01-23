import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../service/employee.service";
import {ActivatedRoute, Params} from "@angular/router";


import {EmployeeHelper} from "../../../helper/employee.helper";
import {Employee} from "../../../model/business/employee";
import {of, switchMap, tap} from "rxjs";
import {isNil,} from "lodash";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeUpdatePayload} from "../../../model/payload/EmployeeUpdatePayload.interface";
import {EmployeeStatus} from "../../../model/enum/EmployeeStatus";
import {CompanyHelper} from "../../../../company/helper/company.helper";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  public id!: string;

  employeeForm: FormGroup=EmployeeHelper.convertToUpdateForm(EmployeeHelper.getEmpty());
  employee: Employee = EmployeeHelper.getEmpty();
  CompanySelect? = CompanyHelper.toDto(this.employee.company);
  private payload?: EmployeeUpdatePayload ;
  StatusSelect!: [EmployeeStatus.Employed, EmployeeStatus.NotEmployed | null];
//afficher enum dans le html


  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private fb: FormBuilder
  ) {  }

  ngOnInit(): void {

    this.route.params
      .pipe(switchMap((param: Params) => {
        if (!isNil(param['id'])) {
          return this.employeeService.detail(param['id']);
        }
        return of(EmployeeHelper.getEmpty());
      }), tap((employee: Employee) => {
        this.employee = employee;
        this.employeeForm = EmployeeHelper.convertToUpdateForm(employee);
      }))
      .subscribe( );
  }
    update() {
      if(this.employeeForm.valid){
        this.payload = this.employeeForm.value;
        this.payload!.employee_id = this.employee.id;
        this.employeeService.update(this.payload).subscribe((response:Employee) => {
          console.log(response);
        });
      }
    };



}







