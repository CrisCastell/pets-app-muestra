import * as actions from '../Actions/ActionTypes'

const initialState = {

    locacion: { lat: 10.173780, lng: -68.004433 },
    locaciones: [],
    errorLocaciones: false,
    loadingLocaciones:false,
    posts:[],
    errorPosts:false,
    loadingPosts:false,


    post:{},
    errorPost:false,
    loadingPost:false,

    draftPosts:[],
    errorDraftPost:false,
    loadingDraftPost:false,

    publicPosts:[],
    errorPublicPost:false,
    loadingPublicPost:false,
    
    tendencias:[],
    errorTendencias:false,
    loadingTendencias:false
}

export default function postReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_ALL_POSTS_INIT:
            return{...state,
                errorPosts:false,
                loadingPosts:true,
                posts:[]
            }
        case actions.GET_ALL_POSTS_SUCCESS:
            return{...state,
                posts: action.payload,
                errorPosts: false,
                loadingPosts: false,
            }
        case actions.GET_ALL_POSTS_ERROR:
            return{...state,
                errorPosts:true,
                loadingPosts:false
            }
        case actions.GET_TENDENCIAS_INIT:
            return{...state,
                errorTendencias:false,
                loadingTendencias:true
            }
        case actions.GET_TENDENCIAS_SUCCESS:
            return{...state,
                tendencias: action.payload,
                errorTendencias: false,
                loadingTendencias: false,
            }
        case actions.GET_TENDENCIAS_ERROR:
            return{...state,
                errorTendencias:true,
                loadingTendencias:false
            }

        case actions.GET_POST_DETAIL_INIT:
            return{...state,
                errorPost:false,
                loadingPost:true
            }
        case actions.GET_POST_DETAIL_SUCCESS:
            return{...state,
                post: action.payload,
                errorPost: false,
                loadingPost: false,
            }
        case actions.GET_POST_DETAIL_ERROR:
            return{...state,
                errorPost:true,
                loadingPost:false
            }

        case actions.GET_ALL_LOCACIONES_INIT:
            return{...state,
                errorLocaciones:false,
                loadingLocaciones:true,
                locaciones:[]
            }
        case actions.GET_ALL_LOCACIONES_SUCCESS:
            return{...state,
                locaciones: action.payload,
                errorLocaciones: false,
                loadingLocaciones: false,
            }
        case actions.GET_ALL_LOCACIONES_ERROR:
            return{...state,
                errorLocaciones:true,
                loadingLocaciones:false
            }
        case actions.SET_LOCACION:
            return{...state,
                locacion:action.payload
            }

        case actions.GET_DRAFT_POSTS_INIT:
            return{...state,
                errorDraftPosts:false,
                loadingDraftPosts:true
            }
        case actions.GET_DRAFT_POSTS_SUCCESS:
            return{...state,
                draftPosts: action.payload,
                errorDraftPosts: false,
                loadingDraftPosts: false,
            }
        case actions.GET_DRAFT_POSTS_ERROR:
            return{...state,
                errorDraftPosts:true,
                loadingDraftPosts:false
            }

        case actions.GET_PUBLIC_POSTS_INIT:
            return{...state,
                errorPublicPosts:false,
                loadingPublicPosts:true
            }
        case actions.GET_PUBLIC_POSTS_SUCCESS:
            return{...state,
                publicPosts: action.payload,
                errorPublicPosts: false,
                loadingPublicPosts: false,
            }
        case actions.GET_PUBLIC_POSTS_ERROR:
            return{...state,
                errorPublicPosts:true,
                loadingPublicPosts:false
            }
        default:
            return state
    }
}