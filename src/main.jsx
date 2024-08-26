import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import P4Layout from './P4Layout.jsx'
import Home from './P5ReactRouter/Home.jsx'
import About from './P5ReactRouter/About.jsx'
import Contact from './P5ReactRouter/Contact.jsx'
import User from './P5ReactRouter/User.jsx'
import Github, { githubInfoLoader } from './P5ReactRouter/Github.jsx'
// this is 1 way 

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element :<P4Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


//  this is 2 way 

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<P4Layout/>}>

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='github' loader={githubInfoLoader} element={<Github/>}/>

      <Route path='user/:userid' element={<User/>}/>



    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
