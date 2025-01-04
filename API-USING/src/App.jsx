import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL="http://localhost:3005"

function App() {
  const getAllUsers = async ()=>{
 const response =  await axios.get(`${BASE_URL}/users`);
 console.log(response.data)
  }
  
  const GetByIdUsers = async (userId)=>{
 const response = await  axios.get(`${BASE_URL}/users/${userId}`)
 console.log(response.data)
  }




  useEffect(()=>{
    // getAllUsers();
    GetByIdUsers(1);
  },[])



  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
