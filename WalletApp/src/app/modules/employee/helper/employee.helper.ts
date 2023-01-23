import {EmployeeDto} from '../model/dto/employee.dto';
import {Employee} from '../model/business/employee';
import {CompanyHelper} from "../../company/helper/company.helper";
import {SpecificConfigImage} from "@shared/module/list-generic/model/specific.config.image";
import {CssForValue} from "@shared/module/list-generic/model/css-for-value.config";
import {isNil} from "lodash";
import {FormControl, FormGroup} from "@angular/forms";

export class EmployeeHelper {
  public static getImageConfig(employee:Employee):SpecificConfigImage{
   const src = (isNil(employee.picture))? employee.picture : (employee.gender === 'male')? 'url de ta photo male': 'url de ta pjoto femme';
    return {
      src: src,
      cssConfig: []
    }
  }
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
  static convertToUpdateForm(employee: Employee): FormGroup {
    return new FormGroup({
      firstname: new FormControl(employee.firstname),
        lastname: new FormControl(employee.lastname),
        status: new FormControl(employee.status),
        city: new FormControl(employee.city),
        address: new FormControl(employee.address),
        phone: new FormControl(employee.phone),
        email: new FormControl(employee.email),
        birthday: new FormControl(employee.birthday),
        gender: new FormControl(employee.gender),
        ssin: new FormControl(employee.ssin),
        //company: new FormControl(employee.company),
      //  active: new FormControl(employee.active),
    });
  }
}
