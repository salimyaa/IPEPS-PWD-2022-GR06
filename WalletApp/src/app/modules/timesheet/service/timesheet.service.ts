import { Injectable } from '@angular/core';
import {ApiService} from "@shared/service";
import {TimesheetCreatePayload} from "../model/payload/timesheet.create.payload";
import {map} from "rxjs/operators";
import {ApiResponse} from "@shared/model";
import {Timesheet} from "../model/business/timesheet";
import {TimesheetHelper} from "../helper/timesheet.helper";
import {TimesheetDto} from "../model/dto/timesheet.dto";

@Injectable({
  providedIn: 'root'
})
export class TimesheetService extends ApiService{
  create(payload:TimesheetCreatePayload)
  {
    console.log("dans le pipe du service la payload:");
    console.log(payload);
     return this.post("timesheets/create",payload).pipe(
      map((response:ApiResponse)=>{
        let retVal:Timesheet;

        console.log(response);
        if(response.result)
        {
        //  retVal=TimesheetHelper.fromDto(response.data as TimesheetDto);
        }
        else {
          console.log(response);
        }
      })

    );
  }

}
