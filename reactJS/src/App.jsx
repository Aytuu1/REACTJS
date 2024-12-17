import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let firstName ="Ali";
  let vize1 = 70;
  let vize2 = 80;
  let result = true;

  let names = [
    "Enes",
    "Ayşenur",
    "Kübra",
    "Adem"
  ]
return(
  // <div>Kullanicinin ismi : {firstName}</div>
  // <p>Ortalama: {(vize1 + vize2)/2}</p>
  <div>
    {/* {result ? <p>Sınavı geçtinizz</p> : <p>Sınavı geçemediniz</p>} */}
    {/* {(vize1 + vize2)/2 >= 50 ? <p>Geçtiniz</p> : <p>Kaldınız</p>} */}
    {/* {
      names.map((name,index)=>(
        <div style={{display:'flex', flexDirection:'row',justifyContent:'center',margin:'20px 10px'}} key={index}>{index}.{name}</div>
      ))
    } */}
    
</div>

)
}
export default App
