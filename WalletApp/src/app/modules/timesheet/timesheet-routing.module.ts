import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimesheetHomePageComponent} from "./pages/timesheet-home-page/timesheet-home-page.component";
import {CreateTimesheetPageComponent} from "./pages/create-timesheet-page/create-timesheet-page.component";

const routes: Routes = [

  {path:'createTimesheet/:id',component:CreateTimesheetPageComponent,pathMatch:'full'},
  {path:"", component:TimesheetHomePageComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetRoutingModule { }
