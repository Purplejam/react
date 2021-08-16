import userApi from './../api/api.js';
import {compose} from 'redux';
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
        userApi.getAuth()
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

export const login = (email, login) => {
    return (dispatch) => {
        userApi.loginAuth(email, login)
            .then(response => response.json())
            .then(json => {
                if (json.resultCode == 0) {
                    dispatch(getAuth());
                    return json.resultCode;
                } else if (json.resultCode != 0) {
                    console.log(json);
                    let error = new Error('error');
                    throw error;
                }
            })
            .catch((e) => console.log(e));


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