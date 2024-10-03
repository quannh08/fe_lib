import LayoutDefault from "../LayoutDefault"
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
                path:"/bookstore",
                element:<BookStore/>
            },
            {
                path:"/detail",
                element:<DetailBook/>
            }
        ]
    }
]