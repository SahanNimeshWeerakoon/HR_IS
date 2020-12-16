import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map }  from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'http://localhost:5000'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(user) {
    return this.http.post(`${this.API_URL}/user/register`, user)
      .pipe(map(res => {
        return res;
      }));
  }

  login(user) {
    return this.http.post(`${this.API_URL}/user/login`, user)
      .pipe(map((res:any) => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res.user));
        return res;
      })); 
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['login']);
    }
  }
}
