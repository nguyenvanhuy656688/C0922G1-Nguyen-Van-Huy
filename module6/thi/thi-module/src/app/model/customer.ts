import {InfoLocation} from './info-location';

export interface Customer {
  id?:number;
  code?:string;
  name?:string;
  idCard?:string;
  dateOfBirth?:string;
  gender?:boolean;
  effectiveDate?:string;
  expiryDate?:string;
  infoLocation?: InfoLocation;
}
