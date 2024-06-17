import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "./assets/Main";
import Home from "./assets/Page/Home/Home";
import Manu from "./assets/Page/Manu/manu/Manu";
import Order from "./assets/Page/order/Order";
import Login from "./assets/Page/login/Login";
import SignUp from "./assets/Page/Home/signup/SignUp";
import Secret from "./assets/Page/secret/Secret";
import Privateroute from "./privateroute/Privateroute";
import Dashbord from "./assets/Layout/Dashbord";
import Cart from "./assets/Page/Dashbord/Cart";
import AllUsers from "./assets/Page/Dashbord/AllUsers"
import Additems from "./assets/Page/Dashbord/Additems";
import Adminroute from "./privateroute/Adminroute";
import ManageItems from "./assets/Page/Dashbord/ManageItems";
import Updateitems from "./assets/Page/Dashbord/Updateitems";
import Payment from "./assets/Page/Dashbord/Payment/Payment";
import Paymenthistory from "./assets/Page/Dashbord/paymenthistory/Paymenthistory";
import AdminHome from "./assets/Page/component/adminHome/AdminHome";
import UserHome from "./assets/Page/component/UserHome";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Manu></Manu>,
            },
            {
                path: "/order/:category",
                element: <Order></Order>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/secret",
                element: <Privateroute><Secret></Secret></Privateroute>,
            },




        ]
    },
    {
        path: "dashboard",
        element: <Privateroute><Dashbord></Dashbord></Privateroute>,
        children: [

            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymenthistory',
                element: <Paymenthistory></Paymenthistory>
            },
            // admin routes

            {
                path: 'adminHome',
                element: <Adminroute><AdminHome></AdminHome></Adminroute>
            },

            {
                path: 'addItems',
                element: <Adminroute><Additems></Additems></Adminroute>,
            },
            {
                path: 'users',
                element: <Adminroute><AllUsers></AllUsers></Adminroute>
            },
            {
                path: 'manageItems',
                element: <Adminroute><ManageItems></ManageItems></Adminroute>
            },
            {
                path: 'updateItem/:id',
                element: <Adminroute><Updateitems></Updateitems></Adminroute>,
                // loader: ({ params }) => fetch(`https://bistro-boss-server-three-eta.vercel.app/menu/${params.id}`)
            }


        ]
    }
]);