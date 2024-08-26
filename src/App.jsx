import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BgColor from './compo/BgColor'
import PassGen from './P3Password_gen/PassGen'
import CurrencyIndex from './P4CustomHook/CurrencyIndex'
import Header from './P5ReactRouter/Header'
import Footer from './P5ReactRouter/Footer'
import Home from './P5ReactRouter/Home'
function App() {

  return (
    <>
     {/* <BrowserRouter>
     <Routes> */}

      {/* <Route path='/' element={<BgColor/>} /> */}
      {/* <Route path ={'/'} element={<PassGen/>}/> */}
      {/* <Route path='/' element={<CurrencyIndex/>}/> */}
      {/* <Route path='/' element={<Home/>}/> */}

     {/* </Routes>
     </BrowserRouter> */}


     
    <Header/>
    {/* <Home/> */}
    {/* <Footer/> */}
    </>
  )
}

export default App
