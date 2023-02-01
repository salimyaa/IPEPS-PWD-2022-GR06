import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ListGenericConfig} from '../../model/list-generic.config';
import {isNil} from 'lodash';
import {SpecificConfig} from "@shared/module/list-generic/model/specific.config";
import {EmployeeService} from "../../../../../modules/employee/service/employee.service";
import {ActivatedRoute} from "@angular/router";
import {SpecificConfigImage} from "@shared/module/list-generic/model/specific.config.image";
import {CompanyService} from "../../../../../modules/company/service/company.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() config!: ListGenericConfig;

  valid: boolean = false;
  haveCallBack: boolean = false;
  currentCSS!: SpecificConfig | SpecificConfigImage| undefined;
  service: string | undefined;
 /* pageSizeValue = 5;
  datasource = new MatTableDataSource<any>;*/
  constructor(private employeeService: EmployeeService,private companyService: CompanyService
             ) { }

  ngOnInit(): void {
    if (!this.config || !this.config.data) {
      console.error('Error: config or config.data is undefined');
      return;
    }

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
      if(this.config.service == 'emplService') {
        this.employeeService.remove(id).subscribe(Response => {
          console.log(Response);
        })
      }
      if(this.config.service == 'company') {
        this.companyService.remove(id).subscribe(Response => {
          console.log(Response);
        })
      }
    }
  }

  isInclude(field: string):boolean {

    this.currentCSS = this.config.specificCSS?.find(item => item.field === field);
    return (this.currentCSS !== undefined);
  }
 /*isIncludeImg(src :string):boolean{
   this.currentCSS = this.config.specificIMG?.find(item => item.src === src);
    return (this.currentCSS !== undefined);
  }*/
  /*urlPath(this.config.entityUrl:string) {
    return `${this.config.entityUrl}/${this.id}`;
  }*/

  /*@ViewChild(MatPaginator) paginator!: MatPaginator;

  /!**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   *!/
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }*/


}
