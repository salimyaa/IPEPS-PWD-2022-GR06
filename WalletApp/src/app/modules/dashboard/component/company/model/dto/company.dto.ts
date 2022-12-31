// exemple recopier les props du fichier Company.java
import {EmployeeDto} from '../../../employee/model/dto/employee.dto';

export interface CompanyDto {
  companyId: string;
  title: string;
  description: string;
  employees: EmployeeDto[];
}
