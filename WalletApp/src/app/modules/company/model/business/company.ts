import {IsEmpty} from '@shared/model/is-empty.interface';

export interface Company extends IsEmpty {
  id: string,
  title: string,
  description: string,
  address:string;


}
