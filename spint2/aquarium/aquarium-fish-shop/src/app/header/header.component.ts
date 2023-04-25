import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
import {ShareService} from '../service/share.service';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

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

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private router: Router) {
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser();
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().nameUser;
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
      iconColor: "#ffc246",
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


  scrollToTopLogin() {
    window.scroll(0, 0);
  }

}
