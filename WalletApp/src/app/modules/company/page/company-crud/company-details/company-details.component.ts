import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {of, switchMap, tap} from "rxjs";
import {isNil} from "lodash";
import {Company} from "../../../model/business/company";
import {CompanyHelper} from "../../../helper/company.helper";
import {CompanyService} from "../../../service/company.service";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  company: Company = CompanyHelper.getEmpty();

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {   }

  ngOnInit(): void {

    //detail
    this.route.params
      .pipe(switchMap((param: Params) => {
        if (!isNil(param['id'])) {
          return this.companyService.detail(param['id']);
        }
        return of(CompanyHelper.getEmpty());
      }), tap((company: Company) => {
        this.company = company;
      }))
      .subscribe();

  }

  //Delete
  remove() {
    this.companyService.remove(this.company.id).pipe( tap(notused => {
      this.company = CompanyHelper.getEmpty();
    } )).subscribe();
  }
}
