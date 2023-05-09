import {Component, OnInit} from '@angular/core';
import {AquaProductService} from '../../../service/aqua-product.service';
import {AquaProduct} from '../../../model/aqua-product';
import {ActivatedRoute} from '@angular/router';
import {AquaType} from '../../../model/aqua-type';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {

  listSearchResults: AquaProduct[] = [];
  keyword: string;
  hasMore = false;
  page = 0;
  size = 6;
  hiddenSt: boolean = false;
  aquaTypeList: AquaType[] = [];
  noFind: boolean = false;
  page1 = 0;
  size1 = 3;
  hasMore1 = false;
  change: boolean = false;
  chooseSt:boolean = false


  constructor(private aquaProductService: AquaProductService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadAquaType();
    this.activatedRoute.queryParams.subscribe(params => {
      this.keyword = params['name'];
      this.loadAllSearch();
    });
  }

  loadMore() {
    this.page++;
    this.aquaProductService.getListSearchResults(this.page, this.size, this.keyword).subscribe(products => {
      this.listSearchResults.push(...products);
      this.hasMore = products.length === this.size;
    });
  }

  private loadAllSearch() {
    this.page = 0;
    this.aquaProductService.getListSearchResults(this.page, this.size, this.keyword).subscribe(products => {
      this.listSearchResults = products;
      this.hasMore = products.length === this.size;
      if (this.listSearchResults.length === 0) {
        this.noFind = true;
      }
      if (this.listSearchResults.length !== 0){
        this.noFind = false
      }
    });
  }

  reset() {
    this.loadAllSearch();
  }


  private loadAquaType() {
    this.aquaProductService.getAquaTypeList().subscribe(data => {
      this.aquaTypeList = data;
    });
  }

  hiddenStt() {
    this.hiddenSt = true;
  }

  selectedOption: any = 0;


  loadMore1() {
    this.page1++;
    this.aquaProductService.changeListForOption(this.page1, this.size1, this.keyword, this.selectedOption).subscribe(products => {
      this.listSearchResults.push(...products);
      this.hasMore1 = products.length === this.size1;
    });
  }

  changeListForOptionList() {
    this.change = true;
    this.page1 = 0;
    this.aquaProductService.changeListForOption(this.page1, this.size1, this.keyword, this.selectedOption).subscribe(products => {
      this.listSearchResults = products;
      this.hasMore1 = products.length === this.size1;
      if (this.listSearchResults.length === 0) {
        this.noFind = true;
      }
      if (this.listSearchResults.length !== 0){
        this.noFind = false
      }
    });
  }

  reset1() {
    this.changeListForOptionList();
  }

  choose() {
    this.chooseSt = true
  }
}
