'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ProductCard } from './ProductCard';
import { products } from './dummydata';



const IndexProduct = () => {
  
  const featuredProducts = products.filter(product => product.isFeatured)
  
  return (
  <div className="index-product-section">
    <div className='container'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        slidesPerView={3}
        slidesPerGroup={1}
        breakpoints={{
          0: { slidesPerView: 1 },      // mobile
          640: { slidesPerView: 2 },    // tablet
          1024: { slidesPerView: 4 },   // desktop
        }}
        style={{ padding: '2rem 0' }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)};

export default IndexProduct;