import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from '../menu/menu.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MenuModule { }
