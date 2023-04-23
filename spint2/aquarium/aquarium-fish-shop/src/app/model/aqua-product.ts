import {AquaType} from './aqua-type';

export interface AquaProduct {
  id:number;
  image:string;
  name:string;
  price:number;
  description:string;
  dateSubmit:string;
  aquaType:AquaType;
}
