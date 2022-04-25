import {
    HTML_COUNT_REQUEST,
    HTML_COUNT_SUCCESS,
    HTML_COUNT_FAIL,
    HTML_PROJECT_REQUEST,
    HTML_PROJECT_SUCCESS,
    HTML_PROJECT_FAIL,
    HTML_DETAIL_REQUEST,
    HTML_DETAIL_SUCCESS,
    HTML_DETAIL_FAIL,
    CLEAR_ERRORS
} from '../constants/HtmlConstants'



export const htmlprojectReducer = (state = { htmlproject: [] }, action) => {
    switch (action.type) {

        case HTML_PROJECT_REQUEST:
            return {
                loading: true,
                htmlprojects: []
            }

        case HTML_PROJECT_SUCCESS:
            return {
                loading: false,
                htmlprojects: action.payload.htmlproducts
            }

        case HTML_PROJECT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const htmlvisitReducer = (state = { htmlvisit:{} },action) =>{
    switch(action.type){

    
            case HTML_COUNT_REQUEST:
            return{
                loading:true,
                htmlvisit: []
            }

          

                case HTML_COUNT_SUCCESS:
                    return{
                        loading:false,
                        htmlvisit:action.payload
                    }

               
         
                case HTML_COUNT_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }  
                
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }    

        default :
        return state;
    }
}



export const HtmlDetailReducer = (state = { Htmlproduct: {} }, action) => {
    switch (action.type) {


        case HTML_DETAIL_REQUEST:
            return {
                ...state,
                loading: true

            }
        case HTML_DETAIL_SUCCESS:
            return {
                loading: false,
                Htmlproduct: action.payload
            }

        case HTML_DETAIL_FAIL:
            return {
                loading: true,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


