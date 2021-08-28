import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user';
import { SignUp } from '@app/store/actions';
import { AppState, selectAuthState } from '@app/store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  getState: any;
  errorMessage: string | null;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const payload = {
      username: this.user.username,
      password: this.user.password,
      firstName: this.user.firstName,
      lastName: this.user.lastName
    };
    this.store.dispatch(new SignUp(payload));
  }

}
