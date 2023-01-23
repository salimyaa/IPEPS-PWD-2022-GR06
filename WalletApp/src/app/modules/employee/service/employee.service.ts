import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../model/business/employee";
import {ApiResponse, ApiUriEnum} from "@shared/model";
import {EmployeeDto} from "../model/dto/employee.dto";
import {EmployeeHelper} from "../helper/employee.helper";
import {ApiService} from "@shared/service";
import {map} from "rxjs/operators";
import {EmployeeCreatePayload} from "../model/payload/EmployeeCreatePayload.interface";
import {EmployeeUpdatePayload} from "../model/payload/EmployeeUpdatePayload.interface";



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

  update(payload: EmployeeUpdatePayload | undefined) {
    return this.put(ApiUriEnum.PROFILE_UPDATE, payload).pipe(
      map((response: ApiResponse) => (response.result) ? EmployeeHelper.fromDto(response.data! as EmployeeDto) : EmployeeHelper.getEmpty()))
  }
  detail(id:string) {
    return this.get(`${ApiUriEnum.PROFILE_DETAIL}/${id}`).pipe(
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

  /*getEmployeeById(id: string): Observable<Employee>{
    return this.get('Employees/detail/${id}').pipe(
      map((response: ApiResponse) => (response.result) ? EmployeeHelper.fromDto(response.data! as EmployeeDto) : EmployeeHelper.getEmpty()))
  }
  createEmployee(employee:EmployeeCreatePayload)
  {
    return this.apiService.post('Employees/create',employee);
  }
  deleteContract(Employee_id:string)
  {
    return this.apiService.delete('Employees/delete/'+Employee_id);
  }

  detail(id: string) {
     return this.apiService.get(`Employees/detail/${id}`).pipe(
      map((response: ApiResponse) => response.data! as EmployeeDto ))
  }
  update(payload: EmployeeUpdatePayload)
  {
    return this.apiService.put('Employees/update', payload)
      .pipe(map((response:ApiResponse)=>response.data as EmployeeDto))
  }
  */
}


