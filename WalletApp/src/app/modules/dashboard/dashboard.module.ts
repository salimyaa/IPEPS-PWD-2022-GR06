import {NgModule} from '@angular/core';
import {DashboardComponent} from './page';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {MenuModule} from "../Interface/menu-nav/menu.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [DashboardRoutingModule, CommonModule, MenuModule],
  providers: []
})
export class DashboardModule {
}
