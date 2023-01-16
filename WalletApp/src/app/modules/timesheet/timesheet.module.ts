import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetHomePageComponent } from './page/timesheet-home-page/timesheet-home-page.component';


@NgModule({
  declarations: [
    TimesheetHomePageComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule
  ]
})
export class TimesheetModule { }
