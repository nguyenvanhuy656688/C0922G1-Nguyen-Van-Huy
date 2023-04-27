import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT, ViewportScroller} from '@angular/common';
import {AquaProduct} from '../../../model/aqua-product';
import {AquaProductService} from '../../../service/aqua-product.service';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  productList: AquaProduct[] = [];
  productList1: AquaProduct[] = [];
  productList2: AquaProduct[] = [];
  hasMore = false;
  page = 0;
  size = 3;
  hasMore1 = false;
  page1 = 0;
  size1 = 3;
  hasMore2 = false;
  page2 = 0;
  size2 = 3;
  displayedCount: number = 0;

  constructor(@Inject(DOCUMENT) private document: any, private viewportScroller: ViewportScroller, private aquaProductService:AquaProductService) { }

  ngOnInit(): void {
    this.loadListFish()
    this.loadListAquatic()
    this.loadListFood()
  }


  scrollToElement(elementId: string) {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Cannot find element with id: ${elementId}`);
    }
  }

  scrollToElement1(elementId: string) {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Cannot find element with id: ${elementId}`);
    }

  }

  scrollToElement2(elementId: string) {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Cannot find element with id: ${elementId}`);
    }
  }

  loadMore() {
    this.page++;
    this.aquaProductService.getProductFish(this.page, this.size).subscribe(products => {
      this.productList.push(...products);
      this.hasMore = products.length === this.size;
      this.displayedCount += this.page;
    });
  }

  private loadListFish() {
    this.page = 0;
    this.aquaProductService.getProductFish(this.page, this.size).subscribe(products => {
      this.productList = products;
      this.hasMore = products.length === this.size;
    });
  }

  reset() {
    this.loadListFish()
  }


  loadMore1() {
    this.page1++;
    this.aquaProductService.getProductAquatic(this.page1, this.size1).subscribe(products => {
      this.productList1.push(...products);
      this.hasMore1 = products.length === this.size1;
    });

  }

  private loadListAquatic() {
    this.page1 = 0;
    this.aquaProductService.getProductAquatic(this.page1, this.size1).subscribe(products => {
      this.productList1 = products;
      this.hasMore1 = products.length === this.size1;
    });
  }

  loadMore2() {
    this.page2++;
    this.aquaProductService.getProductFood(this.page2, this.size2).subscribe(products => {
      this.productList2.push(...products);
      this.hasMore2 = products.length === this.size2;
    });
  }

  private loadListFood() {
    this.page2 = 0;
    this.aquaProductService.getProductFood(this.page2, this.size2).subscribe(products => {
      this.productList2 = products;
      this.hasMore2 = products.length === this.size2;
    });

  }

  ngOnDestroy(): void {

  }


  reset1() {
    this.loadListAquatic()
  }

  reset2() {
    this.loadListFood()
  }
}
