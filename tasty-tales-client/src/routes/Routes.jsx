import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Errorpage from "../pages/Errorpage/Errorpage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
import Recipes from "../pages/Recipes/Recipes";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/chef/:id',
                element:<PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://tasty-tales-server-arafatkh999.vercel.app/chefs/${params.id}`)
                
            },
            {
                path:'/blog',
                element:<Blog></Blog>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);

export default router;