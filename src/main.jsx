import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import P4Layout from './P4Layout.jsx'
import Home from './P5ReactRouter/Home.jsx'
import About from './P5ReactRouter/About.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element :<P4Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
