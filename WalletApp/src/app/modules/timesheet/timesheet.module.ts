import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetHomePageComponent } from './page/timesheet-home-page/timesheet-home-page.component';
import { CreateTimesheetPageComponent } from './page/create-timesheet-page/create-timesheet-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatOptionModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    TimesheetHomePageComponent,
    CreateTimesheetPageComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatOptionModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,

  ]
})
export class TimesheetModule { }
