import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BgColor from './compo/BgColor'
import PassGen from './P3Password_gen/PassGen'
import CurrencyIndex from './P4CustomHook/CurrencyIndex'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import Home from './P5ReactRouter/Home'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>

      {/* <Route path='/' element={<BgColor/>} /> */}
      {/* <Route path ={'/'} element={<PassGen/>}/> */}
      {/* <Route path='/' element={<CurrencyIndex/>}/> */}


<Route path='/' element={<Home/>}/>





     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
