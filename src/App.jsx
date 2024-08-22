import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BgColor from './compo/BgColor'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<BgColor/>} />
     </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App
