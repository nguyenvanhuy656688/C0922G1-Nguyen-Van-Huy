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
  private displayedCount: number;
  hiddenSt: boolean = false;
  aquaTypeList: AquaType[] = [];


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
      this.displayedCount += this.page;
    });
  }

  private loadAllSearch() {
    this.page = 0;
    this.aquaProductService.getListSearchResults(this.page, this.size, this.keyword).subscribe(products => {
      this.listSearchResults = products;
      this.hasMore = products.length === this.size;
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

  // changeListForOption(id: number) {
  //   debugger
  //   this.aquaProductService.changeListForOption(this.page,this.size,this.keyword,id).subscribe(data=>{
  //     this.listSearchResults = data
  //   })
  //
  // }
  selectedOption: any = 0;

  changeListForOption() {
    this.aquaProductService.changeListForOption(this.page, this.size, this.keyword, this.selectedOption)
      .subscribe(data => {

          this.listSearchResults = data;
        // this.listSearchResults = []

      });
  }
}
