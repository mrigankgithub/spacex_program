import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HomeServiceService {

  constructor(private http: HttpService) { }

  getSpace(obj) {
    return this.http.get('launches', obj).toPromise();
  }
}
