import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
import {ShareService} from '../service/share.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  currentUser: string;
  nameEmployee: string;
  role: string;
  isLoggedIn = false;
  idAccount: number;
  listCart: any;
  length: number;

  constructor(private tokenStorageService: TokenStorageService,
              private cartService: CartService,
              private shareService: ShareService,
              private router: Router) {
    this.cartService.showAllCart(this.tokenStorageService.getUser().idAccount).subscribe(data => {
      {
        this.listCart = data;
        this.length = this.listCart?.length;
      }
    });

  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser();
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().nameUser;
      this.idAccount = this.tokenStorageService.getUser().idAccount;
    }
    this.isLoggedIn = this.username != null;
  }


  ngOnInit(): void {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
    this.loadHeader();
  }

  async logOut() {
    this.tokenStorageService.signOut();
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

  // getUsernameAccount() {
  //   if (this.tokenStorageService.getToken()) {
  //     this.nameEmployee = this.tokenStorageService.getUser().username;
  //   }
  // }
  @Input() searchInput: string = '';


  scrollToTopLogin() {
    window.scroll(0, 0);
  }

  onSearch() {
    this.router.navigate(['/search'], {queryParams: {'name': this.searchInput}});
  }
}
