import { Component } from '@angular/core';
import {ContractServiceService} from "../../service/contract-service.service";
import {ApiResponse} from "@shared/model";
import {Observable} from "rxjs";
import {Contract} from "../../model/business/contract"
import {ContractDto} from "../../model/dto/contract.dto";

@Component({
  selector: 'app-contract-home-page',
  templateUrl: './contract-home-page.component.html',
  styleUrls: ['./contract-home-page.component.scss']
})
export class ContractHomePageComponent {
  constructor(private service: ContractServiceService) {
  }
  contracts?:ContractDto[];


  ngOnInit():void{
  this.getContractsList();
  }
  getContractsList(){
    this.service.getAllContracts().subscribe(data => { this.contracts= data})
  }

}
