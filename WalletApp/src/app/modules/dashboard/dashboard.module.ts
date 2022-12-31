import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';



import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


import {EmployeeHomePageComponent} from "./component/employee/page/employee-home-page/employee-home-page.component";
import {DashboardHomePageComponent} from "@dashboard/page";
import {employeeTestComponent} from "./component/employeeTest/page/employeeTest.component";
import {DashboardRouterComponent} from "@dashboard/router/dashboard-router/dashboard-router.component";
import {DashboardHeaderComponent} from "@dashboard/component/dashboard-header/dashboard-header.component";
import { SidenavWrapperComponent } from './component/sidenav-wrapper/sidenav-wrapper.component';

@NgModule({
  declarations: [SidenavWrapperComponent, DashboardHomePageComponent, DashboardRouterComponent, EmployeeHomePageComponent, employeeTestComponent, DashboardHeaderComponent, SidenavWrapperComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
