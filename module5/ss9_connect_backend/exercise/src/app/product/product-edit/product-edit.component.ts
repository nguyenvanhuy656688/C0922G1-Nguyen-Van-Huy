import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categoryList: Category[] = [];
  reactiveForm: FormGroup;
  product:Product

  constructor(private productService:ProductService,private categoryService: CategoryService, private activatedRoute:ActivatedRoute) {
    this.reactiveForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    })
    this.activatedRoute.paramMap.subscribe(data =>{
      const id  = data.get('id')
      this.getProduct(+id)
    })
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categoryList = data
    })
  }

  private getProduct(id: number) {
    return this.productService.findById(id).subscribe(data=>{
      this.reactiveForm.patchValue(data)
    })

  }

  edit() {
    this.product = this.reactiveForm.value
    let temp = this.productService.edit(this.product.id , this.product).subscribe(data => {
      if (temp != null) {
        alert('sửa thành công')
      } else alert(' không thành công')
    })
  }
}
