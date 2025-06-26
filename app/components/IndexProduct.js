'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ProductCard } from './ProductCard';

const products = [
  { id: 1, name: 'Classic Sneakers', price: 59.99, image: './banner1.jpg' },
  { id: 2, name: 'Modern Backpack', price: 39.99, image: './banner2.jpg' },
  { id: 3, name: 'Elegant Watch', price: 120.0, image: './banner3.jpg' },
  { id: 4, name: 'Summer Hat', price: 24.99, image: './banner4.jpg' },
  { id: 5, name: 'Denim Jacket', price: 89.99, image: './banner5.jpg' },
  { id: 6, name: 'Leather Boots', price: 99.99, image: './banner6.jpg' },
  { id: 7, name: 'Sunglasses', price: 19.99, image: './banner7.jpg' },
  { id: 8, name: 'Casual T-shirt', price: 14.99, image: './banner1.jpg' },
  { id: 9, name: 'Sports Shorts', price: 29.99, image: './banner8.jpg' },
  { id: 10, name: 'Travel Bag', price: 49.99, image: './banner3.jpg' },
];

const IndexProduct = () => (
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
          1024: { slidesPerView: 3 },   // desktop
        }}
        style={{ padding: '2rem 0' }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default IndexProduct;