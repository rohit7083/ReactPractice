import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>numbers:{count}</h2>
      <button onClick={() =>setCount((count) => count + 1 )}> + </button> <br />
      {/* <button onClick={() =>setCount((count) => count - 1 )}> - </button> */}

      <br />


    </>
  )
}

export default App
