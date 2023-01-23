import {Component, Input, OnInit} from '@angular/core';
import {ListGenericConfig} from '@shared/module/list-generic/model/list-generic.config';
import {Employee} from '../../model/business/employee';
import {EmployeeService} from "../../service/employee.service";
import {BehaviorSubject} from "rxjs";
import {EmployeeDto} from "../../model/dto/employee.dto";
import {EmployeeUpdatePayload} from "../../model/payload/EmployeeUpdatePayload.interface";
import {EmployeeCreatePayload} from "../../model/payload/EmployeeCreatePayload.interface";



@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.scss']
})
export class EmployeeHomePageComponent implements OnInit {
  @Input() payload!: EmployeeCreatePayload| EmployeeUpdatePayload ;
config$ = new BehaviorSubject<ListGenericConfig>({
    entityName:'',
    entityUrl:'',
    fields: [],
    data: [],
    callback: this.callback,
    callRemove:this.callRemove
  });


  employee?: EmployeeDto[];

constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {


    // List employee
    this.getlistEmployee();
    this.employeeService.list().subscribe((employees: Employee[]) => {
        this.config$.next({
          specificCSS: [{
            field: 'status',
            cssConfig: [{css: 'green-color', value: 'Employed'}, {css: 'red-color', value: 'NotEmployed'}
            ]}
            ],
          specificIMG: [{
            src: 'picture',
            cssConfig: [{css: 'image-male', value: 'men' }, {css: 'image-female', value: 'lady'}
            ]}
          ],
          entityName:'Employee',
          entityUrl: 'detail',
          entityUrlCreate: "create",
          service : 'emplService',
          fields: ['picture','firstname', 'lastname', 'status'],
          data: employees,
          callback: this.callback
        } )
        })
}
callback(employee: Employee): void {
    console.log('mon employee', employee);
    console.log('mon employee2', employee.id);
  }
  callRemove(id: string) {
  console.log('Votre employée avec l\' ', id,' a été supprimé');
  }


  private getlistEmployee() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employee = data;
      console.log('data', data)
    })
  }
}
