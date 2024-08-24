import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BgColor from './compo/BgColor'
import PassGen from './P3Password_gen/PassGen'
import Currency from './P4CustomHook/Currency'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      {/* <Route path='/' element={<BgColor/>} /> */}
      {/* <Route path ={'/'} element={<PassGen/>}/> */}
<Route path='/' element={<Currency/>}/>

     </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App
