import React, { useState } from 'react'

function BgColor() {

    const[color,setColor]=useState("Green")
   

  return (
    <>

    <div className='w-full h-screen ' style={{backgroundColor:color}}>


<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3  bg-white rounded-3xl px-3 py-2 shadow-xl'>

        <button onClick={()=>{setColor("red")}}
         className='outline-none px-4 py-1 rounded-full shadow-lg text-white ' style={{backgroundColor:"Red"}}>Red</button>
        <button  onClick={()=>{setColor("Green")}}
         className='outline-none px-4 py-1 rounded-full shadow-lg text-white ' style={{backgroundColor:"Green"}}>Green</button>
        <button  onClick={()=>{setColor("Yellow")}}
         className='outline-none px-4 py-1 rounded-full shadow-lg text-black ' style={{backgroundColor:"Yellow"}}>Yellow</button>

    </div>

</div>

    </div>
    
    </>
  )
}

export default BgColor