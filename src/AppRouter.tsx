import React, {useContext} from "react";
import {createBrowserRouter} from "react-router-dom";
import * as ROUTES from "./constants/routes/route"
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import AppView
 from "./AppView";
 
export const appRouter = createBrowserRouter([
    {
        path: ROUTES.APP.INDEX,
        element: <AppLayout/>,
        children:[
            {
                index:true,
                element: <HomePage/>
            },
            {
                path:ROUTES.APP.VIEW,
                element:<AppView/>
            }
        ]
    }
])
