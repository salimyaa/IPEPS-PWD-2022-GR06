import {CompanyDto} from "../../../company/model/dto/company.dto";

export interface EmployeeDto {
  employee_id: string,
  firstname: string,
  lastname: string
  status : string;
  company: CompanyDto;
  address: string;
  birthday : string;
  gender : string;
  ssin :string;
  email:string;
  phone:string;
  city:string;
  picture: string;
}
