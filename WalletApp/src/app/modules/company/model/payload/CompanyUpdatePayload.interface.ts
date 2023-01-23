import {PayloadInterface} from "@shared/model";

export interface CompanyUpdatePayload extends PayloadInterface {
  company_id: string;
  title: string;
  address: string;
  description: string;
}
