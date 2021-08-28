import { Component, OnInit } from '@angular/core';
import { LogOut, RemoveUser } from '@app/store/actions';
import { AppState, selectAuthState } from '@app/store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {

  getState: any;
  isAuthenticated: false;
  user = null;
  errorMessage = null;
  decoded = null;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }

}
