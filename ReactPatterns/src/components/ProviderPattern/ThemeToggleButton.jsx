import React from 'react'
import { useTheme } from './ThemeProvider'

const ThemeToggleButton = () => {
    const {setTheme} = useTheme()
  return (
    <div>
        <p style={{color:"black"}}>ThemeToggleButton</p>
        <button style={{backgroundColor:"lightpink", padding:"10px" ,borderRadius:"6px"}} onClick={() => setTheme((prev) => {
            if(prev === "light"){
                return "dark"
            }
            else{
                return "light"
            }

        })}>toggle theme</button>
    </div>
  )
}

export default ThemeToggleButton