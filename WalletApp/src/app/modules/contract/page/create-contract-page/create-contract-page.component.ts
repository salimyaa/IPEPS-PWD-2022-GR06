import { Component } from '@angular/core';
import {Contract} from "../../model/business/contract";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeDto} from "../../../employee/model/dto/employee.dto";
import {EmployeeService} from "../../../employee/service/employee.service";
import {ContractServiceService} from "../../service/contract-service.service";
import {ContractPayload} from "../../model/payload/contract.payload";
import {Employee} from "../../../employee/model/business/employee";
import {map, switchMap} from "rxjs/operators";
import {EmployeeHelper} from "../../../employee/helper/employee.helper";
import {tap} from "rxjs";

@Component({
  selector: 'app-create-contract-page',
  templateUrl: './create-contract-page.component.html',
  styleUrls: ['./create-contract-page.component.scss']
})
export class CreateContractPageComponent {
  contract!:Contract;
  employees?:EmployeeDto[];
  contractForm!:FormGroup;
  tempEmployee?:Employee;
  constructor(private formBuilder:FormBuilder, private employeService:EmployeeService, private  contractService:ContractServiceService) {
  }

  ngOnInit()
  {
    this.getEmployeesList();
    this.contractForm=this.formBuilder.group(
      {
        title:[null],description:[null],
        start_date:[null],end_date:[null],
        nb_hours_by_week:[null], employee_id:[null]
      })
  }
  onSubmitForm()
  { let values=this.contractForm.value;
    let rest= this.employeService.detail(values.employee_id).pipe(
      switchMap((empl)=>
      {
        let payload : ContractPayload =
          {title:values.title,description:values.description,start_date:values.start_date,
            nb_hours_by_week:values.nb_hours_by_week, end_date:values.end_date, employee:EmployeeHelper.toDto(empl)};

        return this.contractService.createContract(payload);
      })
    ).subscribe();







  }

  getEmployeesList()
  {
    this.employeService.getEmployeeList().subscribe(data=> {this.employees=data;})
  }

}
