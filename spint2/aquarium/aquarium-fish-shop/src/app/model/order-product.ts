import {Accounts} from './accounts';


export interface OrderProduct {
  id:number;
  dateOrder:string;
  accounts:Accounts
  total:number
  code:string
}
