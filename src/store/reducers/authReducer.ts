import { AuthAction, AuthActionsTypes, AuthState } from '../../types/auth';

const initialState: AuthState = {
    token: '',
    isFetching: false,
    error: null,
};

export function AuthReducer (state = initialState, action: AuthAction): AuthState {
    switch(action.type) {
        case AuthActionsTypes.FETCH_AUTH:
            return {
                ...state,
                isFetching: true,
                token: '',
            }
        case AuthActionsTypes.FETCH_AUTH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                token: action.payload,
            }
        case AuthActionsTypes.FETCH_AUTH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default: 
            return state
    }
}