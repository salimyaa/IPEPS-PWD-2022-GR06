import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetHomePageComponent } from './pages/timesheet-home-page/timesheet-home-page.component';
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CreateTimesheetPageComponent } from './pages/create-timesheet-page/create-timesheet-page.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import { TimesheetsListComponent } from './components/timesheets-list/timesheets-list.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    TimesheetHomePageComponent,
    CreateTimesheetPageComponent,
    TimesheetsListComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatTableModule
  ],
  providers:[
    MatDatepickerModule
  ]
})
export class TimesheetModule { }
