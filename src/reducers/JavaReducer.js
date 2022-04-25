import {
    JAVA_COUNT_REQUEST,
    JAVA_COUNT_SUCCESS,
    JAVA_COUNT_FAIL,
    JAVA_PROJECT_REQUEST,
    JAVA_PROJECT_SUCCESS,
    JAVA_PROJECT_FAIL,
    JAVA_DETAIL_REQUEST,
    JAVA_DETAIL_SUCCESS,
    JAVA_DETAIL_FAIL,
    CLEAR_ERRORS  
} from '../constants/JavaConstants'



export const javaprojectReducer = (state = { javaproject: [] }, action) => {
    switch (action.type) {

        case JAVA_PROJECT_REQUEST:
            return {
                loading: true,
                project: []
            }

        case JAVA_PROJECT_SUCCESS:
            return {
                loading: false,
                project: action.payload.javaproducts
            }

        case JAVA_PROJECT_FAIL:
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




export const JavaDetailReducer = (state = { Javaproduct: {} }, action) => {
    switch (action.type) {


        case JAVA_DETAIL_REQUEST:
            return {
                ...state,
                loading: true

            }
        case JAVA_DETAIL_SUCCESS:
            return {
                loading: false,
                Javaproduct: action.payload
            }

        case JAVA_DETAIL_FAIL:
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





export const javavisitReducer = (state = { javavisit:{} },action) =>{
    switch(action.type){

    
            case JAVA_COUNT_REQUEST:
            return{
                loading:true,
                javavisit: []
            }

          

                case JAVA_COUNT_SUCCESS:
                    return{
                        loading:false,
                        javavisit:action.payload
                    }

               
         
                case JAVA_COUNT_FAIL:
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

