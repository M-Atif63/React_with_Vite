import React, { useContext } from 'react'
import { themeProvider } from '../Pages/HandleTheme';

function Button(props) {
  const { changeTheme } = useContext(themeProvider)

  const buttonStyle = {
  };
  return (
    <div>
      <button style={{
        width: '90px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Inter', sans-serif",
        fontSize: '20px',
        fontWeight: '500',
        letterSpacing: '0.3px',
        backgroundColor: changeTheme === 'light' ? 'black' : 'white',
        color: changeTheme === 'light' ? 'white' : 'black',
        border: '1px solid #e2e8f0',
        borderRadius: '9999px',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        // transform: changeTheme==='light' ? 'scale(0.96)' : 'scale(1)',
        // boxShadow: changeTheme==='light'? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none',
        marginLeft: '15px',
        marginRight: '15px',
      }}>
        {props.title}
      </button>
    </div>
  )
}

export default Button
