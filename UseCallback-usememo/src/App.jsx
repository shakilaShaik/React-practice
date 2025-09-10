import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)
 const name="shammu"
 const handleButton=useCallback(()=>{setCount(prev=>prev+1)},[])
  
 const func=(a,b)=>{
  const nums=[]
  console.log("function called")
for (let i=a;i<b;i++){
 
  nums.push(i)
}
  return nums
}
 const numbers=useMemo(()=>
  func(120,140),[])

  return (
    <>
    <Navbar  handleButton={handleButton}/>
    <div className='bg-red-50 text-center'>Hii shammu</div>
     <div>{count}</div>
     {
      numbers.map((val,idx)=>{
        return <li key={idx}>{val}</li>
      }
      )
     }
     
     
     </>
  )
}

export default App
