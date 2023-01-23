import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../model/business/employee";
import {EmployeeHelper} from "../../../helper/employee.helper";
import {EmployeeService} from "../../../service/employee.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeCreatePayload} from "../../../model/payload/EmployeeCreatePayload.interface";
import {EmployeeStatus} from "../../../model/enum/EmployeeStatus";
import {ActivatedRoute, Params} from "@angular/router";
import {of, switchMap, tap} from "rxjs";
import {isNil} from "lodash";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  public id!: string;

  employeeForm: FormGroup=EmployeeHelper.convertToUpdateForm(EmployeeHelper.getEmpty());
  employee: Employee = EmployeeHelper.getEmpty();
  private payload?: EmployeeCreatePayload ;
// variable pour afficher enum dans le html
  keys : any[] = [];
  statusEnum = EmployeeStatus;



  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private fb: FormBuilder
  ) {   }

  ngOnInit(): void {
    this.keys = Object.keys(this.statusEnum);
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
  create() {
    if(this.employeeForm.valid){
      this.payload = this.employeeForm.value;
      this.payload!.company = {company_id:'212d94dc-5c00-489a-adb5-1c9552981a2c'}
      this.employeeService.create(this.payload).subscribe((response:Employee) => {
        console.log(response);
      });
    }
  };

}



  /*addEmployee() {
    let employee: Employee = {
      firstname: this.employee.firstname.value,
      lastname: string
      status : string;
      company: Company;
      address: string;
      birthday : string;
      gender : string;
      ssin :string;
      email:string;
      phone:string;
      city:string;
      picture: string;
      firstname: this.firstname.value,
      lastname: this.LastName.value,
      birthdate: this.BirthDay.value,
      gender: this.Gender.value,
      company: this.Company.value,
      profile: this.fileInput.nativeElement.files[0]?.name,
    };*/
  /*  this.employeeService.post(employee).subscribe((res) => {
      this.employees.unshift(res);
      this.clearForm();
    });
  }*/

