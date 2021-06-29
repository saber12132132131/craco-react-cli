/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import {
    combineReducers
} from "redux-immutable";

import homeReducer from './modules/index'


//合并reducer
//使用redux-immutable中的combineReducers性能优化，保证每次传入的是新对象
export default combineReducers({
    home: homeReducer,
});