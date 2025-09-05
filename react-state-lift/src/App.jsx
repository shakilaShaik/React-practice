import { useState } from 'react'

import './App.css'

function App() {
  const [temp, setTemp]=useState(0)
  const [scale, setScale]=useState("c")


 function convertToCelcius(temp){
 return temp+90
 } 

 function covertToForeign(temp){
  return temp +180
 }
const celcius=  scale==="f"?convertToCelcius(temp):temp
const foreign = scale ==="c"?covertToForeign(temp):temp


  const TempInput = (({scale, value})=>(
    <input type="number" 
    value={value} // controlled
    onChange={(e)=>{setTemp(e.target.value)}}
    placeholder={scale==="c" ? "celc": "for"}

    
    />
  ))
  return (
    <>
     <TempInput 
     value={celcius} 
     
     onChange={(value)=>{setTemp(value);setScale("c")}
     }
    
     >
     </TempInput>
     <TempInput 
     value={foreign}
    onChange ={(value)=>{setTemp(value);setScale("f")}}
     
     ></TempInput>
    </>
  )
}

export default App
