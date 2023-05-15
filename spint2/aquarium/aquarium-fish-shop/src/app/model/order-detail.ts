import {OrderProduct} from './order-product';
import {AquaProduct} from './aqua-product';

export interface OrderDetail {
  id:number;
  total:number;
  size:string;
  amount:number;
  orderProduct:OrderProduct;
  aquaProduct:AquaProduct;
}
