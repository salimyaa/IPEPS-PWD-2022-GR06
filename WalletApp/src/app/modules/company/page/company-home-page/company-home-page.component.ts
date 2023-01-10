import { Component, OnInit } from '@angular/core';
import {ListGenericConfig} from '@shared/module/list-generic/model/list-generic.config';
import {BehaviorSubject} from "rxjs";
import {CompanyDto} from "../../model/dto/company.dto";
import {CompanyService} from "../../service/company.service";
import {Company} from "../../model/business/company";

@Component({
  selector: 'app-company-home-page',
  templateUrl: './company-home-page.component.html',
  styleUrls: ['./company-home-page.component.scss']
})
export class CompanyHomePageComponent implements OnInit {

    config$ = new BehaviorSubject<ListGenericConfig>({
    fields: [],
    data: [],
    callback: this.callback

  });


  company!: CompanyDto[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {


    // List employee

    this.companyService.list().subscribe((company: Company[]) => {
      this.config$.next({
        fields: ['title', 'description', 'address'],
        data: company,
        callback: this.callback
      })
    })
    // Delete employee



  }
  remove(id:string){
    this.companyService.remove(id).subscribe( (CompanyDto) => {

      this.companyService.list();
    })
  }

  callback(company: Company): void {
    console.log('ma company', company);
  }

  private getlistCompany() {
    this.companyService.getCompanyList().subscribe((data) => {
      this.company = data;
      console.log('data', data)
    })


  }
}
