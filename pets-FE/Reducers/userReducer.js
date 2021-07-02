import * as actions from '../Actions/ActionTypes'

const initialState = {
    

    userID:null,
    userIDLoading:false,
    userIDError:false,
    

    userInfo:{},
    userInfoLoading: false,
    userInfoError: false,

    userBasicInfo:{},
    userBasicInfoLoading: false,
    userBasicInfoError: false,

    updatedSuccess:false,

    changePasswordMessage:"",
    changePasswordSuccess:false,
    changePasswordLoading: false,
    changePasswordError: false,

    userImage:"",
    userImageLoading:false,
    userImageError:false,
    userImageSuccess:false
    
}
export default function userActions(state=initialState, action){
    switch(action.type){
        case actions.GET_USER_INFO_DETAIL_INIT:
            return{...state,
                userInfoError:false,
                userInfoLoading: true,
                errorMessage:"",
            }

        case actions.GET_USER_INFO_DETAIL_SUCCESS:
            return{...state,
                userInfoError: false,
                userInfoLoading: false,
                userInfo:action.payload,
            }

        case actions.GET_USER_INFO_DETAIL_ERROR:
            return{...state,
                userInfoError:true,
                userInfoLoading: false,
                errorMessage: action.payload
            }


        case actions.GET_USER_BASIC_INFO_INIT:
            return{...state,
                userBasicInfoError:false,
                userBasicInfoLoading: true,
                errorMessage:"",
            }

        case actions.GET_USER_BASIC_INFO_SUCCESS:
            return{...state,
                userBasicInfoError: false,
                userBasicInfoLoading: false,
                userBasicInfo:action.payload,
            }

        case actions.GET_USER_BASIC_INFO_ERROR:
            return{...state,
                userBasicInfoError:true,
                userBasicInfoLoading: false,
                errorMessage: action.payload
            }

        case actions.UPDATE_USER_INFO_DETAIL_INIT:
            return{...state,
                userInfoError:false,
                userInfoLoading: true,
                errorMessage:"",
            }

        case actions.UPDATE_USER_INFO_DETAIL_SUCCESS:
            return{...state,
                userInfoError: false,
                userInfoLoading: false,
                userInfo:action.payload,
                updatedSuccess:true
            }

        case actions.UPDATE_USER_INFO_DETAIL_ERROR:
            return{...state,
                userInfoError:true,
                userInfoLoading: false,
                errorMessage: action.payload
            }

        case actions.GET_USER_IMAGE_INIT:
            return{...state,
                userImageError:false,
                userImageLoading: true,
                errorMessage:"",
            }

        case actions.GET_USER_IMAGE_SUCCESS:
            return{...state,
                userImageError: false,
                userImageLoading: false,
                userImage:action.payload,
            }

        case actions.GET_USER_IMAGE_ERROR:
            return{...state,
                userImageError:true,
                userImageLoading: false,
                errorMessage: action.payload
            }

        case actions.UPDATE_USER_IMAGE_INIT:
            return{...state,
                userImageError:false,
                userImageLoading: true,
                errorMessage:"",
            }

        case actions.UPDATE_USER_IMAGE_SUCCESS:
            return{...state,
                userImageError: false,
                userImageLoading: false,
                userImage:action.payload,
                userImageSuccess:true
            }

        case actions.UPDATE_USER_IMAGE_ERROR:
            return{...state,
                userImageError:true,
                userImageLoading: false,
                errorMessage: action.payload
            }

        case actions.GET_USER_ID_INIT:
            return{...state,
                userIDError:false,
                userIDLoading: true,
                errorMessage:"",
            }

        case actions.GET_USER_ID_SUCCESS:
            return{...state,
                userIDError: false,
                userIDLoading: false,
                userID:action.payload
            }

        case actions.GET_USER_ID_ERROR:
            return{...state,
                userIDError: true,
                userIDLoading: false,
                errorMessage: action.payload
            }

        case actions.CHANGE_USER_PASSWORD_INIT:
            return{...state,
                changePasswordError:false,
                changePasswordLoading: true,
                errorMessage:"",
            }

        case actions.CHANGE_USER_PASSWORD_SUCCESS:
            return{...state,
                changePasswordError: false,
                changePasswordLoading: false,
                changePasswordMessage: action.payload,
                changePasswordSuccess: true,
            }

        case actions.CHANGE_USER_PASSWORD_ERROR:
            return{...state,
                changePasswordError:true,
                changePasswordLoading: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}