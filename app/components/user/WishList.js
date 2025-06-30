'use client'
import React, { useState } from 'react'
import { ShoppingCart, Trash2 } from 'lucide-react'
import { useWishlist } from '../WishlistContext'
import { useCart } from '../CartProvider'


const WishList = () => {
   
    const{wishlist, removeFromWishlist} = useWishlist();
    const {addToCart} = useCart();


    const handleAddToCart = (item) => {
       addToCart(item, {selectedSize: item.selectedSize, selectedColor:item.selectedColor}, 1);
       removeFromWishlist(item.id)
    }



    return (
        <div className='wishlist-page'>
            <h2 className='block-heading'>My WishList</h2>
            {wishlist.length === 0 ? (
                <div className='wishlist-'>Your wishlist is empty.</div>
            ) : (
                <div className='wishlist-list'>
                    {wishlist.map(item => (
                        <div className='wishlist-item' key={item.id}>
                            <div className='wishlist-img'>
                                <img src={item.mainImage} alt={item.name} width={70} height={70} />
                            </div>
                            <div className='wishlist-info'>
                                <h2 className='wishlist-name'>{item.name} </h2>
                            </div>
                            <div className='wishlist-actions'>
                                <button className='wishlist-btn add-btn' title='Add to art' onClick={()=> handleAddToCart(item)} > <ShoppingCart size={20} />  </button>
                                <button className='wishlist-btn delete-btn' title='remove' onClick={()=> removeFromWishlist(item.id)} > <Trash2 size={20}/> </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}


        </div>
    )
}

export default WishList