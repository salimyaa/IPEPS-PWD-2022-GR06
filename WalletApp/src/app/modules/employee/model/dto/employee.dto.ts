import {EmployeeStatus} from "../enum/EmployeeStatus";

export interface EmployeeDto {
  employee_id: string,
  firstname: string,
  lastname: string
  status : string;
}
