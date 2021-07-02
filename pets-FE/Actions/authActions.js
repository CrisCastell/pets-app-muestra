import * as actions from './ActionTypes'
import * as Constants from '../Utils/Constants'
import {platformAxios} from '../Utils/platformAxios'
import {errorRequestHandler} from '../Utils/utilFunctions'


export const loginAction = (credentials) => {
    
    return async (dispatch) =>{
        dispatch(loginInit())
        
        try {
            const response = await platformAxios.post('/accounts/login', credentials)
            console.log(response)
            const token = response.data.token;
            localStorage.setItem(Constants.USER_TOKEN, token)
            dispatch(loginSuccess())
            
        } catch (error) {
            const message = errorRequestHandler(error)
            dispatch(loginError(message))
        }
    }
}

const loginInit = () => ({
    type: actions.LOGIN_INIT,
    payload: true
})

export const loginSuccess = () => ({
    type: actions.LOGIN_SUCCESS,
    payload: true
})

const loginError = (errorMessage) => ({
    type: actions.LOGIN_ERROR,
    payload: errorMessage
})

export const loginSuccessToFalse = () =>({
    type:actions.LOGIN_SUCCESS_TO_FALSE,
    payload:false
})

export const logoutAction = () => ({
    type: actions.LOGOUT,
    payload: true
})

export const checkIfLogged = () => {
    return (dispatch) => {
        const token = localStorage.getItem(Constants.USER_TOKEN);
        console.log('Si  se esta cumpliendo la funcion')
        if (token !== null){
            console.log('Lo esta reconociendo')
            dispatch(loginSuccess())
        }
    }
}


export const registrationAction = (data) => {
    
    return async (dispatch) =>{
        dispatch( registrationInit())
        
        try {
            const response = await platformAxios.post('/accounts/register', data)
            console.log(response)
            // const token = response.data.data.token;
            // localStorage.setItem(Constants.USER_TOKEN, token)
            dispatch( registrationSuccess())
            
        } catch (error) {
            console.log(error.response)
            const message = errorRequestHandler(error)
            dispatch( registrationError(message))
        }
    }
}

const  registrationInit = () => ({
    type: actions.REGISTRATION_INIT,
    payload: true
})

const  registrationSuccess = () => ({
    type: actions.REGISTRATION_SUCCESS,
    payload: true
})

const  registrationError = (message) => ({
    type: actions.REGISTRATION_ERROR,
    payload: message
})

export const registrationSuccessToFalse = () =>({
    type:actions.REGISTRATION_SUCCESS_TO_FALSE,
    payload:false
})
