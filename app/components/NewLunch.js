import React from 'react'
import Orb from './ShopNowCircular'


const NewLunch = () => {
  return (
    <div className='section-newlunch'>
      <div style={{ width: '100%', height: '800px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </div>
  )
}

export default NewLunch