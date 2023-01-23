import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyHomePageComponent } from './page/company-home-page/company-home-page.component';
import {ListGenericModule} from "@shared/module/list-generic/list-generic.module";
import { CompanyUpdateComponent } from './page/company-crud/company-update/company-update.component';
import { CompanyCreateComponent } from './page/company-crud/company-create/company-create.component';
import { CompanyDetailsComponent } from './page/company-crud/company-details/company-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CompanyHomePageComponent,
    CompanyUpdateComponent,
    CompanyCreateComponent,
    CompanyDetailsComponent,

  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ListGenericModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class CompanyModule { }
