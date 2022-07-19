import * as UserActionTypes from './users'
import * as TodoActionTypes from './todos'
import * as AuthActionsTypes from './auth'

export default {
    ...UserActionTypes,
    ...TodoActionTypes,
    ...AuthActionsTypes,
}