import {Component, OnInit} from '@angular/core';
import {ListGenericConfig} from '@shared/module/list-generic/model/list-generic.config';
import {Employee} from '../../model/business/employee';
import {EmployeeService} from "../../service/employee.service";
import {BehaviorSubject} from "rxjs";
import {EmployeeDto} from "../../model/dto/employee.dto";
import {FormBuilder} from "@angular/forms";



@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.scss']
})
export class EmployeeHomePageComponent implements OnInit {
config$ = new BehaviorSubject<ListGenericConfig>({
    fields: [],
    data: [],
    callback: this.callback,
    callRemove:this.callRemove
  });


  employee?: EmployeeDto[];
  private id!: string;

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
            field: 'picture',
            cssConfig: [{css: 'image-male', value: 'Male' }, {css: 'image-female', value: 'Female'}
            ]}
          ],
          fields: ['picture','firstname', 'lastname', 'status'],
          data: employees,
          callback: this.callback
        } )
        })
   /* this.employeeService.remove(id).subscribe(Response =>{
      this.config$.next({
        fields: ['id','firstname', 'lastname', 'status'],
        data: Response,
        callback: this.callRemove
      } )
    })*/


  }

  // Remove employee
  // this.employeeService.remove('id').subscribe();

  callback(employee: Employee): void {
    console.log('mon employee', employee);
    console.log('mon employee2', employee.id);
  }
  callRemove(id: string) {
  }


  private getlistEmployee() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employee = data;
      console.log('data', data)
    })
  }
}
/*
       this.employeeService.list().subscribe({
         next: datatable => {
           this.datatable = datatable;
         },
         error: error => {
           console.error('probleme de data', error);
         }
       })
       // Create employee
       const formsRef = this.dialog.open(ListGenericComponent, {
         width: '20%',
         data: 'Add'
       });

       formsRef.afterClosed().subscribe(result => {
         if (result) {
           const body = {
             firstname: result.value.firstname,
             lastname: result.value.lastname,
             status: result.value.status
           }

           this.employeeService.create(this.payload).subscribe({
             next: datatable => {
               this.ngOnInit();
             },
             error: error => {
               console.error('probleme de data', error);
             }
           })
         }
       })

       // update employee
       // Detail employee
 })*/
