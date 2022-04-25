import {
    CSHARP_PROJECT_REQUEST,
    CSHARP_PROJECT_SUCCESS,
    CSHARP_PROJECT_FAIL,
    CSHARP_COUNT_REQUEST,
    CSHARP_COUNT_SUCCESS,
    CSHARP_COUNT_FAIL,
    CSHARP_DETAIL_REQUEST,
    CSHARP_DETAIL_SUCCESS,
    CSHARP_DETAIL_FAIL,
    CLEAR_ERRORS
} from "../constants/CsharpConstants"


export const csharpprojectReducer = (state = { csharpproject: [] }, action) => {
    switch (action.type) {

        case CSHARP_PROJECT_REQUEST:
            return {
                loading: true,
                projects: []
            }

        case CSHARP_PROJECT_SUCCESS:
            return {
                loading: false,
                projects: action.payload.csharpproject
            }

        case CSHARP_PROJECT_FAIL:
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

export const CsharpDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {


        case CSHARP_DETAIL_REQUEST:
            return {
                ...state,
                loading: true

            }
        case CSHARP_DETAIL_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case CSHARP_DETAIL_FAIL:
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



export const csharpvisitReducer = (state = { csharpvisit: {} }, action) => {
    switch (action.type) {


        case CSHARP_COUNT_REQUEST:
            return {
                loading: true,
                csharpvisit: []
            }



        case CSHARP_COUNT_SUCCESS:
            return {
                loading: false,
                csharpvisit: action.payload
            }



        case CSHARP_COUNT_FAIL:
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


