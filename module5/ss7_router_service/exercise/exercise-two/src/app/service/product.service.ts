import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }];

  constructor() {
  }


  getAll() {
    return this.products
  }

  deleteProduct(id: number) {
    const arr:Array<any> = []
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id !== id){
        let temp = this.products[i].id
        arr.push(temp)
        return this.products = arr
      }
    }
  }

  editProductById(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  saveProduct(product: Product) {
    return this.products.push(product)
  }
}
