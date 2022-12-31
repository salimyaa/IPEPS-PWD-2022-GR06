import { Component, Input, OnInit } from '@angular/core';
import {ListGenericConfig} from '../../model/list-generic.config';
import {isNil} from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() config!: ListGenericConfig;
  valid: boolean = false;
  haveCallBack: boolean = false;

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
  callCallback2(data:any) {
    if (!isNil(this.config.callback)) {
      this.config.callback(data);
    }
  }

  callRemove(data: any) {
    if (!isNil(this.config.callback)) {
      this.config.callback(data);
    }
  }
}
