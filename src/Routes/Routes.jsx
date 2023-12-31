import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ViewDetails from "../Pages/AllToys/ViewDetails";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://wonder-toy-server-one.vercel.app/altoys')
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute>
                    <ViewDetails></ViewDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://wonder-toy-server-one.vercel.app/altoys/${params.id}`)
            },
            {
                path: '/mytoys',
                element: <PrivateRoute>
                    <MyToys></MyToys>
                </PrivateRoute>
            },
            {
                path:'/updatetoy/:id',
                element:<UpdateToy></UpdateToy>,
                loader:({params}) => fetch(`https://wonder-toy-server-one.vercel.app/altoys/${params.id}`)
            },
            {
                path: '/addtoy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;