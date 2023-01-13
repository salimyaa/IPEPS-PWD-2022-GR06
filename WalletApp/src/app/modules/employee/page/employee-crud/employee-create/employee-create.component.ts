import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../model/business/employee";
import {EmployeeHelper} from "../../../helper/employee.helper";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee = EmployeeHelper.getEmpty();
  constructor() { }

  ngOnInit(): void {
  }

}
