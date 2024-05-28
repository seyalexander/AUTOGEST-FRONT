import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationApiService {

  private loggedIn = false;

  constructor() {}

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
