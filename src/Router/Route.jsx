import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import CardDetails from "../components/Home/CardDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch("/fake.json") 
            },
            {
                path: '/data/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: () => fetch('/fake.json') 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            }

        ]
    }
])
export default router;