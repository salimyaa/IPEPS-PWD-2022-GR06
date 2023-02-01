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
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SelectButtonModule} from "primeng/selectbutton";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {TimesheetHomePageComponent} from "../timesheet/page/timesheet-home-page/timesheet-home-page.component";






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
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    SelectButtonModule,
    MatDatepickerModule,
    MatExpansionModule,

  ]
})
export class DashboardModule { }
