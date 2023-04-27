import {AquaProduct} from './aqua-product';

export interface AccompanyingImage {
  id?: number;
  name?:string;
  image?:string;
  aquaProduct:AquaProduct;
}
