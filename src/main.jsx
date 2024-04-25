import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Coffee from './Components/Coffee.jsx';
import Home from './Components/Home.jsx';
import UpdatedCoffee from './Components/UpdatedCoffee.jsx';
import SignUp from './Athentication/SignUp.jsx';
import SignIn from './Athentication/SignIn.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import User from './Components/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffe-store-server-lilac.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <Coffee></Coffee>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdatedCoffee></UpdatedCoffee>,
    loader: ({ params }) => fetch(`https://coffe-store-server-lilac.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/users',
    element: <User></User>,
    loader: () => fetch('https://coffe-store-server-lilac.vercel.app/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
