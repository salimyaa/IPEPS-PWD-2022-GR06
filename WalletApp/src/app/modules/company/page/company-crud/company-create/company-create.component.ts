import { Component } from '@angular/core';
import {FormBuilder,  FormGroup} from "@angular/forms";
import {CompanyHelper} from "../../../helper/company.helper";
import {Company} from "../../../model/business/company";

import {ActivatedRoute, Params} from "@angular/router";
import {of, switchMap, tap} from "rxjs";
import {isNil} from "lodash";
import {CompanyService} from "../../../service/company.service";
import {CompanyCreatePayload} from "../../../model/payload/CompanyCreatePayload.interface";



@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent {
  //form: FormGroup=CompanyHelper.convertToUpdateForm(CompanyHelper.getEmpty());
  companyForm: FormGroup=CompanyHelper.convertToUpdateForm(CompanyHelper.getEmpty());
  company: Company = CompanyHelper.getEmpty();
  public id!: string;


  private payload?: CompanyCreatePayload ;
// variable pour afficher enum dans le html

  constructor(private companyService: CompanyService, private route: ActivatedRoute,private fb: FormBuilder
  ) {  }

  ngOnInit(): void {
    /*this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });*/
    this.route.params
      .pipe(switchMap((param: Params) => {
        if (!isNil(param['id'])) {
          return this.companyService.detail(param['id']);
        }
        return of(CompanyHelper.getEmpty());
      }), tap((company: Company) => {
        this.company = company;
        this.companyForm = CompanyHelper.convertToUpdateForm(company);
      }))
      .subscribe( );


  }
  create() {
    if(this.companyForm.valid){
      this.payload = this.companyForm.value;
      this.companyService.create(this.payload).subscribe((response:Company) => {
        console.log(response);
      });
    }
  };
  onSubmit() {
   // console.log(this.form.value);
    // traitement des données du formulaire
  }


}



