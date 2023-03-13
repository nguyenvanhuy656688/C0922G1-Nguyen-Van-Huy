import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;

  constructor(private productService:ProductService,private router:Router) {
    this.productForm = new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl()
      })
  }

  ngOnInit(): void {
  }

  submit(id: string) {
    const product = this.productForm.value;
    this.productService.editProductById(parseInt(id), product);
    this.router.navigateByUrl('/product/list');
  }
}
