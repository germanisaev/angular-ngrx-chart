import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetStatus, LogOut, RemoveUser } from '@app/store/actions';
import { AppState, selectAuthState } from '@app/store/app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit {

  getState: any;
  isAuthenticated: false;
  user = null;
  errorMessage = null;

  constructor(
    private store: Store<AppState>, 
    private router: Router) {
    this.getState = this.store.select(selectAuthState);
   }

  ngOnInit() {
    this.store.dispatch(new GetStatus);

    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  remove(username: string) {
    this.store.dispatch(new RemoveUser(username));
  }

  goHome() {
    if(this.user) {
      this.router.navigate(['/']);
    }
    else {
      this.logOut();
    }
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }

}
