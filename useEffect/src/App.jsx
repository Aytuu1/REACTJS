import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const  [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState(''); 

 useEffect(()=>{
  console.log("Her zaman çalışır.");
 })

 useEffect(()=>{
  console.log("İlk render edildiğinde çalışır.");
 },[])

 useEffect(()=>{
  console.log("İlk render edildiğinde ve FIRSTNAME state'nin değeri değiştiğinde çalışır.");
 },[firstName])

 useEffect(()=>{
  console.log("İlk render edildiğinde ve LASTNAME state'nin değeri değiştiğinde çalışır")
 },[lastName])

 useEffect(()=>{
  console.log("İlk render edildiğinde ve LASTNAME , FİRSTNAME state'nin değeri değiştiğinde çalışır");
 },[lastName,firstName])
  return (
    <>
      <div>
        <button onClick={()=>setFirstName('Enes')}>Adı değiştir</button>
        <button onClick={()=>setLastName('Belen')}>Soyadı değiştir</button>
      </div>
    </>
  )
}

export default App
