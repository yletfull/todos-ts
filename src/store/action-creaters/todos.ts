import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoActionsTypes, TodoAction } from '../../types/todo';
export const fetchTodos = ({ page = 1, limit = 10 }) => async(dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({
            type: TodoActionsTypes.FETCH_TODOS
        })
        const responce = await axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                page, limit,
            }
        });
        dispatch({
            type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
            payload: responce.data,
        })
    } catch (err) {
        dispatch({
            type: TodoActionsTypes.FETCH_TODOS_ERROR,
            payload: 'Ошибка загрузки списка задач'
        })
    }
}