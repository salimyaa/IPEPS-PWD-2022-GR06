import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardHomePageComponent} from './page';
import {EmployeeHomePageComponent} from "../employee/page/employee-home-page/employee-home-page.component";
import {employeeTestComponent} from "../employeeTest/page/employeeTest.component";
import {SidebarComponent} from "../../interface/sidebar/sidebar.component";
import {CompanyHomePageComponent} from "../company/page/company-home-page/company-home-page.component";
import {EmployeeDetailsComponent} from "../employee/page/employee-crud/employee-details/employee-details.component";
import {EmployeeUpdateComponent} from "../employee/page/employee-crud/employee-update/employee-update.component";
import {EmployeeCreateComponent} from "../employee/page/employee-crud/employee-create/employee-create.component";
import {CompanyDetailsComponent} from "../company/page/company-crud/company-details/company-details.component";
import {CompanyUpdateComponent} from "../company/page/company-crud/company-update/company-update.component";
import {CompanyCreateComponent} from "../company/page/company-crud/company-create/company-create.component";
import {TimesheetHomePageComponent} from "../timesheet/page/timesheet-home-page/timesheet-home-page.component";


const routes: Routes = [
  /* {path: '', component: DashboardHomePageComponent},
  {path: 'employee', component:EmployeeHomePageComponent},
  {path: 'employeeTest', component:employeeTestComponent},
  {path: 'company', component:CompanyHomePageComponent},
  {path: 'company', loadChildren: () => import('../company/company.module').then(m => m.CompanyModule)},
*/
 {
    path: '',
    component: SidebarComponent,
    children: [
      {path: '', component: DashboardHomePageComponent},
      {path: 'Employees', component:EmployeeHomePageComponent},
      {path: 'Employees/detail/:id', component:EmployeeDetailsComponent},
      {path: 'Employees/update/:id', component:EmployeeUpdateComponent},
      {path: 'Employees/create', component:EmployeeCreateComponent},
      {path: 'employeeTest', component:employeeTestComponent},
      {path: 'Company', component:CompanyHomePageComponent},
      {path: 'Company/detail/:id', component:CompanyDetailsComponent},
      {path: 'Company/update/:id', component:CompanyUpdateComponent},
      {path: 'Company/create', component:CompanyCreateComponent},

      {path:'timesheets',loadChildren:()=>import('../timesheet/timesheet.module').then(m=>m.TimesheetModule)},
      {path:'contracts',loadChildren: () =>import('../contract/contract.module').then(m=>m.ContractModule)},
   //   {path: 'contracts/detail/:id', component:DetailContractPageComponent},
     // {path: 'contracts/edit/:id', component:EditContractPageComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
