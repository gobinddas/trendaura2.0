'use client'
import React, { useState } from 'react'
import { ShoppingCart, Trash2 } from 'lucide-react'

const dummyWishlist = [
    {
        id: 1,
        name: 'Nike Air Max 270',
        image: './banner1.jpg'
    },
    {
        id: 2,
        name: 'Adidas Ultraboost',
        image: './banner2.jpg'
    },
    {
        id: 3,
        name: 'Puma Rs-X',
        image: './banner3.jpg'
    }
]
const WishList = () => {
    const [wishlist, setWishlist] = useState(dummyWishlist)
    const handleDelete = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id))
    }
    const handleAddToCart = (id) => {
        alert('Product added to cart!')
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
                                <img src={item.image} alt={item.name} width={70} height={70} />
                            </div>
                            <div className='wishlist-info'>
                                <h2 className='wishlist-name'>{item.name} </h2>
                            </div>
                            <div className='wishlist-actions'>
                                <button className='wishlist-btn add-btn' title='Add to art' onClick={()=> handleAddToCart(item.id)} > <ShoppingCart size={20} />  </button>
                                <button className='wishlist-btn delete-btn' title='remove' onClick={()=> handleDelete(item.id)} > <Trash2 size={20}/> </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}


        </div>
    )
}

export default WishList