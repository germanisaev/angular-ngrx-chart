import { Action } from '@ngrx/store';


export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    SIGNUP = '[Auth] Signup',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    SIGNUP_FAILURE = '[Auth] Signup Failure',
    LOGOUT = '[Auth] Logout',
    GET_STATUS = '[Auth] GetStatus',
    GET_CHART = '[Auth] GetChart',
    CHART_SUCCESS = '[Auth] Chart Success',
    CHART_FAILURE = '[Auth] Chart Failure',
    REMOVE_USER = '[Auth] RemoveUser',
    REMOVE_USER_SUCCESS = '[Auth] Remove User Success',
    REMOVE_USER_FAILURE = '[Auth] Remove User Failure',
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any) { }
}

export class LogInSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) { }
}

export class LogInFailure implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) { }
}

export class SignUp implements Action {
    readonly type = AuthActionTypes.SIGNUP;
    constructor(public payload: any) { }
}

export class SignUpSuccess implements Action {
    readonly type = AuthActionTypes.SIGNUP_SUCCESS;
    constructor(public payload: any) { }
}

export class SignUpFailure implements Action {
    readonly type = AuthActionTypes.SIGNUP_FAILURE;
    constructor(public payload: any) { }
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export class GetStatus implements Action {
    readonly type = AuthActionTypes.GET_STATUS;
}

export class GetChart implements Action {
    readonly type = AuthActionTypes.GET_CHART;
}

export class ChartSuccess implements Action {
    readonly type = AuthActionTypes.CHART_SUCCESS;
    constructor(public payload: any) { }
}

export class ChartFailure implements Action {
    readonly type = AuthActionTypes.CHART_FAILURE;
    constructor(public payload: any) { }
}

export class RemoveUser implements Action {
    readonly type = AuthActionTypes.REMOVE_USER;
    constructor(public payload: any) { }
}

export class RemoveUserSuccess implements Action {
    readonly type = AuthActionTypes.REMOVE_USER_SUCCESS;
    constructor(public payload: any) { }
}

export class RemoveUserFailure implements Action {
    readonly type = AuthActionTypes.REMOVE_USER_FAILURE;
    constructor(public payload: any) { }
}

export type All =
    | LogIn
    | LogInSuccess
    | LogInFailure
    | SignUp
    | SignUpSuccess
    | SignUpFailure
    | LogOut
    | GetStatus
    | GetChart
    | ChartSuccess
    | ChartFailure
    | RemoveUser
    | RemoveUserSuccess
    | RemoveUserFailure;