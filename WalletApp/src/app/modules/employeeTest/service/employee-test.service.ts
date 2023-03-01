import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeTest} from "../model/employeeTest";
import {ApiService} from "@shared/service";
import {ApiResponse} from "@shared/model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeTestService extends ApiService{



  getEmployeeTestList(): Observable<EmployeeTest[]>{
      return this.get('v1/employees').pipe(map((response:ApiResponse)=>{
         return response.data as EmployeeTest[];
      }));
  }
}
