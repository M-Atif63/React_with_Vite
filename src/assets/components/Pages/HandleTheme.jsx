import React, { createContext, useState } from 'react'

const themeProvider = createContext()

function HandleTheme({children}) {
    const [changeTheme, setChangeTheme] = useState('light')

    const toggleTheme=()=>{
        if(changeTheme==='light'){
            setChangeTheme('dark')
        }
        if(changeTheme==='dark'){
            setChangeTheme('light')
        }
    }
    return (
        <themeProvider.Provider value={{changeTheme,toggleTheme}}>
            {children}
        </themeProvider.Provider> 
    )
}

export default HandleTheme
