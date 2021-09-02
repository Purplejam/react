import userApi from './../api/api.js';
import {compose} from 'redux';
import {setStatus} from 'formik';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null

}

const authReducer = (state = initialState, action) => {

switch(action.type) {
    case SET_USER_DATA:
     return {
        ...state,
        ...action.data
     }

    case SET_CAPTCHA :
     return {
        ...state,
        captcha: action.captcha
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

export const setCaptcha = (captcha) => {

    return {
        type: SET_CAPTCHA,
        captcha
    }
}

export const getAuth = () => async (dispatch) => {
        let response = await userApi.getAuth();
        let json = await response.json();
        if (json.resultCode === 0) {
            let {id, login, email} = json.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }


export const login = (email, login, rememberMe, captcha, setStatus) => async (dispatch) => {
        let response = await userApi.loginAuth(email, login, rememberMe, captcha);
        let json = await response.json();

        if (json.resultCode === 0) {
            dispatch(getAuth());
        } else if (json.resultCode === 1) {
            let result = [];
            json.messages.forEach(message => result.push(message + '! '));
            setStatus(result);
        } else if (json.resultCode === 10) {
            let captcha = await userApi.getCaptcha();
            let json = await captcha.json();
            dispatch(setCaptcha(json.url));

        }
    }


export const logout = () => async (dispatch) => {
        let response = await userApi.logout();
        let json = await response.json();

        if(json.resultCode == 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }




export default authReducer;