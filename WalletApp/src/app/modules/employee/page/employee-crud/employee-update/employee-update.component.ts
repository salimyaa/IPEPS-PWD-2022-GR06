import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../service/employee.service";
import {ActivatedRoute, Params} from "@angular/router";


import {EmployeeHelper} from "../../../helper/employee.helper";
import {Employee} from "../../../model/business/employee";
import {of, switchMap, tap} from "rxjs";
import {isNil,} from "lodash";
import {FormGroup} from "@angular/forms";
import {EmployeeUpdatePayload} from "../../../model/payload/EmployeeUpdatePayload.interface";
import {EmployeeStatus} from "../../../model/enum/EmployeeStatus";
import {CompanyDto} from "../../../../company/model/dto/company.dto";
import {CompanyService} from "../../../../company/service/company.service";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  public id!: string;
// variable pour afficher enum dans le html
  employeeForm: FormGroup=EmployeeHelper.convertToUpdateForm(EmployeeHelper.getEmpty());
  employee: Employee = EmployeeHelper.getEmpty();
  private payload?: EmployeeUpdatePayload ;
  companies!: CompanyDto[];

//afficher enum dans le html
  keys : any[] = [];

  statusEnum = EmployeeStatus;
  isDisabled: boolean = true;
  maxDate: any;
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    //select status
    this.keys = Object.keys(this.statusEnum);

    //Show Employee details
    this.route.params
      .pipe(switchMap((param: Params) => {
        if (!isNil(param['id'])) {
          return this.employeeService.detail(param['id']);
        }
        return of(EmployeeHelper.getEmpty());
      }), tap((employee: Employee) => {
        this.employee = employee;
        this.employeeForm = EmployeeHelper.convertToUpdateForm(employee);
      }))
      .subscribe( );
    //Show Company details
    this.companyService.getCompanyList().subscribe(companies => this.companies = companies);
  }
// Show if status is employed
  changeStatus() {
    this.isDisabled = this.statusEnum !== EmployeeStatus;
  }



    //validation form
    update() {
      if(this.employeeForm.valid){
        let payload = this.employeeForm.value;
        this.payload = {...payload,company:{company_id:payload.company}};
        this.employeeService.update(this.payload).subscribe((response:Employee) => {
          console.log(response);
        });
      }
    };

}







