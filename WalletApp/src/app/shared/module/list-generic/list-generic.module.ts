import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ListComponent } from './component/list/list.component';
import {RouterModule} from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatTableModule
    ]
})
export class ListGenericModule {
}
