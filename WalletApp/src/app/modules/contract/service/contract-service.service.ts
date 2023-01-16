import { Injectable } from '@angular/core';
import {ApiService} from "@shared/service";
import {HttpClient} from "@angular/common/http";
import {ContractDto} from "../model/dto/contract.dto";
import {ApiResponse, ApiUriEnum} from "@shared/model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ContractPayload} from "../model/payload/contract.payload";
import {EmployeeDto} from "../../employee/model/dto/employee.dto";
import {EmployeeHelper} from "../../employee/helper/employee.helper";
import {ContractHelper} from "../contract.helper";

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {

  constructor(private apiService: ApiService) {
  }
  contracts?:Observable<ContractDto[]>;
  getAllContracts()
  {
    return this.contracts = this.apiService.get('Contracts/list')
      .pipe(
        map((response:ApiResponse) => response.data as ContractDto[])
      );
  }
  createContract(contract:ContractPayload)
  {
    return this.apiService.post('Contracts/create',contract);
  }
  deleteContract(contractId:string)
  {
    return this.apiService.delete('Contracts/delete/'+contractId);
  }

  detail(id: string) {
     return this.apiService.get(`Contracts/detail/${id}`).pipe(
      map((response: ApiResponse) => response.data! as ContractDto ))
  }
  update(payload: ContractPayload)
  {
    return this.apiService.put('Contracts/update', payload)
      .pipe(map((response:ApiResponse)=>response.data as ContractDto))
  }
}
