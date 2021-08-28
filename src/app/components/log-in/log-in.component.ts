import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user';
import { LogIn } from '@app/store/actions';
import { AppState, selectAuthState } from '@app/store/app.states';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {

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
  };

  onSubmit(): void {
    const payload = {
      username: this.user.username,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}
