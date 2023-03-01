import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../model/business/employee";
import {ActivatedRoute, Params} from "@angular/router";
import {EmployeeService} from "../../../service/employee.service";
import { of, switchMap, tap} from "rxjs";
import {isNil} from "lodash";
import {EmployeeHelper} from "../../../helper/employee.helper";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit{

  employee: Employee = EmployeeHelper.getEmpty();

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {   }

  ngOnInit(): void {


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

  }

}
