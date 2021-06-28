import {
    TITLE
} from './actionTypes';

export const AddTtitle = val => ({
    type: TITLE,
    newTitle: val
})


export const getTitle = () => {
    return async (dispatch) => {
        const Api = () => fetch("https://sportsapi.hskjsj.com/api/v3/match/getSlideEvents").then((res) => {
            return res.text()
        })
        const user = await Api();
        let res = JSON.parse(user)
        const action = AddTtitle(res.data.slide[0].id)
        dispatch(action)
    }
}