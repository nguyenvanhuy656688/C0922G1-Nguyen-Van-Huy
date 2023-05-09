import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AquaProductService} from '../../../service/aqua-product.service';
import {AquaProduct} from '../../../model/aqua-product';
import {AccompanyingImage} from '../../../model/accompanying-image';
import Swal from 'sweetalert2';
import {CartService} from '../../../service/cart.service';
import {ShareService} from '../../../service/share.service';
import {TokenStorageService} from '../../../service/token-storage.service';
import {LoginService} from '../../../service/login.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @ViewChild('imgShowcase', { static: true })
  imgShowcase!: ElementRef<HTMLDivElement>;
  infoProduct:AquaProduct ;
  isLogged:boolean = false
  size:string ='Một ngón'
  imgId = 1;
  accompanyingImgList: AccompanyingImage[] = [];
  accompanyingImgListDisplay: AccompanyingImage[] = [];
  user:any
  role:any

  constructor(private activatedRoute: ActivatedRoute,
              private aquaProductService:AquaProductService,
              private cartService:CartService,
              private shareService:ShareService,
              private token:TokenStorageService,
              private router:Router,
              private loginService:LoginService) {}

  ngOnInit(): void {
    this.view()
    this.getId()
    this.slideImage();
    if (this.token.getUser().idAccount != null){
      this.isLogged = true
    }
    this.shareService.getClickEvent().subscribe(next => {
      this.loader();
    })
  }

  loader() {
    if (this.isLogged) {
      this.loginService.profile(this.token.getUser().idAccount).subscribe( next => {
        this.user = next
      })
      this.role = this.token.getUser().roles;
    }
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

  addCart(id: number,value:string) {
    const quantity = parseInt(value)
    if(this.isLogged==true){
      Swal.fire({
        title: 'Bạn bạn hiện tại chưa đăng nhập',
        text: 'Bạn có muốn vào trang đăng nhập không?' ,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#0099FF',
        cancelButtonColor: '#BBBBBB',
        confirmButtonText: 'Đăng nhập',
        cancelButtonText: 'Không'
      }).then((result) => {
        if (result.isConfirmed) {
          this.shareService.sendClickEvent()
          this.router.navigateByUrl('/login')
          this.ngOnInit()
        }
      });
    }else {
      this.cartService.addCart(this.token.getUser().idAccount,id,quantity,this.size).subscribe(next=>{
        debugger
        Swal.fire({
          position: 'center',
          title: 'Đã thêm vào giỏ hàng thành công',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        });
        this.shareService.sendClickEvent()
      }, error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Thêm mới thất bại!',
          text: 'Thêm mới thất bại',
          showConfirmButton: false,
          timer: 2000
        });
      })
    }

  }

  setSize(value: string) {
    this.size = value
  }
}
