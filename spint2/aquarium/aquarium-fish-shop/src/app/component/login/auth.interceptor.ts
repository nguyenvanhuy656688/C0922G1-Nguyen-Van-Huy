import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {TokenStorageService} from '../../service/token-storage.service';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authRequest = request;
    const token = this.tokenStorageService.getToken();

    if (authRequest.headers.has(InterceptorSkipHeader)) {
      const headers = request.headers.delete(InterceptorSkipHeader);
      return next.handle(authRequest.clone({headers}));
    }

    if (token != null) {
      authRequest = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }

    return next.handle(authRequest)
    //   .pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     debugger
    //     if (error.status === 401 || error.status === 403) {
    //       Swal.fire({
    //         text: 'Bạn không được phép truy cập đường dẫn này!',
    //         icon: 'error',
    //         confirmButtonText: 'OK'
    //       })
    //       this.router.navigateByUrl('error')
    //     } else {
    //       Swal.fire({
    //         text: 'Lỗi kết nối, xin vui lòng thử lại!',
    //         icon: 'error',
    //         confirmButtonText: 'OK'
    //       })
    //     }
    //     return throwError(error);
    //   })
    // );
  }
}
