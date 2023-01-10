import {CompanyDto} from "../../../company/model/dto/company.dto";

export interface EmployeeDto {
  employee_id: string,
  firstname: string,
  lastname: string
  status : string;
 company: CompanyDto;

}
