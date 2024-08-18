import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assests/css/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { More } from "./components/More/More.jsx";


const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
},
{
  path:'/More',
  element:<More/>,
  
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
