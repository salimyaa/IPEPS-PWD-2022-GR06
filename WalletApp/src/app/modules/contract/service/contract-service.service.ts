import { Injectable } from '@angular/core';
import {ApiService} from "@shared/service";
import {HttpClient} from "@angular/common/http";
import {ContractDto} from "../model/dto/contract.dto";
import {ApiResponse, ApiUriEnum, DtoInterface} from "@shared/model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ContractPayload} from "../model/payload/contract.payload";
import {ContractHelper} from "../helper/contract.helper";
import {Contract} from "../model/business/contract";
import {map as mapl} from "lodash";

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
  getAllContractsByEmployeeID(employeeID:string)
  {
    return this.apiService.get('Contracts/listByEmployee/'+employeeID).pipe(
      map((response:ApiResponse)=>{
        let retVal:Contract[]=[];
        if(response.result && response.data)
        {
          let temp = response.data as ContractDto[];

          for(let i=0;i<temp.length;i++)
          {
            retVal.push(ContractHelper.fromDto(temp[i]));
          }
          return retVal;
        }
        else {
          return [ContractHelper.getEmpty()]
        }
      })
    )
  }

  /**
   *
   * @param contract
   */
  createContract(contract:ContractPayload)
  {
    return this.apiService.post('Contracts/create',contract).pipe(
      map( (response:ApiResponse)=>
      {// si response.result true c'est ok return business contrat avec code succès
        // sinon return empty avec le code erreur
        let retVal:Contract;
        if (response.result)
        {
          retVal=ContractHelper.fromDto(response.data as ContractDto);

        }
        else {
          retVal=ContractHelper.getEmpty();

        }
        retVal.status_code=response.code as string; // passage du code erreur au model business
        return retVal;
      })
    );
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
