import {EmployeeDto} from "../../../employee/model/dto/employee.dto";

export interface ContractUpdatePayload {
  contract_Id:string;
  title:string,
  description:string,
  start_date:string,
  end_date:string,
  nb_hours_by_week:number;
  employee:EmployeeDto;
}
