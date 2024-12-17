import React from 'react'

export const users =[
  {
    username:"Mehmet123",
    password:"1",
  },
  {
    username:"Ali",
    password:"2"
  }
]

function Login() {
  return (
  
    <div>
      <div>
      <p>Kullanici adiniz</p>
      <input type="text" />
      </div>
    
    <div>
      <p>Şifreniz</p>
    <input type="text" />
    </div>
    
    <button>Giriş yap</button>
    </div>
  )
}

export default Login