import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import allReducer from "./modules/reducer";


let middlewareList =[thunk,logger];

let store = process.env.NODE_ENV === 'production' ? (
  createStore(allReducer, applyMiddleware(...middlewareList))
) : (
  window.__REDUX_DEVTOOLS_EXTENSION__ ? (
      createStore(allReducer, compose(applyMiddleware(...middlewareList), window.__REDUX_DEVTOOLS_EXTENSION__()))
  ) : (
      createStore(allReducer, applyMiddleware(...middlewareList))
  )
)

export default store