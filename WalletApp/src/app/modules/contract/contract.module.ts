import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractHomePageComponent } from './page/contract-home-page/contract-home-page.component';
import { CreateContractPageComponent } from './page/create-contract-page/create-contract-page.component';
import { EditContractPageComponent } from './page/edit-contract-page/edit-contract-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { DetailContractPageComponent } from './page/detail-contract-page/detail-contract-page.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ContractHomePageComponent,
    CreateContractPageComponent,
    EditContractPageComponent,
    DetailContractPageComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ContractModule { }
