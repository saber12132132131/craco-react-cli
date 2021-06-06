import * as actionsTypes from "./actionTypes";
import {
  Map
} from "immutable";

//使用ImmutableJS的Map方法将JS对象转换为immutable对象
const defaultState = Map({
  number: 1,
});

export default function reducer(preState = defaultState, action) {

  switch (action.type) {

    case actionsTypes.ADD_COUNT:

      // 使用immutableJS避免每次用扩展运算符拷贝state，生成新的state
      return preState.set("number", preState.get("number") + action.num);
      // return {...preState, topBanners: action.topBanners}
    case actionsTypes.SUB_COUNT:
      return preState.set("number", preState.get("number") - action.num);

    default:
      return preState;
  }
}