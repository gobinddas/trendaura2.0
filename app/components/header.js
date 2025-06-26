'use client'
import React, { useState } from 'react'
import { Menu, ShoppingCart, House, Shirt, Store, UserRound } from 'lucide-react';
import LoginSignup from './LoginSignup';

const Header = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className='header-section'>
      <div className='header-fix-bg'>
        <img src="./bg.jpg" />
      </div>



      <div className='container'>
        <div className='nav-bar'>
          <div className='brand'>
            <img src='./logo-dark.png' />
          </div>
          <ul className='nav'>
            <li><a>Home</a></li>
            <li><a>Collections</a></li>
            <li><a>Brand</a></li>

          </ul>



          <ul className='mobile-nav'>
            <li><a><House /> </a></li>
            <li><a> <Shirt /></a></li>
            <li><a>   <Store /></a></li>
            <li><a><UserRound /></a></li>
          </ul>

          <div className='quick-res'>

            <button onClick={()=>setShowLogin(true)} >Login</button>
            <div className='cart'>  <ShoppingCart className='icon' />
              <span>9</span>
            </div>
            <a className='profile'><UserRound className='icon' /></a>
          </div>
        </div>
      </div>

      
        <LoginSignup open={showLogin} onClose={()=>setShowLogin(false)} />
     

    </div>
  )
}

export default Header