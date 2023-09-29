import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import ErrorPage from './ErrorPage';
import Donation from './Donation/Donation.JSX';
import Statistics from './Statistics/Statistics.JSX';
import Base from './Base/Base';
import ShowDetails from './ShowDetails/ShowDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: '/donation',
        element: <Donation/>
      },
      {
        path: '/statistics',
        element: <Statistics/>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: '/showDetails/:id',
        loader: () => fetch('/donation.json'),
        element: <ShowDetails/>
      },
      // {
      //   path: '/testing',
      //   element: <Testing/>
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
