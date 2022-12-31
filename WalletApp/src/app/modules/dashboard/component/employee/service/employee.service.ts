import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/business/employee";
import {ApiResponse, ApiUriEnum, DtoInterface} from "@shared/model";
import {EmployeeDto} from "../model/dto/employee.dto";
import {EmployeeHelper} from "../helper/employee.helper";
import {ApiService} from "@shared/service";
import {map} from "rxjs/operators";
import {EmployeeCreatePayload} from "../payload/EmployeeCreatePayload";
import {EmployeeUpdatePayload} from "../payload/EmployeeUpdatePayload";
import {EmployeeTest} from "../../employeeTest/model/employeeTest";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService{

  list(): Observable<Employee[]> {
    return this.get(ApiUriEnum.PROFILE_LIST).pipe(
      map((response: ApiResponse) => (response.result) ? (response.data! as EmployeeDto[]).map((d: EmployeeDto) => EmployeeHelper.fromDto(d)) : [])
    )
  }

  create(payload: EmployeeCreatePayload | EmployeeUpdatePayload | undefined) {
    return this.post(ApiUriEnum.PROFILE_CREATE, payload).pipe(
      map((response: ApiResponse) => (response.result) ? EmployeeHelper.fromDto(response.data! as EmployeeDto) : EmployeeHelper.getEmpty()))
  }
  update(payload: EmployeeUpdatePayload) {
    return this.put(ApiUriEnum.PROFILE_UPDATE, payload).pipe(
      map((response: ApiResponse) => (response.result) ? EmployeeHelper.fromDto(response.data! as EmployeeDto) : EmployeeHelper.getEmpty()))
  }
  detail(payload: EmployeeUpdatePayload) {
    return this.get(ApiUriEnum.PROFILE_DETAIL).pipe(
      map((response: ApiResponse) => (response.result) ? EmployeeHelper.fromDto(response.data! as EmployeeDto) : EmployeeHelper.getEmpty()))
  }
  //todo update, detail

  remove(id: string): Observable<ApiResponse> {
    return this.delete(`${ApiUriEnum.PROFILE_DELETE}/${id}`);
  }
  getEmployeeList(): Observable<EmployeeDto[]>{
    return this.get('Employees/list').pipe(map((response:ApiResponse)=>{
      return response.data as EmployeeDto[];
    }));
  }
}

