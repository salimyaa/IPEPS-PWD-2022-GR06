import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiResponse, ApiUriEnum} from "@shared/model";
import {CompanyDto} from "../model/dto/company.dto";
import {CompanyHelper} from "../helper/company.helper";
import {ApiService} from "@shared/service";
import {map} from "rxjs/operators";

import {Company} from "../model/business/company";
import {CompanyCreatePayload} from "../model/payload/CompanyCreatePayload.interface";
import {CompanyUpdatePayload} from "../model/payload/CompanyUpdatePayload.interface";


@Injectable({
  providedIn: 'root'
})
export class CompanyService extends ApiService {


  list(): Observable<Company[]> {
    return this.get(ApiUriEnum.COMPANY_LIST).pipe(
      map((response: ApiResponse) => (response.result) ? (response.data! as CompanyDto[]).map((d: CompanyDto) => CompanyHelper.fromDto(d)) : [])
    )
  }

  create(payload: CompanyCreatePayload | CompanyUpdatePayload | undefined) {
    return this.post(ApiUriEnum.COMPANY_CREATE, payload).pipe(
      map((response: ApiResponse) => (response.result) ? CompanyHelper.fromDto(response.data! as CompanyDto) : CompanyHelper.getEmpty()))
  }

  update(payload: string) {
    return this.put(ApiUriEnum.COMPANY_UPDATE, payload).pipe(
      map((response: ApiResponse) => (response.result) ? CompanyHelper.fromDto(response.data! as CompanyDto) : CompanyHelper.getEmpty()))
  }
  detail(id:string) {
    return this.get(`${ApiUriEnum.COMPANY_DETAIL}/${id}`).pipe(
      map((response: ApiResponse) => (response.result) ? CompanyHelper.fromDto(response.data! as CompanyDto) : CompanyHelper.getEmpty()))
  }
  //Todo, update, detail

  remove(id: string): Observable<ApiResponse> {
    return this.delete(`${ApiUriEnum.COMPANY_DELETE}/${id}`);
  }
  getCompanyList(): Observable<CompanyDto[]>{
    return this.get('Company/list').pipe(map((response:ApiResponse)=>{
      return response.data as CompanyDto[];
    }));
  }
}


