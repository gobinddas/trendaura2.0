import React from 'react'
import FallingText from './FallingText'

const Trend = () => {
  return (
    <div className='trend-we-have' >
    
    
<h3 className='main-title'>What We Have ?</h3>
<div className='container'>
<div className='we-have-falling'>
    <FallingText
  text={`Dress Saree Shirt T-shirt Leggings Lehenga Jeans Trousers Hoodie Kurta Jacket  Skirt Kurti `}
  highlightWords={["Dress", "Saree", "Skirt", "Kurti", "Leggings", "Lehenga"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>
</div>

</div>
    </div>
  )
}

export default Trend