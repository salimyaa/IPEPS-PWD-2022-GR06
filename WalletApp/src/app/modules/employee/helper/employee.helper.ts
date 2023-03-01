import {EmployeeDto} from '../model/dto/employee.dto';
import {Employee} from '../model/business/employee';
import {CompanyHelper} from "../../company/helper/company.helper";
import {EmployeeClass} from "../model/business/employeeClass";

export class EmployeeHelper {

  public static fromDto(dto: EmployeeDto): Employee {
    return {firstname: dto.firstname,
            id: dto.employee_id,
            lastname: dto.lastname,
            status:dto.status,
            company: CompanyHelper.fromDto(dto.company),
            address:dto.address,
            birthday : dto.birthday,
            gender : dto.gender,
            ssin : dto.ssin,
            email:dto.email,
            phone:dto.phone,
            city:dto.city,
            picture: dto.picture}
  }

  public static toDto(dto: Employee): EmployeeDto {
    return {firstname: dto.firstname, employee_id: dto.id, lastname: dto.lastname, status:dto.status,
      company: CompanyHelper.toDto(dto.company),address:dto.address,birthday : dto.birthday,
      gender : dto.gender,
      ssin : dto.ssin,email:dto.email,
      phone:dto.phone,
      city:dto.city,picture: dto.picture}
  }

  static getEmpty():Employee {
    return {firstname: '', id: '', lastname: '', status:'',company:CompanyHelper.getEmpty(), address:'',birthday : '',
      gender : '',
      ssin : '' ,email:'',
      phone:'',
      city:'',picture:''};
  }
  static interfactoToClass(inter:Employee)
  {
    return new EmployeeClass(inter.address,inter.birthday,inter.city,inter.company,inter.email,
      inter.firstname,inter.gender,inter.id,inter.lastname,inter.phone,inter.picture,inter.ssin,inter.status)
  }
  public static classToInterface(empl:EmployeeClass):Employee
  { return {address:empl.address,birthday:empl.birthday,city:empl.city,company:empl.company,email:empl.email,firstname:empl.firstname,
    lastname:empl.lastname,gender:empl.gender,id:empl.id,phone:empl.phone,picture:empl.picture,ssin:empl.ssin,status:empl.status}
  }
  static getEmptyClass():EmployeeClass
{
  return new EmployeeClass('','','',CompanyHelper.getEmpty(),'','','','','','','','','');
}
}
