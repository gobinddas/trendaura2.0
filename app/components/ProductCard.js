"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

// A single Product Card component with its own hover effect logic
export const ProductCard = ({ product }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const hue = Math.round(((x + y) / (rect.width + rect.height)) * 360);
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--gradient-hue', `${hue}`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.removeProperty('--mouse-x');
    card.style.removeProperty('--mouse-y');
    card.style.removeProperty('--gradient-hue');
  };

  return (
    <article
      className="product-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-actions">
          <button title="Add to Wishlist"><Heart size={16} className='icon' /></button>
          <button title="View"><Eye size={16} className='icon' /></button>
        </div>
      </div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="product-bottom">
          <span className="product-price">NPR {product.price}</span>
          <button className="add-to-cart" title="Add to Cart">
            <ShoppingCart size={18} className='icon' />
          </button>
        </div>
      </div>
    </article>
  );
};

// The main grid component that orchestrates the layout and grid-wide spotlight
export const ChromaProductGrid = ({
  items,
  className = "",
  radius = 350,
  columns = 3,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const [gsap, setGsap] = useState(null);

  // Dynamically load GSAP from a CDN
  useEffect(() => {
    if (window.gsap) {
      setGsap(window.gsap);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.async = true;
    script.onload = () => setGsap(window.gsap);
    script.onerror = () => console.error("Failed to load GSAP.");
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // GSAP setup for the main grid spotlight
  useEffect(() => {
    if (!gsap) return;

    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);

    return () => {
      gsap.killTweensOf(pos.current);
    };
  }, [gsap]);
  
  const moveTo = (x, y) => {
    if (!gsap) return;
    gsap.to(pos.current, {
      x, y, duration: damping, ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleGridMove = (e) => {
    if (!gsap) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };
  
  const handleGridLeave = () => {
    if (!gsap) return;
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-product-grid ${className}`}
      style={{ "--cols": columns, "--r": `${radius}px` }}
      onPointerMove={handleGridMove}
      onPointerLeave={handleGridLeave}
    >
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* Spotlight effect layers */}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};
