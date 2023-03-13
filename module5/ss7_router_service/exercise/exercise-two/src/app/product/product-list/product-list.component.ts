import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  removeProduct: Product = {};


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productList = this.productService.getAll();
    console.log(this.productList);
  }

  deleteById() {
    this.productService.deleteProduct(this.removeProduct.id)
  }
}
