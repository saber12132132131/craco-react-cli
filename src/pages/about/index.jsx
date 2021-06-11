import "./index.scss";

import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("home")
@observer
class About extends Component {
  render() {
    const { home,history } = this.props;
    return (
      <div>
        <p>About</p>
        <p>{home.clickTime}</p>
        <p>{home.doneTime}</p>
        <button
          onClick={() => {
            home.addClickTime();
          }}
        >
          加1
        </button>
        <button
          onClick={() => {
            home.subClickTime();
          }}
        >
          减1
        </button>
        <div onClick={() => history.push("/")}>去首页</div>
      </div>
    );
  }
}
export default About;
