import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private API_URL = 'https://alumni-backend-2-vdv4.onrender.com/user';

  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    return this.http.post(this.API_URL, data);
  }

  loginUser(data: any): Observable<any> {
    const params = new HttpParams()
      .set('username', data.username)
      .set('password', data.password);
    return this.http.post(
      `https://alumni-backend-2-vdv4.onrender.com/token`, 
      params.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        observe: 'response'
      }
    );
  }
}
