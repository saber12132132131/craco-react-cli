import * as allAction from './actionTypes';

// Set 数组结构
import {
    Map
} from 'immutable';

//使用ImmutableJS的Map方法将JS对象转换为immutable对象
const defaultState = Map({
    title: '旧TITLE',
});

const reducer = (preStatus = defaultState, action) => {
    switch (action.type) {
        case allAction.REQUESTED:
            // 使用immutableJS避免每次用扩展运算符拷贝state，生成新的state
            return preStatus.set("title", action.newTitle);
        case allAction.SUCCESS:
            // 使用immutableJS避免每次用扩展运算符拷贝state，生成新的state
            return preStatus.set("title", action.newTitle);
        case allAction.FAIL:
            // 使用immutableJS避免每次用扩展运算符拷贝state，生成新的state
            return preStatus.set("title", action.newTitle);
        default:

            return preStatus
    }
}

export default reducer;