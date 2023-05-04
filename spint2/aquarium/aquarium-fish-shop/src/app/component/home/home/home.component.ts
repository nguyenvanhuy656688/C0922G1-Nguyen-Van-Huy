import {Component, Inject, OnDestroy, OnInit, Output, EventEmitter, Input, HostListener} from '@angular/core';
import {DOCUMENT, ViewportScroller} from '@angular/common';
import {AquaProduct} from '../../../model/aqua-product';
import {AquaProductService} from '../../../service/aqua-product.service';
import {templateJitUrl} from '@angular/compiler';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  @Input() searchQuery: string = '';

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
  previews:any = [];
  previewContainer: HTMLElement;
  previewBox: NodeListOf<HTMLElement>;

  constructor(@Inject(DOCUMENT) private document: any,
              private router:Router,
              private viewportScroller: ViewportScroller,
              private aquaProductService:AquaProductService) {
    this.productList2.forEach(() => {
      this.previews.push(false);
    });
  }

  ngOnInit(): void {
    this.loadListFish()
    this.loadListAquatic()
    this.loadListFood()
  }
  ngOnDestroy(): void {

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

  reset1() {
    this.loadListAquatic()
  }

  reset2() {
    this.loadListFood()
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



  onSearch() {
    // this.searchQueryChange.emit(this.searchQuery);
    this.router.navigate(['/search'],{queryParams: {'name': this.searchQuery } })
  }

  showPreview(index:number) {
    this.previewContainer = document.querySelector('.products-preview') as HTMLElement;
    this.previewBox = this.previewContainer.querySelectorAll('.preview');

    this.previewBox.forEach(preview => {
      preview.classList.remove('active');
    });

    this.previews.forEach(i => {
      if (i === index) {
        this.previews[i] = true;
        this.previewBox[i].classList.add('active');
        this.previewContainer.style.display = 'flex';
      } else {
        this.previews[i] = false;
      }
    });

  }
  closePreview() {
    this.previewBox.forEach(preview => {
      preview.classList.remove('active');
    });

    this.previews.forEach((preview, i) => {
      this.previews[i] = false;
    });

    this.previewContainer.style.display = 'none';
  }
}
