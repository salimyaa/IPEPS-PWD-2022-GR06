import { Component } from '@angular/core';
import {ContractServiceService} from "../../service/contract-service.service";
import {Observable, tap} from "rxjs";
import {ContractDto} from "../../model/dto/contract.dto";
import {EmployeeService} from "../../../employee/service/employee.service";


@Component({
  selector: 'app-contract-home-page',
  templateUrl: './contract-home-page.component.html',
  styleUrls: ['./contract-home-page.component.scss', '../../../../shared/module/list-generic/component/list/list.component.scss']
})
export class ContractHomePageComponent {
  constructor(private service: ContractServiceService, private employeService: EmployeeService) {
  }
  contracts?:Observable<ContractDto[]>;



  ngOnInit():void{
  this.getContractsList();
  }
  getContractsList(){
    this.contracts=this.service.getAllContracts();
  }
  delete(contract_id:string){
    this.service.deleteContract(contract_id).pipe(
      tap(notused => {
        this.getContractsList();
      })
    ).subscribe();

  }


}
