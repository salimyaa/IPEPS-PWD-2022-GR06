import {Contract} from "../model/business/contract";
import {Employee} from "../../employee/model/business/employee";
import {EmployeeHelper} from "../../employee/helper/employee.helper";
import {ContractDto} from "../model/dto/contract.dto";

export class ContractHelper{


  public static getEmpty():Contract{
    return {id:'',
      title:'',
      description:'',
      start_date:'',
      end_date:'',
      nb_hours_by_week:0,
      status_code:'',
      employee:EmployeeHelper.getEmpty()}
  }

  public static fromDto(contractDto:ContractDto):Contract
  {
    return {
      id:contractDto.contract_id,
      title:contractDto.title,
      description:contractDto.description,
      start_date:contractDto.start_date,
      end_date:contractDto.end_date,
      nb_hours_by_week:contractDto.nb_hours_by_week,
      employee:contractDto.employee,
      status_code:''
    } as Contract;
  }

  public static toDto(contract:Contract):ContractDto
  {
    return{
      contract_id:contract.id,
      title:contract.title,
      description:contract.description,
      start_date:contract.start_date,
      end_date:contract.end_date,
      nb_hours_by_week:contract.nb_hours_by_week,
      employee:contract.employee
    } as ContractDto

  }

}
