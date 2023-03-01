import {Company} from "../../../company/model/business/company";

export interface Employee {
  id: string,
  firstname: string,
  lastname: string,
  status : string,
  company: Company,
  address: string,
  birthday : string,
  gender : string,
  ssin :string,
  email:string,
  phone:string,
  city:string,
  picture: string
}
