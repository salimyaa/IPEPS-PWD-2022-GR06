import {CompanyDto} from '../model/dto/company.dto';
import {Company} from '../model/business/company';
import {isNil} from "lodash";

export class CompanyHelper {
  public static fromDto(dto: CompanyDto): Company {
    if(isNil(dto)) {
      return CompanyHelper.getEmpty();
    }
    return {
      id: dto.companyId,
      title: dto.title,
      description: dto.description,
      address:dto.address,
      isEmpty: false,

    }
  }

  public static toDto(business: Company): CompanyDto {
    return {
      Active: false, is_managed: "",
      companyId: business.id,
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
}
