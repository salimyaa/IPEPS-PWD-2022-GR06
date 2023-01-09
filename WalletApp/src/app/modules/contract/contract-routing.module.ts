import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractHomePageComponent} from "./page/contract-home-page/contract-home-page.component";
import {CreateContractPageComponent} from "./page/create-contract-page/create-contract-page.component";

const routes: Routes = [
  { path:'', component:ContractHomePageComponent,pathMatch:"full"},
  {path:'createContract', component:CreateContractPageComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
