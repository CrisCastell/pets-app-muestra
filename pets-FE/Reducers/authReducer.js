import * as actions from '../Actions/ActionTypes'

const initialState = {
    isLoggedIn: false,
    loginSuccess: false,
    error: false,
    loading:false,
    errorMessage: "",

    registrationSuccess:false,
    registrationLoading:false,
    registrationError: false,
    
}

export default function authReducer(state=initialState, action){
    switch(action.type){
        case actions.LOGIN_INIT:
            return{...state,
                error:false,
                loading: true,
                errorMessage:"",
            }

        case actions.LOGIN_SUCCESS:
            return{...state,
                error: false,
                loading: false,
                isLoggedIn:true,
                loginSuccess:true
            }

        case actions.LOGIN_ERROR:
            return{...state,
                error:true,
                loading: false,
                errorMessage: action.payload
            }
        case actions.LOGIN_SUCCESS_TO_FALSE:
            return{...state,
                loginSuccess:false
            }

        case actions.REGISTRATION_INIT:
            return{...state,
                registrationError:false,
                registrationLoading: true,
                errorMessage:"",
            }

        case actions.REGISTRATION_SUCCESS:
            return{...state,
                registrationError: false,
                registrationLoading: false,
                registrationSuccess:true,
            }

        case actions.REGISTRATION_ERROR:
            return{...state,
                registrationError:true,
                registrationLoading: false,
                errorMessage: action.payload
            }
        case actions.REGISTRATION_SUCCESS_TO_FALSE:
            return{...state,
                registrationSuccess:false
            }

        default:
            return state
    }
}