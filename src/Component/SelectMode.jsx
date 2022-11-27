import React from 'react'
import { useState } from 'react'

export const SelectMode = ({
    darkMode,
    setdarkMode
}) => {
  
    const changeMode = () => {
        setdarkMode(!darkMode)
    }

    return (
        <img src={`${darkMode ? '../icon-sun.svg' : '../icon-moon.svg'}`} className='w-[30px] cursor-pointer z-20' onClick={() => changeMode()} />
  )
}
