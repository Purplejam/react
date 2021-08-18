import userApi from './../api/api.js';
import {compose} from 'redux';
import {setStatus} from 'formik';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {



switch(action.type) {
    case SET_USER_DATA:
     return {
        ...state,
        ...action.data
     }
    default: 
        return state;

    }

}



export let setAuthUserData = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email, isAuth}
    }
}

export const getAuth = () => {
    return (dispatch) => {
        return userApi.getAuth()
        .then(response => {
            return response.json()})
        .then(json => {
            if (json.resultCode == 0) {
                let {id, login, email} = json.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
    }
}

export const login = (email, login, rememberMe, setStatus) => {
    return (dispatch) => {
        userApi.loginAuth(email, login, rememberMe)
            .then(response => response.json())
            .then(json => {
                if (json.resultCode == 0) {
                    dispatch(getAuth());
                    return json.resultCode;
                } else if (json.resultCode != 0) {
                    let result = [];
                    json.messages.forEach(message => result.push(message + '! '));
                    setStatus(result);
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        userApi.logout()
            .then(response => response.json())
            .then(json => {
                if(json.resultCode == 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}



export default authReducer;