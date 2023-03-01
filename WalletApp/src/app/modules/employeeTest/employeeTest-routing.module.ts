import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {employeeTestComponent} from "./page/employeeTest.component";

const routes: Routes = [
  {
    path: '', component: employeeTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeTestRoutingModule { }
