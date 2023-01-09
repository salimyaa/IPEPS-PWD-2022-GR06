import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardHomePageComponent} from './page';
import {EmployeeHomePageComponent} from "../employee/page/employee-home-page/employee-home-page.component";
import {employeeTestComponent} from "../employeeTest/page/employeeTest.component";
import {SidebarComponent} from "../../interface/sidebar/sidebar.component";



const routes: Routes = [
  /* {path: '', component: DashboardHomePageComponent},
  {path: 'employee', component:EmployeeHomePageComponent},
  {path: 'employeeTest', component:employeeTestComponent},
  {path: 'company', component:CompanyHomePageComponent},*/
 {
    path: '',
    component: SidebarComponent,
    children: [
      {path: '', component: DashboardHomePageComponent},
      {path: 'employee', component:EmployeeHomePageComponent},
      {path: 'employeeTest', component:employeeTestComponent},
      {path: 'company', loadChildren: () => import('../company/company.module').then(m => m.CompanyModule)},
      {path:'contracts',loadChildren: () =>import('../contract/contract.module').then(m=>m.ContractModule)},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
