import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TITLE } from "../store/modules/actionTypes.js";
import { getTitle } from "../store/modules/activeCreate";

const mapStateToProps = (state) => {
  return {
    title: state.getIn(["home", "title"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changTitle: () => dispatch(getTitle()),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class Home extends PureComponent {
  state = {};
  // shouldComponentUpdate(nextProps, nextState){
  //     console.log(nextProps, nextState,111111);
  //     return true
  // }

  render() {
    return (
      <div>
        <h1>侯爷</h1>
        <p>{this.props.title}</p>
        {/* <button onClick={()=>this.props.changTitle('新Title')}>改变tITLE</button> */}
        <button onClick={() => this.props.changTitle()}>改变tITLE</button>
      </div>
    );
  }
}

// const mapStateToProps =(state)=>{
//     return {
//         title: state.get("title")
//     }
// }
// const mapDispatchToProps =(dispatch)=>{
//     return {
//         changTitle: ()=>dispatch(getTitle())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Home)

export default Home;
