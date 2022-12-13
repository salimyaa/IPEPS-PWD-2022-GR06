import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractHomePageComponent } from './page/contract-home-page/contract-home-page.component';


@NgModule({
  declarations: [
    ContractHomePageComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
