import { Component, OnInit } from '@angular/core';

import {EmployeeTest} from "../model/employeeTest";
import {EmployeeTestService} from "../service/employee-test.service";

@Component({
  selector: 'app-employee-Test',
  templateUrl: './employeeTest.component.html',
  styleUrls: ['./employeeTest.component.scss']
})
export class employeeTestComponent implements OnInit {
  employeeTest! :  EmployeeTest[];
  constructor(private employeeTestService: EmployeeTestService) { }

  ngOnInit(): void {

    this.getEmployee();
  }

  private getEmployee(){
    this.employeeTestService.getEmployeeTestList().subscribe((data) => {
      this.employeeTest=data;
      console.log('data',data)
    })
  }

}
