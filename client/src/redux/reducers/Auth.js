import { SET_USER, REMOVE_USER, CREATE_USER, UPDATE_FOCUS } from '../actions/AuthActions'

export const auth = (state = {}, action) => {
    const prev_state = {...state}
    switch (action.type) {
        case SET_USER:
            return action.user;
        case CREATE_USER:
            return action.user;
        case REMOVE_USER:
            return {}
        case UPDATE_FOCUS:
            return {...prev_state, action}
        default:
            return state
    }
}
