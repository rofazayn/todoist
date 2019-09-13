import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='./images/logo.png' alt='Todoist'></img>
        </div>
        <div className='settings'>
          <ul>
            <li>
              <FaPizzaSlice /> Pizza Slice
            </li>
            <li>+</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
