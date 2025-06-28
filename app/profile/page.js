'use client'
import React, { useState } from 'react'
import PersonalInfo from '../components/user/PersonalInfo'
import WishList from '../components/user/WishList'
import UserOrder from '../components/user/UserOrder'
import Ticket from '../components/user/Ticket'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('personal')
  return (
    <div className='profile-page'>
      <div className='container'>
        <div className='buttons-row'>
          <button onClick={() => setActiveTab('personal')}>Personal Info</button>
          <button onClick={() => setActiveTab('wishlist')}>WishList</button>
          <button onClick={() => setActiveTab('order')}>Order</button>
          <button onClick={() => setActiveTab('ticket')}>Ticket</button>
        </div>
        <div className='info-shown'>
          {activeTab === 'personal' && <PersonalInfo />}
          {activeTab === 'wishlist' && <WishList />}
          {activeTab === 'order' && <UserOrder />}
          {activeTab === 'ticket' && <Ticket />}


        </div>
      </div>
    </div>
  )
}

export default ProfilePage