import React from "react";

import {
  Redirect
} from "react-router-dom";

const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));


const routes = [{
    path: "/",
    exact: true,
    render: () => < Redirect to = "/home" / > ,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path:'/about',
    component: About,
  }
];

export default routes;