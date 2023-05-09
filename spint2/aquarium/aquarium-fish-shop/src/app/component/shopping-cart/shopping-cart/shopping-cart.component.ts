import {Component, OnInit} from '@angular/core';
import {Accounts} from '../../../model/accounts';
import {AquaProduct} from '../../../model/aqua-product';
import {Cart} from '../../../model/cart';
import {TokenStorageService} from '../../../service/token-storage.service';
import {ShareService} from '../../../service/share.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../service/login.service';
import {CartService} from '../../../service/cart.service';
import Swal from 'sweetalert2';
import {OrderProductService} from '../../../service/order-product.service';
import {render} from 'creditcardpayments/creditCardPayments';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  user: Accounts;
  quantity = 0;
  total = 0;
  isLogged = false;
  isPaypal = false;
  cart: Cart[] = [];
  select: any = 'Một ngón';

  constructor(private token: TokenStorageService,
              private cartService: CartService,
              private orderProductService: OrderProductService,
              private loginService: LoginService,
              private shareService: ShareService, private router: Router) {
    this.getCart();
    this.shareService.getClickEvent().subscribe(next => {
      this.getCart();
    });

  }

  ngOnInit(): void {

    this.isLogged = this.token.isLogger();
    // this.loader();
    this.shareService.getClickEvent().subscribe(next => {
      this.isLogged = this.token.isLogger();
      // this.loader();
      this.getCart();
    });
    if (!this.token.isLogger()) {
      this.router.navigateByUrl('/home');
    } else {
      this.getValue(this.select);
    }
  }

  loader() {
    if (this.isLogged) {
      this.loginService.profile(this.token.getUser().idAccount).subscribe(next => {
        this.user = next;
      });
    }
  }

  paypal() {
    this.isPaypal = true;
    let money = +((this.total + 20000) / 23485.5).toFixed(2);
    render({
      currency: 'USD',
      id: '#paypal',
      value: String(money),
      onApprove: (details) => {
        this.addBill();
        this.shareService.getClickEvent();
      }
    });
  }


  getCart() {
    this.cartService.showAllCart(this.token.getUser().idAccount).subscribe(next => {
      this.cart = next;
      this.getValue(this.select);
    });
  }

  addBill() {
    let currentTime = new Date();
    let formatTime = currentTime.toLocaleString();
    this.orderProductService.addBill(this.token.getId(), this.total, formatTime).subscribe(next => {
      Swal.fire({
        position: 'center',
        title: 'Đã thanh toán thành công',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      });
      this.cart = [];
      this.loader();
      this.shareService.sendClickEvent();
    }, error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Thanh toán thất bại!',
        text: 'Thanh toán thất bại',
        showConfirmButton: false,
        timer: 2000
      });
    });

  }

  getValue(size: string) {
    this.total = 20000;
    if (this.cart != null) {
      this.quantity = this.cart.length;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].size == 'Một ngón' || size == 'Một ngón') {
          this.total += this.cart[i].aquaProduct.price * this.cart[i].quantity;
        }
        if (this.cart[i].size == 'Hai ngón' || size == 'Hai ngón') {
          this.total += this.cart[i].aquaProduct.price * this.cart[i].quantity + 100000 ;
        }
        if (this.cart[i].size == 'Ba ngón' || size == 'Ba ngón') {
          this.total += this.cart[i].aquaProduct.price * this.cart[i].quantity + 250000 ;
        }
        if (this.cart[i].size == 'Bốn ngón' || size == 'Bốn ngón') {
          this.total += this.cart[i].aquaProduct.price * this.cart[i].quantity + 500000 ;
        }
        if (this.cart[i].size == 'Bàn tay' || size == 'Bàn tay') {
          this.total += this.cart[i].aquaProduct.price * this.cart[i].quantity + 800000 ;
        }
      }
    }
  }

  stepUp(aquaProductId: number, size: string) {
    this.cartService.increaseQuantity(this.token.getUser().idAccount, aquaProductId, size).subscribe(next => {
      this.shareService.sendClickEvent();
      this.getCart();
      this.getValue(size);
    });
  }

  stepDown(aquaProductId: number, size: string) {
    this.cartService.reduceQuantity(this.token.getUser().idAccount, aquaProductId, size).subscribe(next => {
      this.shareService.sendClickEvent();
      this.getCart();
      this.getValue(size);
    });
  }

  delete(id: number, name: string, size: string) {
    Swal.fire({
      title: 'Bạn có muốn xóa Khỏi giỏ hàng?',
      text: 'sản phẩm: ' + name,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#BBBBBB',
      confirmButtonText: 'Có',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.delete(id).subscribe(() => {
          debugger
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa ' + name + ' size ' + size + ' thành công!',
            showConfirmButton: false,
            timer: 1500
          });
          this.shareService.sendClickEvent();
          this.getCart();
          this.cart = [];
          this.getValue(size);
        }, error => {
          console.log(error);
        });
      }
    });
  }

  setSize(size: string, cart: number, aquaProductId: number, name: string) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].size == size && this.cart[i].aquaProduct.id == aquaProductId && this.cart[i].accounts.id == this.token.getUser().idAccount) {
        Swal.fire({
          title: 'đã có size này rồi!',
          text: 'Mặt hàng: ' + '"' + name + '"' + ' đã có size: ' + '"' + size + '"' + ' rồi nhé!',
          html: '<img src="' + this.cart[i].aquaProduct.image + '" style="width:200px; height: 110px">',
          cancelButtonColor: '#0099FF',
          cancelButtonText: 'Đã hiểu'
        });
        this.getCart();
        this.getValue(size);
        return;
      }
    }
    this.cartService.editCart(size, cart, aquaProductId, this.token.getUser().idAccount).subscribe(next => {
      this.getCart();
      this.getValue(size);
    });
    this.shareService.sendClickEvent()
  }

}
