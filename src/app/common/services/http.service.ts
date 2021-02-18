import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, ApiConfig } from 'src/app/models/api.interface';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private apiUrl: string;

    constructor(
        private http: HttpClient,
    ) {
        this.apiUrl = environment.url;
    }

    get<T=any>(url, httpParams?: any, config: ApiConfig = { showLoader: true }): Observable<ApiResponse<T>> {
        for (let item in httpParams) {
            if (httpParams[item] === '' || httpParams[item] === undefined || httpParams[item] === null) {
                delete httpParams[item];
            }
        }
        
        return this.http.get<ApiResponse<T>>(this.apiUrl + url,  { params: httpParams });
    }

}
