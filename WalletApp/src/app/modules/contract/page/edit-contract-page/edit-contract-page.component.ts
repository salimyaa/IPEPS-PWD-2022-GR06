import { Component } from '@angular/core';
import {ContractDto} from "../../model/dto/contract.dto";
import {ActivatedRoute, Params, Router, RouterLink, RouterModule} from "@angular/router";
import {ContractServiceService} from "../../service/contract-service.service";
import {switchMap, tap} from "rxjs";
import {EmployeeDto} from "../../../employee/model/dto/employee.dto";
import {EmployeeService} from "../../../employee/service/employee.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ContractPayload} from "../../model/payload/contract.payload";
import {EmployeeHelper} from "../../../employee/helper/employee.helper";
import {ContractUpdatePayload} from "../../model/payload/contract.update.payload";

@Component({
  selector: 'app-edit-contract-page',
  templateUrl: './edit-contract-page.component.html',
  styleUrls: ['./edit-contract-page.component.scss']
})
export class EditContractPageComponent {
  contract?:ContractDto;
  employees?:EmployeeDto[];
  editForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute, private router:Router,private contractService:ContractServiceService, private employeService:EmployeeService) {
  }
  ngOnInit()
  {


    // obtention des données du contract avec l'id de l'url
    this.route.params
      .pipe(switchMap((param: Params) => {
        return this.contractService.detail(param['id']);
      }), tap((contra: ContractDto) => {
        this.contract = contra;
        //config du form dans le pipe pour être sur d'avoir les data du contrat
        this.editForm=this.formBuilder.group(
          {
            title:[this.contract.title],description:[this.contract.description],
            start_date:[this.contract.start_date],end_date:[this.contract.end_date],
            nb_hours_by_week:[this.contract.nb_hours_by_week], employee_id:[this.contract.employee.id]
          });
      }))
      .subscribe();

    this.getEmployeesList();
  }
  getEmployeesList()
  {
    this.employeService.getEmployeeList().subscribe(data=> {this.employees=data;});
  }

  onUpdate()
  {
    let values=this.editForm.value;
    let id= this.contract?.contract_id?this.contract.contract_id:"null";
    let result= this.employeService.detail(values.employee_id).pipe(
      switchMap((empl)=>
      {
        let payload : ContractUpdatePayload =
          {contract_Id:id,title:values.title,description:values.description,start_date:values.start_date,
            nb_hours_by_week:values.nb_hours_by_week, end_date:values.end_date, employee:EmployeeHelper.toDto(empl)};
        console.log(payload);
        return this.contractService.update(payload);
      }),
      tap(()=>{
        //pour refresh la liste dans le service
        this.contractService.getAllContracts();
      }),
      tap(()=>{
        this.router.navigateByUrl('/contracts');
      })
    ).subscribe();



  }


}
