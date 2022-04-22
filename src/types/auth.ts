export enum AuthActionsTypes {
    FETCH_AUTH = 'FETCH_AUTH',
    FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
    FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
}

export enum RegistrationActionsTypes {
    FETCH_REGISTRATION = 'FETCH_REGISTRATION',
    FETCH_REGISTRATION_SUCCESS = 'FETCH_REGISTRATION_SUCCESS',
    FETCH_REGISTRATION_ERROR = 'FETCH_REGISTRATION_ERROR',
}

export enum LoginActionsTypes {
    FETCH_LOGIN = 'FETCH_LOGIN',
    FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR',
}

export interface authState {
    token: null | string;
    isFetching: boolean;
    error: null | string;
}

interface FetchAuthAction {
    type:  AuthActionsTypes.FETCH_AUTH,
}
interface FetchAuthSuccessAction {
    type:  AuthActionsTypes.FETCH_AUTH_SUCCESS,
    payload: any[],
}
interface FetchAuthErrorAction {
    type:  AuthActionsTypes.FETCH_AUTH_ERROR,
    payload: string | null,
}

interface FetchRegistrationAction {
    type:  RegistrationActionsTypes.FETCH_REGISTRATION,
}
interface FetchRegistrationSuccessAction {
    type:  RegistrationActionsTypes.FETCH_REGISTRATION_SUCCESS,
    payload: any[],
}
interface FetchRegistrationErrorAction {
    type:  RegistrationActionsTypes.FETCH_REGISTRATION_ERROR,
    payload: string | null,
}

interface FetchLoginAction {
    type:  LoginActionsTypes.FETCH_LOGIN,
}
interface FetchLoginSuccessAction {
    type:  LoginActionsTypes.FETCH_LOGIN_SUCCESS,
    payload: any[],
}
interface FetchLoginErrorAction {
    type:  LoginActionsTypes.FETCH_LOGIN_ERROR,
    payload: string | null,
}

export type AuthAction = FetchAuthAction
    | FetchAuthErrorAction
    | FetchAuthSuccessAction

export type RegistrationAction = FetchRegistrationAction
    | FetchRegistrationErrorAction
    | FetchRegistrationSuccessAction

export type LoginAction = FetchLoginAction
    | FetchLoginErrorAction
    | FetchLoginSuccessAction
