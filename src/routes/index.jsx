import LayoutDefault from "../LayoutDefault"
import Login from "../Login/Login"
import Logout from "../Logout/Logout"
import Category from "../pages/Category/Category"
import DetailBook from "../pages/DetailBook/DetailBook"
import Home from "../pages/Home"
import BookStore from "../pages/storeBooks"
import Register from "../register/Register"

export const routes=[
    {
        path:"/",
        element:<LayoutDefault/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/category/:item",
                element:<Category/>
            },
            {
                path:"/bookstore",
                element:<BookStore/>
            },
            {
                path:"books/:id",
                element:<DetailBook/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/logout",
                element:<Logout/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    }
]