import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AquaProductService} from '../../../service/aqua-product.service';
import {AquaProduct} from '../../../model/aqua-product';
import {AccompanyingImage} from '../../../model/accompanying-image';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @ViewChild('imgShowcase', { static: true })
  imgShowcase!: ElementRef<HTMLDivElement>;
  infoProduct:AquaProduct ;

  imgId = 1;
  accompanyingImgList: AccompanyingImage[] = [];
  accompanyingImgListDisplay: AccompanyingImage[] = [];

  constructor(private activatedRoute: ActivatedRoute,private aquaProductService:AquaProductService) {}

  ngOnInit(): void {
    this.view()
    this.getId()
    this.slideImage();
  }

  selectImage(id: number): void {
    this.imgId = id;
    this.slideImage();
  }

  slideImage(): void {
    const displayWidth = this.imgShowcase.nativeElement.querySelector('img').clientWidth;
    this.imgShowcase.nativeElement.style.transform = `translateX(${- (this.imgId - 1) * displayWidth}px)`;
  }

  view(): void {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.slideImage();
  }

  private getId() {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getDetailById(+id)
      }
    })
  }

  private getDetailById(id: number) {
    this.aquaProductService.findProductById(id).subscribe(data => {
      this.infoProduct = data
      this.getAccompanyingImage(id)
    })
  }

  private getAccompanyingImage(id:number) {
    this.aquaProductService.getAccompanyingImage(id).subscribe(data =>{
      this.accompanyingImgList = data
      this.accompanyingImgListDisplay = data
    })
  }
}
