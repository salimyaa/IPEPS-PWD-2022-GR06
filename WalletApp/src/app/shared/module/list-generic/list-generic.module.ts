import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ListComponent } from './component/list/list.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ListGenericModule {
}
