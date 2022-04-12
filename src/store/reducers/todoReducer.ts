import { TodoState, TodoAction, TodoActionsTypes } from '../../types/todo';

const initialState: TodoState = {
    todos: [],
    isFetching: false,
    error: null,
    page: 1,
    limit: 10,
}

export function TodoReducer (state = initialState, action: TodoAction): TodoState {
    switch(action.type) {
        case TodoActionsTypes.FETCH_TODOS:
            return {
                ...state,
                isFetching: true,
            }
        case TodoActionsTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                todos: action.payload,
            }
        case TodoActionsTypes.FETCH_TODOS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case TodoActionsTypes.SET_TODOS_PAGE:
            return {
                ...state,
                page: action.payload,
            }
        default: 
            return state
    }
}