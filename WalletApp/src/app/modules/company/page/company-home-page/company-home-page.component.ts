import {Component, Input, OnInit} from '@angular/core';
import {ListGenericConfig} from '@shared/module/list-generic/model/list-generic.config';
import {BehaviorSubject} from "rxjs";
import {CompanyDto} from "../../model/dto/company.dto";
import {CompanyService} from "../../service/company.service";
import {Company} from "../../model/business/company";
import {CompanyCreatePayload} from "../../model/payload/CompanyCreatePayload.interface";
import {CompanyUpdatePayload} from "../../model/payload/CompanyUpdatePayload.interface";



@Component({
  selector: 'app-company-home-page',
  templateUrl: './company-home-page.component.html',
  styleUrls: ['./company-home-page.component.scss']
})
export class CompanyHomePageComponent implements OnInit {
  @Input() payload!: CompanyCreatePayload| CompanyUpdatePayload ;
    config$ = new BehaviorSubject<ListGenericConfig>({
    entityName:'',
    entityUrl:'',
    fields: [],
    data: [],
    specificIMG: [],
    callback: this.callback,
    callRemove:this.callRemove
  });


  company?: CompanyDto[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {


    // List company
  this.getlistCompany()
    this.companyService.list().subscribe((company: Company[]) => {
      this.config$.next({
        entityName:'Company',
        entityUrl: 'detail',
        entityUrlCreate: "create",
        service : 'company',
        fields: ['title', 'description', 'address'],
        data: company,
        specificIMG: [],
        callback: this.callback
      })
    })
    // Delete company
 }


  callback(company: Company): void {
    console.log('ma company', company);
  }
  callRemove(id: string) {
    console.log('Votre entreprise avec l\' ', id,' a été supprimé');
  }
  private getlistCompany() {
    this.companyService.getCompanyList().subscribe((data) => {
      this.company = data;
      console.log('data', data)
    })


  }




}
