
import { useState } from 'react'
import './App.css'
import { use } from 'react'


function App() {
//   const [firstName,setFirstname]=useState('Aytuğ');
//   const [lastName,setLastname]=useState('Atasever');
//   const [names,setNames] = useState([
//     {
//       name:"Aytuğ",
//       surname:"Atasever",
//       Age:24
//    },
//    {
//     name:"Burak",
//     surname:"Belen",
//     Age:25
//    }
// ]);

  // const  handleChange = ()=>{
  //   setFirstname("Ayşenur");
  //   setLastname("Şimşek");
  // }

  //? const [users, setUsersInfo] = useState(["Mehmet12","Ali1","Veli2","Servan2"])

  // const [show , setShow] =useState(false);

  const [count,setCount] = useState(0);

  const arttir = ()=>{
    setCount(count+1);
  }

  console.log("Component render edildi");

  return (
      <>
      
       {/* <div>{firstName} {lastName}</div>
      { <div>
        <button onClick={()=>{setFirstname("Ayşenur"), setLastname("Sönmez")}}>İsmi Değiştir</button>
      </div> }
      <div>
        <button onClick={handleChange}>İsmi Değiştir</button>
      </div>  */}
      
      {/* {names.map((names,index)=>(
        <div key={index}>{names.name}</div>
      ))}
       */}
      
      {/* {users.map((user,index)=>(
        <div key={index}>{user}</div>
      ))} */}
      
      {/* <div>
        {show ? <p>Tebrikler</p> : <p>Başarısız</p>}
      </div> */}


        <div>
          {count}
        </div>

        <div>
          <button onClick={arttir}>Arttır</button>
        </div>



      
      </>
  )
}

export default App
