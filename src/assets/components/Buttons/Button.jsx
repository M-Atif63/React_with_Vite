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
        backgroundColor: 'inherit',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        marginLeft: '15px',
        marginRight: '15px',
      }}>
        {props.title}
      </button>
    </div>
  )
}

export default Button
