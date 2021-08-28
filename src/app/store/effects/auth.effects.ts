import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { exhaustMap, map, catchError, tap, mergeMap, switchMap } from 'rxjs/operators';
import { AuthService } from '@app/services';
import { AuthActionTypes, ChartFailure, ChartSuccess, GetChart, GetStatus, LogIn, LogInFailure, LogInSuccess, RemoveUser, RemoveUserFailure, RemoveUserSuccess, SignUp, SignUpFailure, SignUpSuccess } from '../actions';
import { ChartService } from '@app/services/chart.service';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private chartService: ChartService,
    private router: Router,
  ) { }

  @Effect()
  LogIn: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap(payload => {
      return this.authService.logIn(payload.username, payload.password)
        .pipe(
          map((user) => {
            console.log('LogIn: ');
            console.log(user);
            return new LogInSuccess({ token: user, username: payload.username });
          }),
          catchError((error) => {
            console.log(error);
            return of(new LogInFailure({ error: error }));
          }));
    }));

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );


  @Effect()
  SignUp: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: SignUp) => action.payload),
    switchMap(payload => {
      return this.authService.signUp(payload)
        .pipe(map((user) => {
          console.log(user);
          return new SignUpSuccess({ token: user, username: payload.username });
        }),
          catchError((error) => {
            console.log(error);
            return of(new SignUpFailure({ error: error }));
          }));
    }));

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
    })
  );

  /* @Effect({ dispatch: false })
  GetStatus: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.GET_STATUS),
    map((action: GetStatus) => action),
    switchMap(payload => {
      return this.authService.getStatus();
    })); */

  @Effect({ dispatch: false })
  GetChart: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.GET_CHART),
    map((action: GetChart) => action),
    switchMap(payload => {
      console.log(payload);
      return this.chartService.getChart().pipe(map((chart) => {
        console.log(chart);
        return new ChartSuccess({ payload: payload });
      }),
        catchError((error) => {
          console.log(error);
          return of(new ChartFailure({ error: error }));
        }));
    }));


  @Effect()
  RemoveUser: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.REMOVE_USER),
    map((action: RemoveUser) => action.payload),
    switchMap(payload => {
      return this.authService.removeUser(payload)
        .pipe(map((user) => {
          console.log(user);
          return new RemoveUserSuccess({ token: user, username: payload.username });
        }),
          catchError((error) => {
            console.log(error);
            return of(new RemoveUserFailure({ error: error }));
          }));
    }));

  @Effect({ dispatch: false })
  RemoveUserFailure: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.REMOVE_USER_FAILURE)
  );
}


