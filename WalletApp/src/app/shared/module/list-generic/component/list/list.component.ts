import { Component, Input, OnInit } from '@angular/core';
import {ListGenericConfig} from '../../model/list-generic.config';
import {isNil} from 'lodash';
import {SpecificConfig} from "@shared/module/list-generic/model/specific.config";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() config!: ListGenericConfig;
  valid: boolean = false;
  haveCallBack: boolean = false;
  currentCSS!: SpecificConfig | undefined;


  constructor() { }

  ngOnInit(): void {
    this.valid = (!isNil(this.config));
    this.haveCallBack = (this.valid && !isNil(this.config.callback));
  }
  callCallback(data:any) {
    if (!isNil(this.config.callback)) {
      this.config.callback(data);
    }
  }

  callRemove(id: any) {
    if (!isNil(this.config.callback)) {
      this.config.callback(id);
    }
  }
  isInclude(field: string):boolean {
    this.currentCSS = this.config.specificCSS?.find(item => item.field === field);
    return (this.currentCSS !== undefined);
  }

}
