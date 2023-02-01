// code ajouter pour faire fonctionner les entités de salim

import {Employee} from "./employee";
import {Company} from "../../../company/model/business/company";

export class EmployeeClass implements Employee{
  address: string;
  birthday: string;
  city: string;
  company: Company;
  email: string;
  firstname: string;
  gender: string;
  id: string;
  lastname: string;
  phone: string;
  picture: string;
  ssin: string;
  status: string;
  constructor(
    address: string,
    birthday: string,
    city: string,
    company: Company,
    email: string,
    firstname: string,
    gender: string,
    id: string,
    lastname: string,
    phone: string,
    picture: string,
    ssin: string,
    status: string
  ) {
    this.address = address;
    this.birthday = birthday;
    this.city = city;
    this.company = company;
    this.email = email;
    this.firstname = firstname;
    this.gender = gender;
    this.id = id;
    this.lastname = lastname;
    this.phone = phone;
    this.picture = picture;
    this.ssin = ssin;
    this.status = status;
  }
  toString():string {
    return this.firstname+' '+this.lastname;
  }


}
