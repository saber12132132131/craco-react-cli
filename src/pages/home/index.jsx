import React from "react";
import { inject, observer } from "mobx-react";
import downImg from "@/assets/images/download.png";

import { useHistory } from "react-router-dom";
import "./index.scss";

const Home =(props) => {
  const { home } = props;
  const history = useHistory();

  return (
    <div className="home-box">
      首页
      <img src={downImg} alt="" />
      <p>{home.clickTime}</p>
      <p>{home.doneTime}</p>
      <button onClick={() => {home.addClickTime();}}>加1</button>
      <button onClick={() => {home.subClickTime()}}>减1</button>
      <div onClick={() => history.push("/about")}>去About页面</div>
    </div>
  );
  
};

export default inject('home')(observer(Home));