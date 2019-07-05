import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();
  
  constructor(private httpClient: HttpClient) { }

  createAccount(email, password){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB2nAoRlXlEFwd6gCBPBDV6XtqT-c6uda0', {email, password});
  }

  login(email, password){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB2nAoRlXlEFwd6gCBPBDV6XtqT-c6uda0', {email, password});
  }

  setUser(user){
    this.pUser.next(user);
  }
  
  verifyToken(token) {
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyB2nAoRlXlEFwd6gCBPBDV6XtqT-c6uda0', {idToken: token});
  }
}
