import React from 'react'
import { logo_uri } from '../utilis/constant'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utilis/useOnlineStatus'
import { useSelector } from 'react-redux'

export const Header = () => {
  const onlinestatus = useOnlineStatus();

  // subscribing the store 
  const dataitems = useSelector(store=>store.cart.items);
  //console.log(dataitems);

  return (
    <div className='Header'>

        <div className='Logo-container'>
            <img src={logo_uri} alt="Food Logo"></img>
        </div>

        <div className='nav-items'>
            <ul>

                <Link> {
                  onlinestatus?'🟢':'🔴'
                }</Link>
                <Link to="/">Home🏡</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us☎</Link>
                <Link to="/cart">🛒{dataitems.length}</Link>
            </ul>

        </div>

    </div>
  )
}
