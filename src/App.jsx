import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BgColor from './compo/BgColor'
import PassGen from './P3Password_gen/PassGen'
import CurrencyIndex from './P4CustomHook/CurrencyIndex'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      {/* <Route path='/' element={<BgColor/>} /> */}
      {/* <Route path ={'/'} element={<PassGen/>}/> */}
<Route path='/' element={<CurrencyIndex/>}/>

     </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App
