'use client'
import React, { useState } from 'react';
import { Plus, Minus, Trash } from 'lucide-react';
import { useCart } from './CartProvider';


const Cart = ({open, onClose}) => {

  const {cart, updateQuantity, removeFromCart} = useCart()

    // const[items, setItems] = useState(initialItems);

    if(!open) return null;

    // const handleAdd = (id) => {
    //     setItems(items =>
    //         items.map(item =>
    //             item.id === id ? {...item, quantity: item.quantity + 1} : item
    //         )
    //     )
    // }

    // const handleRemove = (id) =>{
    //     setItems(items =>
    //         items.map(item =>
    //             item.id === id && item.quantity > 1 ? {...item,quantity: item.quantity - 1} : item
    //         )
    //     )
    // }

    // const handleDelete = (id) => {
    //     setItems(items => items.filter(item => item.id !== id));
    // }

  


  return (
    <div className='cart-modal'>
        <button className='cart-close-btn' onClick={onClose} aria-label="Close Cart">X</button>
        <h3 className='block-heading'>Cart Items ({cart.length})</h3>
        <div className='cart-items-list'>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#888', padding: '32px 0' }}>
              Cart is empty
            </div>
          ) : (
            cart.map((item, index) => (
              <div className='cart-item' key={index}>
                  <img src={item.mainImage} alt={item.name} />
                  <div className='cart-item-info'>
                      <div className='cart-item-name'>
                          {item.name}
                      </div>
                      <div className='cart-item-size'>
                        Size :  {item.selectedSize}
                      </div>
                       <div className='cart-item-color'>Color: {item.selectedColor}</div>
                      <div className='cart-item-qty' >
                          <button aria-label="Decrease" onClick={()=> updateQuantity(index, Math.max(1, item.quantity - 1))}   > <Minus size={16} /></button>
                          <span> {item.quantity} </span>
                          <button aria-label="Increase" onClick={()=> updateQuantity(index, item.quantity + 1)}> <Plus size={16} /></button>
                      </div>
                  </div>
                  <button className='cart-item-delete' onClick={()=>removeFromCart(index)}><Trash size={18} /></button>
              </div>
            ))
          )}
        </div>
    </div>
  )
}

export default Cart