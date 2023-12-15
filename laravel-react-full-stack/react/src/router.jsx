import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/SignUp";
import Users from "./views/Users";
import NotFound from "./views/NotFound.jsx";

const router = createBrowserRouter ( [

    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/signup',
        element: <Signup />
    },

    {
        path: '/users',
        element: <Users />
    },

    {
        path: '*',
        element: <NotFound />
    },
])

export default router;