import { useEffect, useState } from 'react'
import './App.css'
import axios, { Axios } from 'axios'

const BASE_URL="http://localhost:3005"

function App() {
//   const getAllUsers = async ()=>{
//  const response =  await axios.get(`${BASE_URL}/users`);
//  console.log(response.data)
//   }
  
//   const GetByIdUsers = async (userId)=>{
//  const response = await  axios.get(`${BASE_URL}/users/${userId}`)
//  console.log(response.data)
//   }


// const CreateUser = async (newUser)=>{
// const response = await axios.post(`${BASE_URL}/users`,newUser);
// console.log(response.data);
// }

// const updateUser= async (userId,updatedUser)=>{
//  const response = await axios.put(`${BASE_URL}/users/${userId}`,updatedUser);
//  console.log(response.data);
// }

// const DeleteUser = async (userId)=>{
//  await axios.delete(`${BASE_URL}/users/${userId}`)

// }


const getUserById= async(userId)=>{
  const response =await axios.get(`${BASE_URL}/users/${userId}`);
  return response.data.postId;
  }
  
  const getPostById =async (postId)=>{
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
  }
  
  
  const getPost= async()=>{
  const userResponse =await getUserById(2);
 const postData=await getPostById(userResponse);
 console.log(postData)
  }
  



  useEffect(()=>{
    getPost();
    // getAllUsers();
    // GetByIdUsers(1);
    // const newUser = {
    //   username:"mehmet",
    //   password:"1234"
    // }
    // CreateUser(newUser);

    // updateUser("3198",{
    //   "username":"Çilek",
    //   "password":"cilek123"
    // })

// DeleteUser("1");



  },[])



  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
