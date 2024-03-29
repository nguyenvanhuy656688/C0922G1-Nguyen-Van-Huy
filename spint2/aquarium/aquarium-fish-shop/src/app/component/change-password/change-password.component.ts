import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from "sweetalert2";
import {LoginService} from '../../service/login.service';
import {ShareService} from '../../service/share.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../service/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  formChangePassword: FormGroup;
  username: string;
  newPasswordError: '';
  confirmNewPasswordError: '';
  findAccountError: '';
  passwordError: '';

  constructor(private tokenStorageService: TokenStorageService,
              private loginService: LoginService,
              private router: Router,
              private shareService: ShareService) {
  }

  ngOnInit(): void {
    this.view();
    debugger
    if (this.tokenStorageService.getToken()) {
      this.username = this.tokenStorageService.getUser().username;
      this.formChangePassword = new FormGroup({
        username: new FormControl(this.username),
        password: new FormControl(),
        newPassword: new FormControl(),
        confirmNewPassword: new FormControl()
      });
    } else {
      this.errorAuth();
    }
  }

  view(): void {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView();
    }
  }

  errorAuth() {
    Swal.fire({
      text: 'Bạn cần phải đăng nhập!',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
    this.router.navigateByUrl('/login');
  }


  onSubmit() {
    debugger
    this.loginService.changePassword(this.formChangePassword.value).subscribe(() => {
      Swal.fire({
        text: 'Đổi mật khẩu thành công',
        icon: 'success',
        iconColor: "#ffc246",
        confirmButtonText: 'OK',
        confirmButtonColor: '#ffc246',
        // showConfirmButton: false,
        timer: 2500
      });
      this.shareService.sendClickEvent();
      this.router.navigateByUrl('/');
    }, error => {
      this.newPasswordError = '';
      this.confirmNewPasswordError = '';
      this.findAccountError = '';
      this.passwordError = '';
      // this.message = error.error.message;
      Swal.fire({
        text: 'Đổi mật khẩu không thành công',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < error.error.length; i++) {
        if (error.error[i].field === 'newPassword') {
          this.newPasswordError = error.error[i].defaultMessage;
        } else if (error.error[i].field === 'confirmNewPassword') {
          this.confirmNewPasswordError = error.error[i].defaultMessage;
        } else if (error.error[i].field === 'findAccount') {
          this.findAccountError = error.error[i].defaultMessage;
        } else if (error.error[i].field === 'password') {
          this.passwordError = error.error[i].defaultMessage;
        }
      }

    });

  }
}
