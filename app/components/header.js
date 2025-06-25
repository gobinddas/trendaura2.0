import React from 'react'
import { Menu,ShoppingCart  } from 'lucide-react';

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
            <div className='quick-res'>
             
              <button>Login</button>
               <div className='cart'>  <ShoppingCart />
               <span>10</span>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header