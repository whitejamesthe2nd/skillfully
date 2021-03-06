export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_FOCUS = "UPDATE_FOCUS";

//!ACTIONS
export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const createUser = (user) => {
    return {
        type: CREATE_USER,
        user
    }
}
export const updateFocus = (user) => {
    return {
        type: CREATE_USER,
        user
    }
}

//! THUNKS
//login
export const login = (email, password) => {

    return async dispatch => {
        const res = await fetch(`/api/session/token/auth`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            dispatch(setUser(data))
        }
        return res;
    };
};

export const updateFocusThunk = (focus, user) => {

    return async dispatch => {
        const res = await fetch(`/api/users/update/focus`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ focus, user }),
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            dispatch(setUser(data))
        }
        return res;
    };
};
export const updateUserSkillThunk = (user) => {

    return async dispatch => {
        const res = await fetch(`/api/users/update/skills`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ user }),
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            dispatch(setUser(data))
        }
        return res;
    };
};
export const updateThemeThunk = (theme, user) => {

    return async dispatch => {
        const res = await fetch(`/api/users/update/theme`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ theme, user }),
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            dispatch(setUser(data))
        }
        return res;
    };
};
//logout
export const logout = () => async dispatch => {
    const res = await fetch('/api/session/token/remove', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) {
        dispatch(removeUser());
    }
    return res
}


export const signup = (username, email, password) => async dispatch => {
    // const csrfToken = Cookies.get("XSRF-TOKEN");
    const response = await fetch('/api/users/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            // "XSRF-TOKEN": csrfToken
        },
        body: JSON.stringify({ username, email, password }),
    });
    if (response.ok) {
        const user = await response.json();
        console.log(user);
        dispatch(createUser(user));
    }
}
