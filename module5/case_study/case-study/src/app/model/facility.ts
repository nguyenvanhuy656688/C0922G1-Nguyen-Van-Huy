import {RentType} from "./rent-type";
import {FacilityType} from "./facility-type";

export interface Facility {
  id?: number;
  name?: string;
  area?: string;
  image?: string
  cost?: string;
  maxPeople?: number;
  standardRoom?:number;
  rentType?: RentType;
  facilityType?: FacilityType;
  descriptionOfOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  attachFacility?: string;
}
