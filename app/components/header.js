'use client'
import React, { useState } from 'react'
import { Menu, ShoppingCart, House, Shirt, Store, UserRound } from 'lucide-react';
import LoginSignup from './LoginSignup';
import Cart from './Cart';
import Link from 'next/link';
import { useCart } from './CartProvider';

const Header = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const{cart} = useCart()
  const totalItems = cart.reduce((sum, item)=> sum + item.quantity, 0)

  return (
    <div className='header-section'>
      <div className='header-fix-bg'>
        <img src="/bg.jpg" />
      </div>



      <div className='container'>
        <div className='nav-bar'>
          <div className='brand'>
            <img src='/logo-dark.png' />
          </div>
          <ul className='nav'>
            <li><Link href="./">Home</Link></li>
            <li><Link href="./collection">Collections</Link></li>
            <li><Link href="./brand">Brand</Link></li>

          </ul>



          <ul className='mobile-nav'>
            <li><Link href="./"><House /> </Link></li>
            <li><Link href="./collection"> <Shirt /></Link></li>
            <li><Link href="./brand"> <Store /></Link></li>
            <li><Link href="./profile"><UserRound /></Link></li>
          </ul>

          <div className='quick-res'>

            <button onClick={() => setShowLogin(true)} >Login</button>
            <div className='cart' onClick={()=> setShowCart((prev)=> !prev)}   >  <ShoppingCart className='icon' />
              <span>{totalItems}</span>
            </div>
            <Link href="./profile" className='profile'><UserRound className='icon' /></Link>
          </div>
        </div>
      </div>


      <LoginSignup open={showLogin} onClose={() => setShowLogin(false)} />

      <Cart open={showCart} onClose={()=> setShowCart(false)}    />



    </div>
  )
}

export default Header