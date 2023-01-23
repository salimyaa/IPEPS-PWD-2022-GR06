import {SpecificConfig} from './specific.config';
import {SpecificConfigImage} from "@shared/module/list-generic/model/specific.config.image";


export interface ListGenericConfig {
  tableCss?:string;
  fields: string[];
  data: any[];
  entityName?:string;
  entityUrl?:string;
  entityUrlCreate?:string;
  service?:string;
  callback?: Function;
  specificCSS?: SpecificConfig[];
  callRemove?: Function;
  specificIMG?: SpecificConfigImage[]
}
