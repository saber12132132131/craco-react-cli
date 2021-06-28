import './App.css';
import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Link
} from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import router from "./router/config";

import Store from './store/index';
// import Store from './mobx/index'
// import Store from "./saga/index"
import { Provider } from 'react-redux';
// import { Provider } from 'mobx-react';
console.log(Store);
function App() {
    return (
        <div className="App">
            <Provider store={Store}>
            {/* <Provider {...Store}> */}
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                            </ul>
                        </nav>
                        <Suspense fallback={<div style={{ color: 'red', fontSize: '90px' }}>Loading...</div>}>
                            <Switch>{renderRoutes(router)}</Switch>
                        </Suspense>

                    </div>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
