import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { CsharpDetailReducer, csharpprojectReducer,csharpvisitReducer} from './reducers/CsharpReducer'
import { HtmlDetailReducer, htmlprojectReducer, htmlvisitReducer } from './reducers/HtmlReducer'
import { javavisitReducer,javaprojectReducer,JavaDetailReducer } from './reducers/JavaReducer'
const reducer = combineReducers({
 
    csharpprojects:csharpprojectReducer,
    CsharpDetail:CsharpDetailReducer,
    csharpvisit:csharpvisitReducer,
    htmlprojects:htmlprojectReducer,
    htmlvisit:htmlvisitReducer,
    HtmlDetail:HtmlDetailReducer,
    javavisit:javavisitReducer,
    javaproject:javaprojectReducer,
    JavaDetail:JavaDetailReducer

})

let initialState={}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;