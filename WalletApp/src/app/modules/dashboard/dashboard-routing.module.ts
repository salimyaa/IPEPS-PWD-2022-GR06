import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardRouterComponent} from './router/dashboard-router/dashboard-router.component';
import {DashboardHomePageComponent} from './page';
import {EmployeeHomePageComponent} from "../employee/page/employee-home-page/employee-home-page.component";
import {employeeTestComponent} from "../employeeTest/page/employeeTest.component";
import {CompanyHomePageComponent} from "../company/page/company-home-page/company-home-page.component";

const routes: Routes = [
  {path: '', component: DashboardHomePageComponent},
  {path: 'employee', component:EmployeeHomePageComponent},
  {path: 'employeeTest', component:employeeTestComponent},
  {path: 'company', component:CompanyHomePageComponent},
  /*{
    path: '',
    component: DashboardRouterComponent,
    children: [
      {path: '', component: DashboardHomePageComponent},
      {path: 'employee', component:EmployeeHomePageComponent},
      {path: 'employeeTest', component:employeeTestComponent},
      {path: 'company', component:CompanyHomePageComponent},
      // {path: 'company', loadChildren: () => import('../company/company.module').then(m => m.CompanyModule)},
    ]
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
