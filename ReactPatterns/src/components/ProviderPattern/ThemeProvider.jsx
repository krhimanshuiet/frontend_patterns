import React, { createContext, useContext, useState } from 'react'
const ThemeContext = createContext(null)
const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState("light")
  return (
    <React.Fragment>
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    </React.Fragment>
  )
}
function useTheme(){
    if(ThemeContext){
     
        return useContext(ThemeContext)
    }
    else{
        throw new Error("Theme can not be null.")
    }
}

export default ThemeProvider;
export {useTheme,ThemeContext}