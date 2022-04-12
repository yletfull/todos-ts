export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface UserState {
    users: any[];
    isFetching: boolean;
    error: null | string;
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUserError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction 
    | FetchUserSuccess 
    | FetchUserError;