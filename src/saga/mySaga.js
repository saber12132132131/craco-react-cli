import {
   call,
   put,
   takeEvery,
   takeLatest,
   all,
   fork
} from 'redux-saga/effects'
import {
   SUCCESS,
   FAIL,REQUESTED
} from "./actionTypes";


// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
 
   try {
      // throw new Error("请求失败");
      const Api = () => fetch("https://sportsapi.hskjsj.com/api/v3/match/getSlideEvents").then((res) => {
         return res.text()
      })
      const user = yield call(Api);
      let res = JSON.parse(user)
      yield put({
         type: SUCCESS,
         newTitle: res.data.slide[0].id
      });
   } catch (error) {
      yield put({
         type: FAIL,
         newTitle: '请求失败...'
      });
   }

}

export default function* mySaga() {
   yield all([
      takeEvery(REQUESTED, fetchUser)
   ])
   // yield takeEvery(REQUESTED, fetchUser)
}