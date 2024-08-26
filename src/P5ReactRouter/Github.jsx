import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData();


    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rohit7083')
    //         .then(response=>response.json()) //convert string to json format 
    //         .then(data=>{
    //             console.log(data);
    //             setdata(data)
                
    //         })
    // },[])
  return (
    <>
    <div className='bg-orange-400 text-2xl text-center'>
        <h1  >GitHub -Total Repo : {data.public_repos}</h1>
        <img src={data.avatar_url} alt="git picture " width={300}/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader= async()=>{
    const response=await fetch('https://api.github.com/users/rohit7083')

    return response.json()
}