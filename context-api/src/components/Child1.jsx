import React from 'react'
import { ThemeContext } from '../ContextApi.jsx'
import { useContext } from 'react'

const Child1 = () => {
  const {theme, toggleTheme}=useContext(ThemeContext)
  return (
    <div
    
className='bg-amber-500 '
    >
      <button onClick={toggleTheme} className='bg-black text-white'>clicke me</button>
      <h1>{theme}</h1>
    </div>

  )
}

export default Child1