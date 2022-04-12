import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';
export const fetchUsers = () => async(dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({
            type: UserActionTypes.FETCH_USERS,
        })
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: UserActionTypes.FETCH_USERS_SUCCESS,
            payload: responce.data,
        })
    } catch (err) {
        dispatch({
            type: UserActionTypes.FETCH_USERS_ERROR,
            payload: 'Ошибка загрузки пользователей'
        })
    }
}