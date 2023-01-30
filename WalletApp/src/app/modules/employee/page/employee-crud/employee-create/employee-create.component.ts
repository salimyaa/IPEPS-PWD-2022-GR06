import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../model/business/employee";
import {EmployeeHelper} from "../../../helper/employee.helper";
import {EmployeeService} from "../../../service/employee.service";
import {FormGroup} from "@angular/forms";
import {EmployeeCreatePayload} from "../../../model/payload/EmployeeCreatePayload.interface";
import {EmployeeStatus} from "../../../model/enum/EmployeeStatus";
import {ActivatedRoute, Params} from "@angular/router";
import {of, switchMap, tap} from "rxjs";
import {isNil} from "lodash";
import {CompanyDto} from "../../../../company/model/dto/company.dto";
import {CompanyService} from "../../../../company/service/company.service";


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  public id!: string;

  employeeForm: FormGroup=EmployeeHelper.convertToCreateForm(EmployeeHelper.getEmpty());
  employee: Employee = EmployeeHelper.getEmpty();

  private payload?: EmployeeCreatePayload ;
// variable pour afficher enum dans le html
  keys : any[] = [];
  statusEnum = EmployeeStatus;
  keysCompany : any[] = [];

  selectedEmployee: any;
  companies!: CompanyDto[];


  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private companyService: CompanyService
  ) {   }

  ngOnInit(): void {
    this.keys = Object.keys(this.statusEnum);

    this.route.params
      .pipe(switchMap((param: Params) => {
        if (!isNil(param['id'])) {
          return this.employeeService.detail(param['id']);
        }
        return of(EmployeeHelper.getEmpty());
      }), tap((employee: Employee) => {
        this.employee = employee;
        this.employeeForm = EmployeeHelper.convertToCreateForm(employee);
      }))
      .subscribe( );

    this.companyService.getCompanyList().subscribe(companies => this.companies = companies);

  }
  create() {
    if(this.employeeForm.valid){
      let payload = this.employeeForm.value;
      this.payload = {...payload,company:{company_id:payload.company}}
      this.employeeService.create(this.payload).subscribe((response:Employee) => {
        console.log(response);
        console.log(this.companies)
        console.log(this.employeeForm.value);
      });

    }
  };
  onEmployeeSelected(employee: any) {
    this.selectedEmployee = employee;
  }
}





