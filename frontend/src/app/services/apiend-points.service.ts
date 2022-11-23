import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export default class APIEndPointsService {
  api: string = '/scrapper/'
  options: any

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.options = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRFToken': this.cookieService.get('csrftoken') as string
      })
    }
  }

  public setUrl(url: string): Observable<any> {
    console.log(this.options);
    return this.http.post<any>(this.api + 'url/', {url: url}, this.options);
  }
}
