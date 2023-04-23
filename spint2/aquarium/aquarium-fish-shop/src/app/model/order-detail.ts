import {OrderProduct} from './order-product';
import {AquaProduct} from './aqua-product';

export interface OrderDetail {
  id:number;
  amount:number;
  orderProduct:OrderProduct;
  aquaProduct:AquaProduct;
}
