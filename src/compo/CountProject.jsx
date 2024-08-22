import { useState } from 'react'

function CountProject() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>numbers:{count}</h2>

      {/* <button onClick={() =>setCount((count) => count + 1 )}> + </button> <br />
      <button onClick={() =>setCount((count) => count - 1 )}> - </button> */}

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br />


    </>
  )
}

export default CountProject
