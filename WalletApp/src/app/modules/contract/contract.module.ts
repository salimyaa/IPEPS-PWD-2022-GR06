import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractHomePageComponent } from './page/contract-home-page/contract-home-page.component';
import { CreateContractPageComponent } from './page/create-contract-page/create-contract-page.component';


@NgModule({
  declarations: [
    ContractHomePageComponent,
    CreateContractPageComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
