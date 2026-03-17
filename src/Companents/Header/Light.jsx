import React, { useState } from 'react'

const Light = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <div>
      <button onClick={toggleTheme}></button>
    </div>
  )
}


export default Light