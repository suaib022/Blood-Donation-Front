import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import HomePage from "../Pages/HomePage";


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
    }
])