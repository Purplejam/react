import {getAuth} from './auth-reducer.js';
const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initialized: false

}

const appReducer = (state = initialState, action) => {



switch(action.type) {
    case SET_INITIALIZED:
     return {
        ...state,
        initialized: true
     }
    default: 
        return state;

    }

}



export let initializedSuccess = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuth());
        promise.then(() => {
            dispatch(initializedSuccess());
        })
    }
}



export default appReducer;