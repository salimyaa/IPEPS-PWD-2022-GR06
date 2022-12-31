import {Component, Input, OnInit} from '@angular/core';
import {ListGenericConfig} from '@shared/module/list-generic/model/list-generic.config';
import {Employee} from '../../model/business/employee';
import {EmployeeService} from "../../service/employee.service";
import {BehaviorSubject} from "rxjs";
import {ApiResponse, ApiUriEnum} from "@shared/model";
import {MatDialog} from "@angular/material/dialog";
import {ListGenericComponent} from "../../../../../Interface/listGenericPerso/listGeneric/component/list-generic/list-generic.component";

import {EmployeeCreatePayload} from "../../payload/EmployeeCreatePayload";
import {EmployeeDto} from "../../model/dto/employee.dto";
import {EmployeeUpdatePayload} from "../../payload/EmployeeUpdatePayload";


@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.scss']
})


export class EmployeeHomePageComponent implements OnInit {
 /* config$ = new BehaviorSubject<ListGenericConfig>({
    fields: [],
    data: [],
    callback: this.callback

  });*/


  employee!: EmployeeDto[];

constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {


    // List employee
    this.getlistEmployee();
    /*this.employeeService.list().subscribe((employees: Employee[]) => {
        this.config$.next({
          fields: ['firstname', 'lastname', 'status'],
          data: employees,
          callback: this.callback
        })
      }
    )*/
    /*
        this.employeeService.list().subscribe({
          next: datatable => {
            this.datatable = datatable;
          },
          error: error => {
            console.error('probleme de data', error);
          }
        })
        // Create employee
        const formsRef = this.dialog.open(ListGenericComponent, {
          width: '20%',
          data: 'Add'
        });

        formsRef.afterClosed().subscribe(result => {
          if (result) {
            const body = {
              firstname: result.value.firstname,
              lastname: result.value.lastname,
              status: result.value.status
            }

            this.employeeService.create(this.payload).subscribe({
              next: datatable => {
                this.ngOnInit();
              },
              error: error => {
                console.error('probleme de data', error);
              }
            })
          }
        })

        // update employee
        // Detail employee

        // Remove employee
        this.employeeService.remove('id').subscribe((value: ApiResponse) => {
          console.log('mon id', this.id);
        })*/

  }


  /*callback(employee: Employee): void {
    console.log('mon employee', employee);
  }*/

  private getlistEmployee() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employee = data;
      console.log('data', data)
    })


  }


}