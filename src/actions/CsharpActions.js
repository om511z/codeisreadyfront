import axios from 'axios'
import { CSHARP_PROJECT_SUCCESS,
         CSHARP_PROJECT_REQUEST,
         CSHARP_PROJECT_FAIL,
         CSHARP_COUNT_REQUEST,
         CSHARP_COUNT_SUCCESS,
         CSHARP_COUNT_FAIL,
         CSHARP_DETAIL_REQUEST,
         CSHARP_DETAIL_SUCCESS,
         CSHARP_DETAIL_FAIL,
         CLEAR_ERRORS
} from "../constants/CsharpConstants";


export const getcsharpProjects = () => async (dispatch) =>{
    try{

        dispatch({ type:CSHARP_PROJECT_REQUEST})

        const {data} = await axios.get('https://codeisreadyapi.herokuapp.com/api/v2/getCsharpProjects')

        dispatch({
            type:CSHARP_PROJECT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:CSHARP_PROJECT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getcsharpvisitors = () => async (dispatch) =>{
    
    try{

        dispatch({ type: CSHARP_COUNT_REQUEST})

        const {data} = await axios.get('https://codeisreadyapi.herokuapp.com/api/v2/count')

        dispatch({
            type:CSHARP_COUNT_SUCCESS,
            payload: data.visitor
        })
    } catch(error){
        dispatch({
            type:CSHARP_COUNT_FAIL,
            payload:error.response.data.message
        })
    }
    
}



export const getcsharpDetailsProject = (id) => async (dispatch) =>{
    try{

        dispatch({ type:CSHARP_DETAIL_REQUEST})

        const {data} = await axios.get(`https://codeisreadyapi.herokuapp.com/api/v2/getCsharpProjects/${id}`)

        dispatch({
            type:CSHARP_DETAIL_SUCCESS,
            payload:data.product
        })
    } catch(error){
        dispatch({
            type:CSHARP_DETAIL_FAIL,
            payload:error.response.data.message
        })
    }
}

    //clear errors
    export const clearErrors = () => async (dispatch) =>{
        dispatch({
            type:CLEAR_ERRORS
        })
    }