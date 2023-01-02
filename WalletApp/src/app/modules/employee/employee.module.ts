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



@NgModule({
    declarations: [
        EmployeeHomePageComponent,
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
        MatInputModule
    ]
})
export class EmployeeModule { }
