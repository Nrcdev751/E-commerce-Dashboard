import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Overview from './Overview';
import Inventory from './Inventory';
import Sales from './Sales';
import Customer from './Customer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview/>,
  },
  { 
    path: "/Sales",
    element: <Sales/>,
  },
  {  
    path: "/Inventory",
    element: <Inventory/>,
  },
  {  
    path: "/Customer",
    element: <Customer/>,
  },
  {  
    path: "/E-commerce-Dashboard",
    element: <Overview/>,
  },
// ส่วนของ path และ element เราสามารถเพิ่มมาอีกได้เรื่อย ๆ กรณีที่เรามีหลายเพจ
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);