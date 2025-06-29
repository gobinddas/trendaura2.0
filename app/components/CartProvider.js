'use client'
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Add item to cart
 const addToCart = (product, options = {}, quantity = 1) => {
  setCart(prev => {
    const idx = prev.findIndex(
      item =>
        item.id === product.id &&
        item.selectedSize === options.selectedSize &&
        item.selectedColor === options.selectedColor
    )

    if (idx > -1) {
      const updated = [...prev]
      updated[idx] = {
        ...updated[idx], // copy existing item
        quantity: updated[idx].quantity + quantity, // safely increment
      }
      return updated
    }

    return [
      ...prev,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        discountPrice: product.discountPrice,
        mainImage: product.mainImage,
        selectedSize: options.selectedSize,
        selectedColor: options.selectedColor,
        quantity,
      },
    ]
  })
}


  // Remove item from cart
  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  // Update quantity
  const updateQuantity = (index, quantity) => {
    setCart(prev => {
      const updated = [...prev]
      updated[index].quantity = quantity
      return updated
    })
  }

  // Clear cart
  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}