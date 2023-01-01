import {IsEmpty} from '../../../../shared/model/is-empty.interface';
import {Employee} from '../../../employee/model/business/employee';

export interface Company extends IsEmpty {
  id: string,
  title: string,
  description: string,
  employees: Employee[]
}
