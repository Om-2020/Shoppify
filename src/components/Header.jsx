import React from 'react'
import { logo_uri } from '../utilis/constant'

export const Header = () => {
  return (
    <div className='Header'>

        <div className='Logo-container'>
            <img src={logo_uri} alt="Food Logo"></img>
        </div>

        <div className='nav-items'>
            <ul>
                <li>Home🏡</li>
                <li>About us</li>
                <li>Contact us☎</li>
                <li>Cart🛒</li>
            </ul>

        </div>

    </div>
  )
}
