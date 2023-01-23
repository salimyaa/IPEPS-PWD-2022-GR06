import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ListGenericModule} from './module/list-generic/list-generic.module';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [

  ],
  imports: [

  CommonModule,
  ListGenericModule,

],
  exports: [
    TranslateModule
  ]

})
export class SharedModule {
}
