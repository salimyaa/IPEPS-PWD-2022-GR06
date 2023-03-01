import { Component, Input, OnInit } from '@angular/core';
import {ListGenericConfig} from '../../model/list-generic.config';
import {isNil} from 'lodash';
import {SpecificConfig} from "@shared/module/list-generic/model/specific.config";
import {EmployeeService} from "../../../../../modules/employee/service/employee.service";
import {ActivatedRoute} from "@angular/router";

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
  image!:string | undefined;
  private id!: string;

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.valid = (!isNil(this.config));
    this.haveCallBack = (this.valid && !isNil(this.config.callback) || !isNil(this.config.callRemove));
  }
  callCallback(data:any) {
    if (!isNil(this.config.callback)) {
      this.config.callback(data);
    }
  }

  callRemove(id: string) {
    if (!isNil(this.config.callback)) {

      this.employeeService.remove(id).subscribe(Response =>{
        console.log(Response);

      })
    }

  }

  isInclude(field: string):boolean {

    this.currentCSS = this.config.specificCSS?.find(item => item.field === field);
    return (this.currentCSS !== undefined);
  }
  isIncludeImg(field :string):boolean{
    this.currentCSS = this.config.specificIMG?.find(item => item.field === field);
    return (this.currentCSS !== undefined);
  }

}
