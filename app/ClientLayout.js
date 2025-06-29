'use client'

import Header from './components/header'
import Footer from './components/Footer'
import { CartProvider } from './components/CartProvider'

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      <div className="background-fix">
        <img src="/bg.jpg" alt="Background" />
      </div>
      <Header />
      {children}
      <Footer />
    </CartProvider>
  )
}
