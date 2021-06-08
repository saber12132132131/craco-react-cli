import React, { memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import downImg from "@/assets/images/download.png";
import { addNumber, subNumber } from "../../store/modules/home/actionCreators";
import {useHistory} from "react-router-dom"
import "./index.scss";
export default memo(function Home(props) {
  const { number } = useSelector(
    (state) => ({
      number: state.getIn(["home", "number"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const { route } = props;
  console.log(route);
  const history =useHistory()

  return (
    <div className="home-box">
      首页
      <img src={downImg} alt="" />
      <p>{number}</p>
      <button onClick={() => dispatch(addNumber(1))}>加1</button>
      <button onClick={() => dispatch(subNumber(1))}>减1</button>
      <div onClick={()=>history.push('/about')}>去About页面</div>

    </div>
  );
});
