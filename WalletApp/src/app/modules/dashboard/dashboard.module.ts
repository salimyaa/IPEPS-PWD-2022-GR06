import {NgModule} from '@angular/core';
import {DashboardComponent} from './page';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {MaterialExampleModule} from "../Interface/material/material.module";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [DashboardRoutingModule,
            CommonModule,
            MaterialExampleModule,
            MatSidenavModule,
    ],
  providers: []
})
export class DashboardModule {
}
