'use client'
import React, { useState } from 'react'
import { products } from '@/app/components/dummydata'
import { useParams } from 'next/navigation'

const ProductDetailPage = () => {
  const { productId } = useParams()
  const product = products.find(p => p.id === productId)

  // State for selected options
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Product not found.</div>
  }

  // Get available stock for selected size
  const availableStock = product.stock?.[selectedSize] ?? 0

  // Handlers
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    alert(`Added ${quantity} x ${product.name} (${selectedSize}, ${selectedColor}) to cart!`)
  }
  const handleBuyNow = () => {
    // Implement your buy now logic here
    alert(`Proceeding to buy ${quantity} x ${product.name} (${selectedSize}, ${selectedColor})!`)
  }

  return (
    <div className="product-detail-page">
      <div className='container'>
        <div className="product-detail-container">
          <div className="product-images">
            <img
              src={product.mainImage}
              alt={product.name}
              className="main-image"
            />
            <div className="secondary-images">
              {product.secondaryImages?.map((img, idx) => (
                <img key={idx} src={img} alt={`${product.name} ${idx + 1}`} />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-meta">
              <span className="brand">{product.brand}</span>
              <span className="category">{product.category} / {product.subcategory}</span>
            </div>
            <div className="product-price">
              NPR {product.price}
              {product.discountPrice && (
                <span className="discount">NPR {product.discountPrice}</span>
              )}
            </div>
            <div className="product-rating">
              ⭐ {product.rating} ({product.numReviews} reviews)
            </div>
            <p className="product-description">{product.description}</p>
            <div className="product-options">
              <div className="option-row">
                <strong>Size:</strong>
                <div className="option-group">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`option-btn${selectedSize === size ? ' selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                      disabled={product.stock[size] === 0}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="option-row">
                <strong>Color:</strong>
                <div className="option-group">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`option-btn${selectedColor === color ? ' selected' : ''}`}
                      style={{ background: selectedColor === color ? '#f54500' : '#f3f3f3', color: selectedColor === color ? '#fff' : '#222' }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              <div className="option-row">
                <strong>Quantity:</strong>
                <div className="quantity-group">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                  >-</button>
                  <span className="qty-value">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(q => Math.min(availableStock, q + 1))}
                    disabled={quantity >= availableStock}
                  >+</button>
                  <span className="stock-info">{availableStock} in stock</span>
                </div>
              </div>
              <div>
                <strong>Material:</strong> {product.material}
              </div>
            </div>
            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={availableStock === 0}>
                Add to Cart
              </button>
              <button className="buy-now-btn" onClick={handleBuyNow} disabled={availableStock === 0}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage