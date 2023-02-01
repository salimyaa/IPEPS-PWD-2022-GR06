import { Component } from '@angular/core';
import {Contract} from "../../model/business/contract";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeDto} from "../../../employee/model/dto/employee.dto";
import {EmployeeService} from "../../../employee/service/employee.service";
import {ContractServiceService} from "../../service/contract-service.service";
import {ContractPayload} from "../../model/payload/contract.payload";
import {Employee} from "../../../employee/model/business/employee";
import {map, switchMap} from "rxjs/operators";
import {EmployeeHelper} from "../../../employee/helper/employee.helper";
import {delay, tap} from "rxjs";

import {ContractHelper} from "../../helper/contract.helper";
import {Router} from "@angular/router";
@Component({
  selector: 'app-create-contract-page',
  templateUrl: './create-contract-page.component.html',
  styleUrls: ['./create-contract-page.component.scss']
})
export class CreateContractPageComponent {
  contract!:Contract;
  employees?:EmployeeDto[];
  contractForm!:FormGroup;
  constructor(private formBuilder:FormBuilder ,private router:Router, private employeService:EmployeeService, private  contractService:ContractServiceService) {
  }

  ngOnInit()
  {
    this.contract=ContractHelper.getEmpty();
    this.getEmployeesList(); // obtention de la liste des employés pour les proposer dans le select
    this.contractForm=this.formBuilder.group(
      {
        title:[null,Validators.required],description:[null],
        start_date:[null,Validators.required],end_date:[null,Validators.required],
        nb_hours_by_week:[null,[Validators.required,Validators.pattern('^[0-9]{1}[0-9]{0,2}$'),Validators.max(168)]],
        employee_id:[null,Validators.required]
      });
  }
  onSubmitForm()
  {
    let values=this.contractForm.value;
    //TODO: prendre en comtpe les modif dans le service

    if(this.contractForm.valid) {
      // récupération de l'employé sur base de son id
      this.employeService.detail(values.employee_id).pipe(
        switchMap((empl: Employee) => {
          let payload: ContractPayload = // injection des donnnées du form et de l'employé dans un payload
            {
              title: values.title,
              description: values.description,
              start_date: values.start_date,
              nb_hours_by_week: values.nb_hours_by_week,
              end_date: values.end_date,
              employee: EmployeeHelper.toDto(empl)
            };// requete create
          return this.contractService.createContract(payload);
        })// la requete retourne un contrat avec le code erreur dans contrat.status_code
        , tap((result) => {
          this.contract = result;
        }),delay(750), tap((r)=>{
          //todo: Remplacer le delay par la navigation immédiate mais affichage du message dans un snackbar
          this.router.navigateByUrl('/contracts');
        })
      ).subscribe();
    }
    else
    {
      this.contract.status_code="invalid";
    }
  }

  getEmployeesList()
  {
    this.employeService.getEmployeeList().subscribe(data=> {this.employees=data;});
  }

  get title()
  {
    return this.contractForm.get('title');
  }
  get start_date()
  {
    return this.contractForm.get('start_date');
  }
  get end_date()
  {
    return this.contractForm.get('end_date');
  }
  get nb_hours()
  {
    return this.contractForm.get('nb_hours_by_week');
  }
  get employee_id()
  {
    return this.contractForm.get('employee_id');
  }


}
