"use client";

import React, { useState, useEffect } from "react";

import { Facebook, Instagram } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const bannerImages = [
  "/sale-3.png",
  "/sale-2.png",
  "/sale-1.png"
];

const Banner = () => (
  <div className="index-banner">
   
    <div className="container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        className="banner-slider-offer"
      >
        {bannerImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Banner ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="main-title">Discover Your Signature Style</h1>
      
    </div>
  </div>
);

export default Banner;
