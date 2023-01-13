import {Contract} from "./model/business/contract";
import {Employee} from "../employee/model/business/employee";
import {EmployeeHelper} from "../employee/helper/employee.helper";
import {ContractDto} from "./model/dto/contract.dto";

export class ContractHelper{


  public static getEmpty():Contract{
    return {id:'',
      title:'',
      description:'',
      start_date:'',
      end_date:'',
      nb_hours_by_week:0,
      employee:EmployeeHelper.getEmpty()}
  }
}
