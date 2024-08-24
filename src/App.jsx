import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BgColor from './compo/BgColor'
import PassGen from './P3Password_gen/PassGen'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      {/* <Route path='/' element={<BgColor/>} /> */}
      <Route path ={'/'} element={<PassGen/>}/>
     </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App
