import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from '@shared/service/http.interceptor';
import {AuthService} from '@security/service/auth.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DashboardModule} from "@dashboard/dashboard.module";

import {MatSidenavModule} from "@angular/material/sidenav";

import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';





@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
  },
    AuthService],
  exports: [



  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
