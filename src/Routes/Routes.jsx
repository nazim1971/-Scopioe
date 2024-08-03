import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/SignIn/Login";
import Register from "../components/SignIn/Register";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: '/dashboard',
          element: <Home/>
        },
       {
        path: '/',
        element: <Login/>
       },
       {
        path: '/register',
        element: <Register/>
       },
       
      ]
    },
  ]);

export default routes;