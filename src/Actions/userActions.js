import { authenticatedAxios } from '../Utils/platformAxios'
import { errorRequestHandler } from '../Utils/utilFunctions'
import * as actions from './ActionTypes'

export const getUserIDAction = (data) => {
    
    return async (dispatch) =>{
        dispatch( getUserIDInit())
        
        try {
            const response = await authenticatedAxios.get('/accounts/get-id')
            console.log(response)
            const userID = response.data.id;
            dispatch( getUserIDSuccess(userID))
            
        } catch (error) {
            const message = errorRequestHandler(error)
            dispatch( getUserIDError(message))
            console.log(error)
        }
    }
}

const  getUserIDInit = () => ({
    type: actions.GET_USER_ID_INIT,
    payload: true
})

const  getUserIDSuccess = (userID) => ({
    type: actions.GET_USER_ID_SUCCESS,
    payload: userID
})

const  getUserIDError = (message) => ({
    type: actions.GET_USER_ID_ERROR,
    payload: message
})

export const getUserInfoDetailAction = (userID) => {
    
    return async (dispatch) =>{
        dispatch( getUserInfoDetailInit())
        
        try {
            const response = await authenticatedAxios.get(`/accounts/${userID}`)
            console.log(response)
            dispatch( getUserInfoDetailSuccess(response.data))
            
        } catch (error) {
            const message = errorRequestHandler(error)
            dispatch( getUserInfoDetailError(message))
        }
    }
}

const  getUserInfoDetailInit = () => ({
    type: actions.GET_USER_INFO_DETAIL_INIT,
    payload: true
})

const  getUserInfoDetailSuccess = (data) => ({
    type: actions.GET_USER_INFO_DETAIL_SUCCESS,
    payload: data
})

const  getUserInfoDetailError = (message) => ({
    type: actions.GET_USER_INFO_DETAIL_ERROR,
    payload: message
})




export const getUserBasicInfoAction = () => {
    
    return async (dispatch) =>{
        dispatch( getUserBasicInfoInit())
        
        try {
            const response = await authenticatedAxios.get(`/accounts/get-basic-info`)
            console.log(response)
            dispatch( getUserBasicInfoSuccess(response.data))
            
        } catch (error) {
            const message = errorRequestHandler(error)
            dispatch( getUserBasicInfoError(message))
        }
    }
}

const  getUserBasicInfoInit = () => ({
    type: actions.GET_USER_BASIC_INFO_INIT,
    payload: true
})

const  getUserBasicInfoSuccess = (data) => ({
    type: actions.GET_USER_BASIC_INFO_SUCCESS,
    payload: data
})

const  getUserBasicInfoError = (message) => ({
    type: actions.GET_USER_BASIC_INFO_ERROR,
    payload: message
})





export const updateUserInfoDetailAction = (userID, data) => {
    
    return async (dispatch) =>{
        dispatch( updateUserInfoDetailInit())
        
        try {
            const response = await authenticatedAxios.put(`/accounts/${userID}`, data)
            console.log(response.data)
            dispatch( updateUserInfoDetailSuccess(response.data))
            
        } catch (error) {
            const message = errorRequestHandler(error)
            dispatch(updateUserInfoDetailError(message))
            console.log(error.response)
            console.log(error)
        }
    }
}

const  updateUserInfoDetailInit = () => ({
    type: actions.UPDATE_USER_INFO_DETAIL_INIT,
    payload: true
})

const  updateUserInfoDetailSuccess = (data) => ({
    type: actions.UPDATE_USER_INFO_DETAIL_SUCCESS,
    payload: data
})

const  updateUserInfoDetailError = (message) => ({
    type: actions.UPDATE_USER_INFO_DETAIL_ERROR,
    payload: message
})


export const changeUserPasswordAction = (userID, data) => {
    
    return async (dispatch) =>{
        dispatch( changeUserPasswordInit())
        
        try {
            const response = await authenticatedAxios.put(`/accounts/password/${userID}`, data)
            console.log(response)
            const result = response.data;
            dispatch( changeUserPasswordSuccess(result))
            
        } catch (error) {
            const message = errorRequestHandler(error)
            
            dispatch( changeUserPasswordError(message))
            
        }
    }
}

const  changeUserPasswordInit = () => ({
    type: actions.CHANGE_USER_PASSWORD_INIT,
    payload: true
})

const  changeUserPasswordSuccess = (data) => ({
    type: actions.CHANGE_USER_PASSWORD_SUCCESS,
    payload: data
})

const  changeUserPasswordError = (errorMessage) => ({
    type: actions.CHANGE_USER_PASSWORD_ERROR,
    payload: errorMessage
})



export const getUserImageAction = (userID) => {
    
    return async (dispatch) =>{
        dispatch( getUserImageInit())
        
        try {
            const response = await authenticatedAxios.get(`/accounts/image/${userID}`)
            console.log(response)
            dispatch( getUserImageSuccess(response.data.profile_image))
            
        } catch (error) {
            const message = errorRequestHandler(error)
            dispatch( getUserImageError(message))
            console.log(error)
        }
    }
}

const  getUserImageInit = () => ({
    type: actions.GET_USER_IMAGE_INIT,
    payload: true
})

const  getUserImageSuccess = (data) => ({
    type: actions.GET_USER_IMAGE_SUCCESS,
    payload: data
})

const  getUserImageError = (message) => ({
    type: actions.GET_USER_IMAGE_ERROR,
    payload: message
})


export const updateUserImageAction = (userID, data) => {
    
    return async (dispatch) =>{
        dispatch( updateUserImageInit())
        console.log('paso por aca')
        try {
            const response = await authenticatedAxios.put(`/accounts/image/${userID}`, data)
            console.log(response.data)
            dispatch( updateUserImageSuccess(response.data.profile_image))
            
        } catch (error) {
            const message = errorRequestHandler(error)
            dispatch( updateUserImageError(message))
            console.log(error)
        }
    }
}

const  updateUserImageInit = () => ({
    type: actions.UPDATE_USER_IMAGE_INIT,
    payload: true
})

const  updateUserImageSuccess = (data) => ({
    type: actions.UPDATE_USER_IMAGE_SUCCESS,
    payload: data
})

const  updateUserImageError = (message) => ({
    type: actions.UPDATE_USER_IMAGE_ERROR,
    payload: message
})