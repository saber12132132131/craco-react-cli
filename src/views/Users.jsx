import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {withRouter} from "react-router-dom"
import { connect } from "react-redux"
import { AddTtitle } from "../saga/activeCreate"


class Users extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>users</h1>
                <p>{this.props.title}</p>
                <div onClick={() => this.props.changTitle()}>saga</div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        title: state.get("title")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changTitle: bindActionCreators(AddTtitle, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users))