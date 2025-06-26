'use client'
import React, { useState } from 'react';
import { Plus, Minus, Trash } from 'lucide-react';

const initialItems = [
    {id: 1, img: './banner1.jpg', name:"Clothing Item one", quantity:1, size:'M'},
    {id:2, img:'./banner2.jpg', name:"Clothing Item two", quantity:2, size:"L" },
    {id:3, img:'./banner3.jpg', name:'Clothing Item three', quantity:3, size:'S'},
]

const Cart = ({open, onClose}) => {

    const[items, setItems] = useState(initialItems);

    if(!open) return null;

    const handleAdd = (id) => {
        setItems(items =>
            items.map(item =>
                item.id === id ? {...item, quantity: item.quantity + 1} : item
            )
        )
    }

    const handleRemove = (id) =>{
        setItems(items =>
            items.map(item =>
                item.id === id && item.quantity > 1 ? {...item,quantity: item.quantity - 1} : item
            )
        )
    }

    const handleDelete = (id) => {
        setItems(items => items.filter(item => item.id !== id));
    }

  


  return (
    <div className='cart-modal'>
        <button className='cart-close-btn' onClick={onClose} aria-label="Close Cart">X</button>
        <h3 className='block-heading'>Cart Items ({items.length})</h3>
        <div className='cart-items-list'>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#888', padding: '32px 0' }}>
              Cart is empty
            </div>
          ) : (
            items.map((item) => (
              <div className='cart-item' key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div className='cart-item-info'>
                      <div className='cart-item-name'>
                          {item.name}
                      </div>
                      <div className='cart-item-size'>
                        Size :  {item.size}
                      </div>
                      <div className='cart-item-qty' >
                          <button aria-label="Decrease" onClick={()=> handleRemove(item.id)}   > <Minus size={16} /></button>
                          <span> {item.quantity} </span>
                          <button aria-label="Increase" onClick={()=>handleAdd(item.id)}> <Plus size={16} /></button>
                      </div>
                  </div>
                  <button className='cart-item-delete' onClick={()=>handleDelete(item.id)}><Trash size={18} /></button>
              </div>
            ))
          )}
        </div>
    </div>
  )
}

export default Cart