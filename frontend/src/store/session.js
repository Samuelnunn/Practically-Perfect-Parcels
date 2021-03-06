import { fetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/remove/Users';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await fetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        })
    });
    dispatch(setUser(res.data.user));
    return res;
};

export const signUp = (user) => async (dispatch) => {
    const { firstName, lastName, username, email, password } = user;
    const res = await fetch('/api/users', {
        method: 'POST',
        // header: 'ContentType/json',
        body: JSON.stringify({
            firstName,
            lastName,
            username,
            email,
            password
        }),
    });
    dispatch(setUser(res.data.user));
    return res;
}

export const restoreUser = () => async dispatch => {
    const res = await fetch('/api/session');
    dispatch(setUser(res.data.user));
    return res;
};


export const logout = () => async (dispatch) => {
    const res = await fetch('api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return res;
};



const initState = { user: null };


const sessionReducer = (state = initState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default: 
        return state;
    }   
};

export default sessionReducer;