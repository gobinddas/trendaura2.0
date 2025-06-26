import React from 'react'
import { Menu, ShoppingCart, House, Shirt, Store, UserRound } from 'lucide-react';

const Header = () => {
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

            <button>Login</button>
            <div className='cart'>  <ShoppingCart className='icon' />
              <span>9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header