import {PositionAndEmployee} from './position-and-employee';

export interface InfoLocation {
  id?:number;
  name?:string;
  openDate?:string;
  address?:string;
  positionAndEmployee?:PositionAndEmployee;
}
