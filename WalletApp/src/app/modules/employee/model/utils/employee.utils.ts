import {EmployeeCreatePayload} from "../payload/EmployeeCreatePayload.interface";


export class employeeUtils {


  public static CreateEmployeeEmptyPayload():  EmployeeCreatePayload  {

  return {
    Lastname : '',
    Firstname  : '',
    Address : '',
    Gender: '' ,
    Birthday : '',
    Ssin : '',
    status : 0,
    //company :CompanyHelper.getEmpty(),
    active : false,
    picture : ''};

}
}
