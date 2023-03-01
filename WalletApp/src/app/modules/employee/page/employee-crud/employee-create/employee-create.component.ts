import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../model/business/employee";
import {EmployeeHelper} from "../../../helper/employee.helper";
import {EmployeeService} from "../../../service/employee.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee = EmployeeHelper.getEmpty();
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
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
}
