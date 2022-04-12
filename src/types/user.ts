export interface UserState {
    users: any[];
    isFetching: boolean;
    error: null | boolean;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
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
    payload: boolean;
}

export type UserAction = FetchUserAction | FetchUserSuccess | FetchUserError