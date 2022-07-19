import axios from 'axios';
import { Dispatch } from 'redux';
import { $host } from '../../api';
import { RegistrationAction, RegistrationActionsTypes, AuthAction, AuthActionsTypes } from '../../types/auth';

export const registration = ({ body = {}}) => async(dispatch: Dispatch<RegistrationAction>) => {
    try {
        dispatch({
            type: RegistrationActionsTypes.FETCH_REGISTRATION
        })
        const responce = await axios.get('api/user/registration', body);
        dispatch({
            type: RegistrationActionsTypes.FETCH_REGISTRATION_SUCCESS,
            payload: responce.data,
        })
    } catch (err) {
        dispatch({
            type: RegistrationActionsTypes.FETCH_REGISTRATION_ERROR,
            payload: 'Ошибка регистрации'
        })
    }
}

export const auth = () => async(dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({
            type: AuthActionsTypes.FETCH_AUTH
        })
        const responce = await $host.get('api/user/auth');
        dispatch({
            type: AuthActionsTypes.FETCH_AUTH_SUCCESS,
            payload: responce.data,
        })
    } catch (err) {
        dispatch({
            type: AuthActionsTypes.FETCH_AUTH_ERROR,
            payload: 'Ошибка авторизации'
        })
    }
}