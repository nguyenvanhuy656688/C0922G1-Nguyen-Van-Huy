import {Employee} from './employee';
import {Positions} from './positions';


export interface PositionAndEmployee {
  id?:number;
  employee?:Employee;
  position?:Positions

}
