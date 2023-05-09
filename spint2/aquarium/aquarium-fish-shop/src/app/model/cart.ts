import {Accounts} from './accounts';
import {AquaProduct} from './aqua-product';

export interface Cart {
  id:number;
  quantity:number;
  size:string;
  accounts:Accounts;
  aquaProduct:AquaProduct;
}
