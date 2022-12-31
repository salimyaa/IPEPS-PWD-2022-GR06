import {CompanyDto} from '../model/dto/company.dto';
import {Company} from '../model/business/company';
import {EmployeeDto} from '../../employee/model/dto/employee.dto';
import {EmployeeHelper} from '../../employee/helper/employee.helper';
import {Employee} from '../../employee/model/business/employee';

export class CompanyHelper {
  public static fromDto(dto: CompanyDto): Company {
    return {
      id: dto.companyId,
      title: dto.title,
      description: dto.description,
      isEmpty: false,
      employees: dto.employees.map((employee: EmployeeDto) => EmployeeHelper.fromDto(employee))
    }
  }

  public static toDto(business: Company): CompanyDto {
    return {
      companyId: business.id,
      title: business.title,
      description: business.description,
      employees: business.employees.map((employee: Employee) => EmployeeHelper.toDto(employee))
    }
  }

  public static getEmpty(): Company {
    return {
      id: '',
      title: '',
      description: '',
      isEmpty: true,
      employees: []
    }
  }
}
