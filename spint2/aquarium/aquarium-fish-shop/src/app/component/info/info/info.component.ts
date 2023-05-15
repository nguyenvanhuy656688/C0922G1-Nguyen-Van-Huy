import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../../service/info.service';
import {AquaProduct} from '../../../model/aqua-product';
import {TokenStorageService} from '../../../service/token-storage.service';
import {Accounts} from '../../../model/accounts';
import {OrderProduct} from '../../../model/order-product';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderDetail} from '../../../model/order-detail';
import Swal from "sweetalert2";
import {ShareService} from '../../../service/share.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  teamPage: any = null;
  info:Accounts
  orderList: OrderProduct[] = [];
  orderDetailList:OrderDetail[]=[]
  totalPage: number = 0;
  size: number = 0;
  search: string = '';
  p: number = 0;
  pages: number[] = [];
  status:boolean = false
  private infoBill: OrderProduct;
  constructor(private shareService:ShareService,
              private infoService:InfoService,
              private token:TokenStorageService,
              private router:Router) { }

  ngOnInit(): void {

    this.infoService.getInfo(this.token.getUser().idAccount).subscribe(data=>{
      this.info = data
    })
    this.loadOrders(this.p)
    this.createPageList();
  }



// Hàm để tạo danh sách các trang
  private createPageList() {
    this.pages = [];
    if (this.totalPage > 0 && this.orderList.length > 0) { // chỉ hiển thị phân trang nếu có nhiều hơn 1 trang và có kết quả tìm kiếm
      const start = Math.max(this.p - 2, 0);
      const end = Math.min(start + 4, this.totalPage - 1);
      for (let i = start; i <= end; i++) {
        this.pages.push(i);
      }
    } else {
      this.pages.push(0); // nếu không hiển thị phân trang thì chỉ có nút button ở trang 1
    }
  }

  // Hàm để lấy dữ liệu khi chuyển sang trang mới
  value: string = 'yes';

  private goToPageInternal(page: number) {
    this.p = page;
    this.loadOrders(this.p);
    this.createPageList();
  }

  loadOrders(page: number) {
    this.infoService.getAllOrderProductDto(this.token.getUser().idAccount, page).subscribe(data => {
      this.teamPage = data;
      this.orderList = data['content'];
      this.totalPage = data['totalPages'];
      this.p = data['number'];
      this.size = data['size'];

    });
    this.createPageList();
  }

  previousPage() {
    if (this.p > 0) {
      this.goToPageInternal(this.p - 1);
    }
  }

  nextPage() {
    if (this.p < this.totalPage - 1) {
      this.goToPageInternal(this.p + 1);
    }
  }

  goToPage(page: number) {
    this.p = page;
    this.goToPageInternal(page);
    // Do something to load data for the new page
  }


  changeStatus(id:number) {
    this.status = true
    this.infoService.findBillById(id).subscribe(data=>{
      debugger
      this.orderDetailList = data
    })
  }

  changeStatusToFalse() {
    this.status = false
  }

  async logOut() {
    this.token.signOut();
    this.shareService.sendClickEvent();
    await Swal.fire({
      text: 'Đã đăng xuất',
      icon: 'success',
      iconColor: '#ffc246',
      confirmButtonText: 'OK',
      confirmButtonColor: '#ffc246',
      // showConfirmButton: false,
      timer: 2500
    });
    await this.router.navigateByUrl('/');
    location.reload();
  }
}
