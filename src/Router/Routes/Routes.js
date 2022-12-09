import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Order from "../../Pages/Order/Order";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter>,
                loader: ({ params }) => fetch(`https://genius-car-server-henna-six.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRouter><Order></Order></PrivateRouter>,
            }
        ]
    }
]);

export default router;