'use client'

import Header from './components/header'
import Footer from './components/Footer'
import { CartProvider } from './components/CartProvider'
import { WishlistProvider } from './components/WishlistContext'

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      <WishlistProvider>
      <div className="background-fix">
        <img src="/bg.jpg" alt="Background" />
      </div>
      <Header />
      {children}
      <Footer />
      </WishlistProvider>
    </CartProvider>
  )
}
