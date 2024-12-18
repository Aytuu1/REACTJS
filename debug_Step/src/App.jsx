import { useState } from 'react'
import './App.css'

function App() {
const [vize1,setVize1] = useState(0);
const [vize2,setVize2] = useState(0);

const avg = ()=>{
  debugger;
  const collectResult = collect() / 2;
  write(collectResult);
}

const collect = ()=>{
  const result = vize1 + vize2;
  debugger;
  return result ;
}

const write = (result)=>{
  debugger;
  console.log(`Ortalama:${result}`)
}

  return (
    <>

    <div>
      <div><input type="number" value={vize1} onChange={(e)=>setVize1(Number(e.target.value))} /></div>
     </div>

     <div>
      <input type="number" value={vize2} onChange={(e)=>setVize2(Number(e.target.value))} />
     </div>

    <div>
      <button onClick={avg}>Ortalama Bul</button>
    </div>

   
     
    </>
  )
}

export default App
