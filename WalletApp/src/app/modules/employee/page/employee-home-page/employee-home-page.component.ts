import {Component, OnInit} from '@angular/core';
import {ListGenericConfig} from '@shared/module/list-generic/model/list-generic.config';
import {Employee} from '../../model/business/employee';
import {EmployeeService} from "../../service/employee.service";
import {BehaviorSubject} from "rxjs";
import {EmployeeDto} from "../../model/dto/employee.dto";



@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.scss']
})
export class EmployeeHomePageComponent implements OnInit {
config$ = new BehaviorSubject<ListGenericConfig>({
    fields: [],
    data: [],
    callback: this.callback

  });


  employee!: EmployeeDto[];
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
          fields: ['firstname', 'lastname', 'status'],
          data: employees,
          callback: this.callback
        } )
        })




    // Remove employee
  // this.employeeService.remove('id').subscribe();





  }
  callback(employee: Employee): void {
    console.log('mon employee', employee);

  }
  callRemove(id: any) {
    this.id = id;
    console.log('mon employee2', this.id);
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
