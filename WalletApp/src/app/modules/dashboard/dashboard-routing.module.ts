import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardRouterComponent} from './router/dashboard-router/dashboard-router.component';
import {DashboardHomePageComponent} from './page';
import {EmployeeHomePageComponent} from "./component/employee/page/employee-home-page/employee-home-page.component";
import {employeeTestComponent} from "./component/employeeTest/page/employeeTest.component";
import {CompanyHomePageComponent} from "./component/company/page/company-home-page/company-home-page.component";

import {SidenavWrapperComponent} from "@dashboard/component/sidenav-wrapper/sidenav-wrapper.component";

const routes: Routes = [
  /*  {path: '', component: DashboardHomePageComponent},
    {path: 'employee', component:EmployeeHomePageComponent},
    {path: 'employeeTest', component:employeeTestComponent},
    {path: 'company', component:CompanyHomePageComponent},*/
  {
    path: '',
    component: SidenavWrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardHomePageComponent
      },
      {
        path: 'Employee',
        component: EmployeeHomePageComponent
      },
      {
        path: 'EmployeeTest',
        component: employeeTestComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
