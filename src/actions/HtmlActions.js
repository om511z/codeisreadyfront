import axios from "axios";
import {
    HTML_COUNT_SUCCESS,
    HTML_COUNT_REQUEST,
    HTML_COUNT_FAIL,
    HTML_PROJECT_SUCCESS,
    HTML_PROJECT_REQUEST,
    HTML_PROJECT_FAIL,
    HTML_DETAIL_REQUEST,
    HTML_DETAIL_SUCCESS,
    HTML_DETAIL_FAIL,
    CLEAR_ERRORS
} from '../constants/HtmlConstants'




export const gethtmlProjects = () => async (dispatch) =>{
    try{

        dispatch({ type:HTML_PROJECT_REQUEST})

        const {data} = await axios.get('https://codeisreadyapi.herokuapp.com/api/v2/gethtmlprojects')

        dispatch({
            type:HTML_PROJECT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:HTML_PROJECT_FAIL,
            payload:error.response.data.message
        })
    }
}



export const gethtmlvisitors = () => async (dispatch) =>{
    
    try{

        dispatch({ type: HTML_COUNT_REQUEST})

        const {data} = await axios.get('https://codeisreadyapi.herokuapp.com/api/v2/html/count')

        dispatch({
            type:HTML_COUNT_SUCCESS,
            payload: data.visitor
        })
    } catch(error){
        dispatch({
            type:HTML_COUNT_FAIL,
            payload:error.response.data.message
        })
    }
    
}




export const gethtmlDetailsProject = (id) => async (dispatch) =>{
    try{

        dispatch({ type:HTML_DETAIL_REQUEST})

        const {data} = await axios.get(`https://codeisreadyapi.herokuapp.com/api/v2/gethtmlProjects/${id}`)

        dispatch({
            type:HTML_DETAIL_SUCCESS,
            payload:data.Htmlproduct
        })
    } catch(error){
        dispatch({
            type:HTML_DETAIL_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
