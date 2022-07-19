import { combineReducers } from "redux";
import { UserReducer } from './userReducer';
import { TodoReducer } from './todoReducer';
import { AuthReducer } from "./authReducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    todo: TodoReducer,
    auth: AuthReducer,
})

export type RootState = ReturnType<typeof rootReducer>