import React from 'react'
import { BsPersonCircle} from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <h1 className='heading'>STUDENT DASHBOARD</h1> 
        <div className="header-right">
            <BsPersonCircle className='icon' />
        </div>
    </header>
  )
}

export default Header