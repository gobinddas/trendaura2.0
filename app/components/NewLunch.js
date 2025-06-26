import React from 'react'
import Orb from './ShopNowCircular'


const NewLunch = () => {
  return (
    <div className='section-newlunch'>
      <div className='container'>
      <div className='inner' style={{ width: '100%', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      </div>
    </div>
  )
}

export default NewLunch