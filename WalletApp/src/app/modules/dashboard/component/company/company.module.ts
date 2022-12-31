import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyHomePageComponent } from './page/company-home-page/company-home-page.component';


@NgModule({
  declarations: [
    CompanyHomePageComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
