import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
        <h1>Todo List</h1>
    </header>
  )
}

const headerStyle = {
   
    textAlign: 'center',
    color: 'white',
    padding: '75px',
    backgroundImage:'linear-gradient(to right top, #210537, #300f5d, #391d88, #372db8, #1241eb)',

}

export default Header;
