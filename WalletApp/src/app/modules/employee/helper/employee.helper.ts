import {EmployeeDto} from '../model/dto/employee.dto';
import {Employee} from '../model/business/employee';
import {CompanyHelper} from "../../company/helper/company.helper";

export class EmployeeHelper {

  public static fromDto(dto: EmployeeDto): Employee {
    return {firstname: dto.firstname,
            id: dto.employee_id,
            lastname: dto.lastname,
            status:dto.status,
            company: CompanyHelper.fromDto(dto.company)}
  }

  public static toDto(dto: Employee): EmployeeDto {
    return {firstname: dto.firstname, employee_id: dto.id, lastname: dto.lastname, status:dto.status,
      company: CompanyHelper.toDto(dto.company)}
  }

  static getEmpty():Employee {
    return {firstname: '', id: '', lastname: '', status:'',company:CompanyHelper.getEmpty() };
  }
}
