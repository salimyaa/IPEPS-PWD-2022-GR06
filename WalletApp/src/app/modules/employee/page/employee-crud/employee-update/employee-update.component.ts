import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../service/employee.service";
import {EmployeeDto} from "../../../model/dto/employee.dto";
import {ActivatedRoute} from "@angular/router";

import {EmployeeUpdatePayload} from "../../../payload/EmployeeUpdatePayload";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  public Employee_id!: string;
  public payload?: EmployeeUpdatePayload;
  employee!: EmployeeDto[];

  constructor(private employeeService: EmployeeService, private activatedRouter: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
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



