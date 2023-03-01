import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTestRoutingModule } from './employeeTest-routing.module';
import {employeeTestComponent} from "./page/employeeTest.component";


@NgModule({
  declarations: [
    employeeTestComponent
  ],
  imports: [
    CommonModule,
    EmployeeTestRoutingModule
  ]
})
export class EmployeeTestModule { }
