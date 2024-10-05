import LayoutDefault from "../LayoutDefault"
import Category from "../pages/Category/Category"
import DetailBook from "../pages/DetailBook/DetailBook"
import Home from "../pages/Home"
import BookStore from "../pages/storeBooks"
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
            }
        ]
    }
]