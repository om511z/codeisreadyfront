import axios from "axios";
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


export const getjavavisitors = () => async (dispatch) =>{
    
    try{

        dispatch({ type: JAVA_COUNT_REQUEST})

        const {data} = await axios.get('https://codeisreadyapi.herokuapp.com/api/v2/java/count')

        dispatch({
            type:JAVA_COUNT_SUCCESS,
            payload: data.visitor
        })
    } catch(error){
        dispatch({
            type:JAVA_COUNT_FAIL,
            payload:error.response.data.message
        })
    }
    
}


export const getjavaProjects = () => async (dispatch) =>{
    try{

        dispatch({ type:JAVA_PROJECT_REQUEST})

        const {data} = await axios.get('https://codeisreadyapi.herokuapp.com/api/v2/java/project')

        dispatch({
            type:JAVA_PROJECT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:JAVA_PROJECT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const getJavaDetailsProject = (id) => async (dispatch) =>{
    try{

        dispatch({ type:JAVA_DETAIL_REQUEST})

        const {data} = await axios.get(`https://codeisreadyapi.herokuapp.com/api/v2/getjavaProjects/${id}`)

        dispatch({
            type:JAVA_DETAIL_SUCCESS,
            payload:data.Javaproduct
        })
    } catch(error){
        dispatch({
            type:JAVA_DETAIL_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}

