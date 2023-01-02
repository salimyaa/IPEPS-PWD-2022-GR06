import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRouterComponent } from './router/dashboard-router/dashboard-router.component';
import { DashboardHomePageComponent } from './page';
import { DashboardHeaderComponent } from './component/dashboard-header/dashboard-header.component';
import {SharedModule} from "@shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from "@angular/material/input";


import {EmployeeModule} from "../employee/employee.module";
import {CompanyModule} from "../company/company.module";
import {EmployeeTestModule} from "../employeeTest/employeeTest.module";


import {MatListModule} from "@angular/material/list";
import {SidebarComponent} from "../../interface/sidebar/sidebar.component";
import {MatMenuModule} from "@angular/material/menu";





@NgModule({
  declarations: [
    DashboardRouterComponent,
    DashboardHomePageComponent,
    DashboardHeaderComponent,
    SidebarComponent

  ],
  exports: [
  ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    EmployeeModule,
    CompanyModule,
    EmployeeTestModule,
    MatListModule,
    MatMenuModule,
  ]
})
export class DashboardModule { }
