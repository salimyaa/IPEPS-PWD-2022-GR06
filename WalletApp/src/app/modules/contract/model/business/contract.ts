import {Employee} from "../../../employee/model/business/employee";

export interface Contract {
  id:string;
  title:string,
  description:string,
  start_date:string,
  end_date:string,
  nb_hours_by_week:number;
  employee:Employee;
  status_code:string;
}
