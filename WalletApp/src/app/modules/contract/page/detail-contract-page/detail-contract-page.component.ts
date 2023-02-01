import { Component } from '@angular/core';
import {of, switchMap, tap} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {isNil} from "lodash";
import {ContractServiceService} from "../../service/contract-service.service";
import {ContractHelper} from "../../helper/contract.helper";
import {Contract} from "../../model/business/contract";
import {ContractDto} from "../../model/dto/contract.dto";

@Component({
  selector: 'app-detail-contract-page',
  templateUrl: './detail-contract-page.component.html',
  styleUrls: ['./detail-contract-page.component.scss']
})
export class DetailContractPageComponent {
  contract?:ContractDto;
  constructor(private route:ActivatedRoute, private contractService:ContractServiceService) {
  }
  ngOnInit()
  {

    this.route.params
      .pipe(switchMap((param: Params) => {

        return this.contractService.detail(param['id']);


      }), tap((contra: ContractDto) => {
        this.contract = contra;
      }))
      .subscribe();
  }

}
