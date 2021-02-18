import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from 'src/app/common/services/loader.service';
import { ApiConfig } from '../models/api.interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  deviceToken;
  constructor(
    private router: Router,
    private _loaderService: LoaderService,
  ) {
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = {};
    let config: ApiConfig;
    if (!navigator.onLine) {
      const error = new HttpErrorResponse({
        error: {
          httpCode: 510,
          statusCode: 510,
          message: 'No internet ',
        },
      });
      if (!config.skipErrorPopup) {
        window.alert(error);
      }
      return throwError(error);
    }
    request.headers.delete('config');
    request = request.clone({
      setHeaders: headers,
    });

   
      this._loaderService.loader.next(true);
    

    return next.handle(request).pipe(
      tap(
        (data) => {
          if (data instanceof HttpResponse) {
            
              this._loaderService.loader.next(false);
            
          }
        },
        (err: any) => {
          this._loaderService.loader.next(false);
          if (err instanceof HttpErrorResponse) {
            if (config && !config.skipErrorPopup) {
            window.alert(err);
            }
            if (
              err.status === 401 ||
              err.status === 440 ||
              err.status === 403
            ) {
            window.alert(err.message);
            }
          }
        }
      )
    );
  }
}
