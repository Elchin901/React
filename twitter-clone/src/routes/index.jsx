import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:'/',
        element:'anasayfa componenti',
    },
    {
        path:'/explore',
        element:'explore component',
    },
    {
        path:'/notifications',
        element:'bildirimler component'
    }
])

export default routes;