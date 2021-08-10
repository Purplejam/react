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
        ...action.data,
        isAuth: true
     }
    default: 
        return state;

    }

}



export let setAuthUserData = (id, login, email) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email}
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
                dispatch(setAuthUserData(id, login, email));
            }
        });
    }
}

export default authReducer;