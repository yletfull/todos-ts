import { combineReducers } from "redux";
import { UserReducer } from './userReducer';
import { TodoReducer } from './todoReducer';

export const rootReducer = combineReducers({
    user: UserReducer,
    todo: TodoReducer,
})

export type RootState = ReturnType<typeof rootReducer>