import {SpecificConfig} from './specific.config';

export interface ListGenericConfig {
  tableCss?:string;
  fields: string[];
  data: any[];
  callback?: Function;
  specificCSS?: SpecificConfig[]
}
