import { UserActionTypes, UserState, UserAction } from '../../types/user';

export const initialState: UserState = {
    users: [],
    isFetching: false,
    error: null,
};

export function UserReducer (state = initialState, action: UserAction): UserState {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS: 
            return {
                isFetching: true,
                error: null,
                users: [],
            }
        case UserActionTypes.FETCH_USERS_SUCCESS: 
            return {
                isFetching: false,
                error: null,
                users: action.payload,
            }
        case UserActionTypes.FETCH_USERS_ERROR: 
            return {
                isFetching: false,
                error: action.payload,
                users: [],
            }
        default: 
            return state
    }
}