import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import HomePage from "../Pages/HomePage";
import LogIn from "../Form/LogIn";
import Register from "../Form/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    },
    {
        path: '/logIn',
        element: <LogIn />
    },
    {
        path: '/register',
        element: <Register />
    }
])