import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

class About extends Component {
 
    click2 = () => {
        console.log(123);
    }

    render() {
        const { home } = this.props
        return (
            <div>
                <h1>关于</h1>
                <p>{home.clickTime}</p>
                <div onClick={() => this.click2()}>12312</div>
                <button onClick={() => home.addClickTime()}>ssssssss</button>
            </div>
        )
    }
}
export default inject('home')(observer(About))
