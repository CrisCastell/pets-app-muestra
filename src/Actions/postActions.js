import * as actions from './ActionTypes'
import {authenticatedAxios, platformAxios} from '../Utils/platformAxios'
import {errorRequestHandler} from '../Utils/utilFunctions'

export const getAllPostsAction = ({categoria_query ="", tipo_query ="", quantity ="", locacion}={}) => {

    
    
    return async (dispatch) =>{
        dispatch(getPostsInit())
        
        try {
            console.log(`category=${categoria_query} - tipo:${tipo_query} - quantity:${quantity} - locacion:${locacion}`)
            
            const url    =  `pets/posts?category=${categoria_query}&tipo=${tipo_query}&quantity=${quantity}&lat=${locacion.lat}&lng=${locacion.lng}`
            // const url    =  `pets/posts`
            
            const response = await platformAxios.get(url)
            dispatch(getPostsSuccess(response.data.results))
            console.log(response.data.results)
            
        } catch (error) {

            const message = errorRequestHandler(error)
            dispatch(getPostsError(message))
           
        }
    }
}

const getPostsInit = () => ({
    type: actions.GET_ALL_POSTS_INIT,
    payload: true
})

const getPostsSuccess = (results) => ({
    type: actions.GET_ALL_POSTS_SUCCESS,
    payload: results
})


const getPostsError = (message) => ({
    type: actions.GET_ALL_POSTS_ERROR,
    payload: message
})



export const getAllLocacionesAction = ({categoria_query ="", tipo_query ="", quantity ="", locacion}={}) => {

    
    
    return async (dispatch) =>{
        dispatch(getLocacionesInit())
        
        try {

            const url    =  `pets/posts/locaciones?category=${categoria_query}&tipo=${tipo_query}&quantity=${quantity}&lat=${locacion.lat}&lng=${locacion.lng}`

            // const url    =  `pets/posts/locaciones`
            
            const response = await platformAxios.get(url)
            dispatch(getLocacionesSuccess(response.data))
            console.log(response.data)
            
        } catch (error) {

            const message = errorRequestHandler(error)
            dispatch(getLocacionesError(message))
           
        }
    }
}

const getLocacionesInit = () => ({
    type: actions.GET_ALL_LOCACIONES_INIT,
    payload: true
})

const getLocacionesSuccess = (results) => ({
    type: actions.GET_ALL_LOCACIONES_SUCCESS,
    payload: results
})


const getLocacionesError = (message) => ({
    type: actions.GET_ALL_LOCACIONES_ERROR,
    payload: message
})







export const getTendenciasAction = () => {

    
    
    return async (dispatch) =>{
        dispatch(getTendenciasInit())
        
        try {
            
            
            
            const url    =  `pets/posts/tendencias`
            
            const response = await platformAxios.get(url)
            dispatch(getTendenciasSuccess(response.data))
            console.log(response.data)
            
        } catch (error) {

            const message = errorRequestHandler(error)
            dispatch(getTendenciasError(message))
           
        }
    }
}

const getTendenciasInit = () => ({
    type: actions.GET_TENDENCIAS_INIT,
    payload: true
})

const getTendenciasSuccess = (results) => ({
    type: actions.GET_TENDENCIAS_SUCCESS,
    payload: results
})


const getTendenciasError = (message) => ({
    type: actions.GET_TENDENCIAS_ERROR,
    payload: message
})


export const getPostDetailAction = (postID) => {

    
    
    return async (dispatch) =>{
        dispatch(getPostDetailInit())
        
        try {
            
            
            
            const url    =  `pets/post/${postID}`
            
            const response = await platformAxios.get(url)
            dispatch(getPostDetailSuccess(response.data))
            console.log(response.data)
            
        } catch (error) {

            const message = errorRequestHandler(error)
            dispatch(getPostDetailError(message))
           
        }
    }
}

const getPostDetailInit = () => ({
    type: actions.GET_POST_DETAIL_INIT,
    payload: true
})

const getPostDetailSuccess = (result) => ({
    type: actions.GET_POST_DETAIL_SUCCESS,
    payload: result
})


const getPostDetailError = (message) => ({
    type: actions.GET_POST_DETAIL_ERROR,
    payload: message
})


export const setLocacionAction = (locacion) => ({
    type: actions.SET_LOCACION,
    payload: locacion
})






export const getDraftPostsAction = (userID) => {

    
    
    return async (dispatch) =>{
        dispatch(getDraftPostsInit())
        
        try {
            
            const url    =  `pets/posts/draft`
            
            const response = await authenticatedAxios.get(url)
            dispatch(getDraftPostsSuccess(response.data))
            console.log(response.data)
            
        } catch (error) {

            const message = errorRequestHandler(error)
            dispatch(getDraftPostsError(message))
           
        }
    }
}

const getDraftPostsInit = () => ({
    type: actions.GET_DRAFT_POSTS_INIT,
    payload: true
})

const getDraftPostsSuccess = (results) => ({
    type: actions.GET_DRAFT_POSTS_SUCCESS,
    payload: results
})


const getDraftPostsError = (message) => ({
    type: actions.GET_DRAFT_POSTS_ERROR,
    payload: message
})


export const getPublicPostsAction = (userID) => {

    
    
    return async (dispatch) =>{
        dispatch(getPublicPostsInit())
        
        try {
            
            const url    =  `pets/posts/public`
            
            const response = await authenticatedAxios.get(url)
            dispatch(getPublicPostsSuccess(response.data))
            console.log(response.data)
            
        } catch (error) {

            const message = errorRequestHandler(error)
            dispatch(getPublicPostsError(message))
           
        }
    }
}

const getPublicPostsInit = () => ({
    type: actions.GET_PUBLIC_POSTS_INIT,
    payload: true
})

const getPublicPostsSuccess = (results) => ({
    type: actions.GET_PUBLIC_POSTS_SUCCESS,
    payload: results
})


const getPublicPostsError = (message) => ({
    type: actions.GET_PUBLIC_POSTS_ERROR,
    payload: message
})

