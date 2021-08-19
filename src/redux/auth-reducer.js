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

export const getAuth = () => async (dispatch) => {
        let response = await userApi.getAuth();
        let json = await response.json();
        if (json.resultCode === 0) {
            let {id, login, email} = json.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }


export const login = (email, login, rememberMe, setStatus) => async (dispatch) => {
        let response = await userApi.loginAuth(email, login, rememberMe);
        let json = await response.json();
  
        if (json.resultCode === 0) {
            dispatch(getAuth());
        } else if (json.resultCode !== 0) {
            let result = [];
            json.messages.forEach(message => result.push(message + '! '));
            setStatus(result);
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