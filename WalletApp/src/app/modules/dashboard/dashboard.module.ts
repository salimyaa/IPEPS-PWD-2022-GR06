import {NgModule} from '@angular/core';
import {DashboardComponent} from './page';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {MaterialExampleModule} from "../Interface/material/material.module";
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [DashboardRoutingModule,
            CommonModule,
            MaterialExampleModule,
            MatSidenavModule,
            FormsModule,
            MatIconModule
  ],
  providers: []
})
export class DashboardModule {

}
