import React from 'react'
import { memo } from 'react'

const Navbar = ({handleButton}) => {
    console.log("navbar rendered")
  return (

    <div className=' bg-amber-300 h-20 text-center'>
      Hello i am navbar
  <button className='bg-black text-white'  onClick={()=>handleButton()}>click me</button>

      
    </div>
  )
}

export default  memo(Navbar) // it memoises the function ref 
// so it wont re render until the prop means the function changes
// that is passed using use call back
