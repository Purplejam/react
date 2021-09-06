import {getAuth} from './auth-reducer.js';
const SET_INITIALIZED = 'SET_INITIALIZED';

export type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {



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

type initializedSuccessType = {
    type: typeof SET_INITIALIZED
}

export let initializedSuccess = (): initializedSuccessType => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuth());
        promise.then(() => {
            dispatch(initializedSuccess());
        })
    }
}



export default appReducer;