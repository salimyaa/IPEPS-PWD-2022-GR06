import { Injectable } from '@angular/core';
import {ApiService} from "@shared/service";
import {HttpClient} from "@angular/common/http";
import {ContractDto} from "../model/dto/contract.dto";
import {ApiResponse} from "@shared/model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {

  constructor(private apiService: ApiService) {
  }
  contracts!:ContractDto[];
  getAllContracts()
  {
    return this.apiService.get('Contracts/list')
      .pipe(
        map((response:ApiResponse) => response.data as ContractDto[])
      );
  }
}
