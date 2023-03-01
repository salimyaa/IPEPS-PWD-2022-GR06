import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyHomePageComponent } from './page/company-home-page/company-home-page.component';
import {ListGenericModule} from "@shared/module/list-generic/list-generic.module";



@NgModule({
  declarations: [
    CompanyHomePageComponent,

  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ListGenericModule,
  ]
})
export class CompanyModule { }
