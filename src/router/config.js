import React from 'react';
import { Redirect } from 'react-router-dom';
const About = React.lazy(() => import("../views/About"));
const Home = React.lazy(() => import("../views/Home"));
const Users = React.lazy(() => import("../views/Users"));

const routes = [
    {
        path: "/",
        exact: true,
        render: () => < Redirect to = "/home" />
    },
    {
        path: "/home",
        exact: true,
        component: Home
    },
    // {
    //     path: "/about",
    //     exact: true,
    //     component: About
    // },
    {
        path: "/users",
        exact: true,
        component: Users
    },
];

export default routes;