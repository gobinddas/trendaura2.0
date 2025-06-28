'use client'
import React from 'react'

const orders = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    image: '/banner1.jpg',
    date: '2024-06-01',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    image: '/banner2.jpg',
    date: '2024-05-28',
    status: 'completed',
  },
  {
    id: 3,
    name: 'Puma RS-X',
    image: '/banner3.jpg',
    date: '2024-05-20',
    status: 'shipping',
  },
  {
    id: 4,
    name: 'Converse Chuck Taylor',
    image: '/banner4.jpg',
    date: '2024-05-15',
    status: 'completed',
  },
  {
    id: 5,
    name: 'Vans Old Skool',
    image: '/banner5.jpg',
    date: '2024-05-10',
    status: 'pending',
  },
  {
    id: 6,
    name: 'Reebok Classic',
    image: '/banner6.jpg',
    date: '2024-05-05',
    status: 'shipping',
  },
  {
    id: 7,
    name: 'New Balance 574',
    image: '/banner7.jpg',
    date: '2024-05-01',
    status: 'cancel',
  },
]

const statusColors = {
    pending:{bg: '#fff3cd', color: '#856404'},
    completed:{bg: '#d4edda', color: '#155724'},
    shipping: {bg : '#cce5ff', color: '#004085'},
    cancel:{bg:'#FFDDAE', color:'#FF3F33'}
}

const statusText ={
    pending: 'Pending',
    completed : 'Completed',
    shipping: 'Shipping',
    cancel : 'Cancel',
}

const UserOrder = () => {
  return (
    <div className='order-page'>
        <h2 className='block-heading'>My Orders</h2>
        <div className='order-list'>
            {orders.map(order =>(
                <div className='order-item' key={order.id}>
                    <div className='order-img'>
                        <img src={order.image} alt={order.name} width={60} height={60} />
                    </div>
                    <div className='order-info'>
                        <div className='order-name'>
                            {order.name}
                        </div>
                        <div className='order-date'>
                            Ordered : {order.date}
                        </div>
                    </div>
                    <div className='order-status' style={{
                        background : statusColors[order.status].bg,
                        color: statusColors[order.status].color,
                    }} >
                        {statusText[order.status]}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserOrder