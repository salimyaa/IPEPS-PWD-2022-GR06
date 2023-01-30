import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeHomePageComponent } from './page/employee-home-page/employee-home-page.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from '@angular/material/input';
import {ListGenericModule} from "@shared/module/list-generic/list-generic.module";
import { EmployeeUpdateComponent } from './page/employee-crud/employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './page/employee-crud/employee-details/employee-details.component';
import { EmployeeDeleteComponent } from './page/employee-crud/employee-delete/employee-delete.component';
import {EmployeeCreateComponent} from "./page/employee-crud/employee-create/employee-create.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
    declarations: [
        EmployeeHomePageComponent,
        EmployeeUpdateComponent,
        EmployeeDetailsComponent,
        EmployeeDeleteComponent,
        EmployeeCreateComponent
    ],
    exports: [
        EmployeeHomePageComponent
    ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ListGenericModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    TranslateModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule
  ]
})
export class EmployeeModule { }
