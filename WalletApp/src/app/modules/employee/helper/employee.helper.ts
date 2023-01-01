import {EmployeeDto} from '../model/dto/employee.dto';
import {Employee} from '../model/business/employee';
import {EmployeeStatus} from "../model/enum/EmployeeStatus";

export class EmployeeHelper {
  public static fromDto(dto: EmployeeDto): Employee {
    return {firstname: dto.firstname, id: dto.employee_id, lastname: dto.lastname, status:dto.status}
  }

  public static toDto(dto: Employee): EmployeeDto {
    return {firstname: dto.firstname, employee_id: dto.id, lastname: dto.lastname, status:dto.status}
  }

  static getEmpty():Employee {
    return {firstname: '', id: '', lastname: '', status:''};
  }
}
