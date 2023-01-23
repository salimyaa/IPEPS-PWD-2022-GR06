import {CompanyDto} from '../model/dto/company.dto';
import {Company} from '../model/business/company';
import {isNil} from "lodash";

import {FormControl, FormGroup} from "@angular/forms";

export class CompanyHelper {
  public static fromDto(dto: CompanyDto): Company {
    if(isNil(dto)) {
      return CompanyHelper.getEmpty();
    }
    return {
      id: dto.company_id,
      title: dto.title,
      description: dto.description,
      address:dto.address,
      isEmpty: false,

    }
  }

  public static toDto(business: Company): CompanyDto {
    return {
      Active: false, is_managed: "",
      company_id: business.id,
      title: business.title,
      description: business.description,
      address:business.address

    }
  }

  public static getEmpty(): Company {
    return {
      id: '',
      title: '',
      description: '',
      address:'',
      isEmpty: true,
      //employees: []
    }
  }

  static convertToUpdateForm(company: Company): FormGroup {
    return new FormGroup({
      title: new FormControl(company.title),
      description: new FormControl(company.description),
      address: new FormControl(company.address),

    });
  }
}
