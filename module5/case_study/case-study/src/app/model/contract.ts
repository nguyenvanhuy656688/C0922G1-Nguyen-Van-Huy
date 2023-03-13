import {Customer} from "./customer";
import {Facility} from "./facility";

export interface Contract {
  id?: number,
  startDay?: string,
  endDay?: string,
  cost: string,
  customer: Customer,
  facility: Facility
}
