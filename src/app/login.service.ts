import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  login(userName: string, password: string) {
    const input = {
      user: userName,
      password: password
    }
    return this.httpClient.post<any>('/api/signIn', input)
  }

  getToken() {
    return sessionStorage.getItem('token')
  }
  setToken(token: string) {
    return sessionStorage.setItem('token', token)
  }
  loggout() {
    sessionStorage.removeItem('token');
  }
}
