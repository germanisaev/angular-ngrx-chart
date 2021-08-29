import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = environment.webApi;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private getElementUrl(param: any) {
    return this.BASE_URL + '/' + encodeURIComponent(String(param));
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(username: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/authenticate`;
    return this.http.post<User>(url, { username, password });
  }

  signUp(user: User): Observable<User> {
    const url = `${this.BASE_URL}/register`;
    return this.http.post<User>(url, user);
  }

  removeUser(username: string) {
    return this.http.delete(this.getElementUrl(username), this.httpOptions);
  }
  
}
