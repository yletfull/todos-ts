export enum TodoActionsTypes {
    FETCH_TODOS = 'FETCH_TODO',
    FETCH_TODOS_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODO_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

export interface TodoState {
    todos: any[];
    isFetching: boolean;
    error: null | string;
    page: number;
    limit: number;
}

interface FetchTodosAction {
    type:  TodoActionsTypes.FETCH_TODOS,
}

interface FetchTodosSuccessAction {
    type:  TodoActionsTypes.FETCH_TODOS_SUCCESS,
    payload: any[],
}

interface FetchTodosErrorAction {
    type:  TodoActionsTypes.FETCH_TODOS_ERROR,
    payload: string | null,
}

interface SetTodosPage {
    type:  TodoActionsTypes.SET_TODOS_PAGE,
    payload: number,
}

export type TodoAction = FetchTodosAction 
    | FetchTodosSuccessAction 
    | FetchTodosErrorAction 
    | SetTodosPage
