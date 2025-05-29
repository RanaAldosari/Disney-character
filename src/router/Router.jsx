import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router";

import Home from '../pages/Home';
import Main from '../pages/Main';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import Signup from '../pages/Signup';
import Login from '../pages/Login';


function Layout(){
  return(
<>
<Nav></Nav>
<Outlet></Outlet>
<Footer></Footer>
</>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/home",
        element:<Main></Main>
      }
    ]
  },
]);


function Router() {
  return (
  <>
   <RouterProvider router={router} />
  </>
  )
}

export default Router