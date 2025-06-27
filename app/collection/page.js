'use client'
import React, { useState, useMemo } from 'react'
import { ChromaProductGrid } from '../components/ProductCard';
import { products } from '../components/dummydata';
import { ListFilterPlus } from 'lucide-react';

// Ensure each product has an 'image' property for the ProductCard
products.forEach(p => {
  if (!p.image && p.mainImage) p.image = p.mainImage;
});

const PAGE_SIZE = 9;

function getUnique(arr, key) {
  const set = new Set();
  arr.forEach(item => {
    if (Array.isArray(item[key])) {
      item[key].forEach(val => set.add(val));
    } else if (item[key]) {
      set.add(item[key]);
    }
  });
  return Array.from(set);
}

const categories = getUnique(products, 'category');
const subcategories = getUnique(products, 'subcategory');
const sizes = getUnique(products, 'sizes');

const CollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const subcategoriesByCategory = useMemo(() => {
    const map = {};
    products.forEach(p => {
      if (!map[p.category]) map[p.category] = new Set();
      if (p.subcategory) map[p.category].add(p.subcategory);
    });
    // Convert sets to arrays
    Object.keys(map).forEach(cat => map[cat] = Array.from(map[cat]));
    return map;
  }, [products]);

  // Filtering, searching, sorting, and pagination
  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Category and Subcategory filter
    if (selectedCategory !== 'All') {
      data = data.filter(p => p.category === selectedCategory);
      if (selectedSubcategory) {
        data = data.filter(p => p.subcategory === selectedSubcategory);
      }
    }

    // Size filter
    if (selectedSize) {
      data = data.filter(p => p.sizes.includes(selectedSize));
    }

    // Search filter
    if (search.trim()) {
      const s = search.trim().toLowerCase();
      data = data.filter(p =>
        p.name.toLowerCase().includes(s) ||
        p.description.toLowerCase().includes(s) ||
        (p.tags && p.tags.some(tag => tag.toLowerCase().includes(s))) ||
        (p.category && p.category.toLowerCase().includes(s)) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(s)) ||
        (p.material && p.material.toLowerCase().includes(s))
      );
    }

    // Sorting
    if (sort === 'low') {
      data.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (sort === 'high') {
      data.sort((a, b) => b.discountPrice - a.discountPrice);
    }

    return data;
  }, [selectedCategory, selectedSubcategory, selectedSize, sort, search]);

  // Pagination
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, page]);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);

  return (
    <div className='page-collection'>
      <div className='container'>
        <div className='filter-product-row'>
          {/* Filter Sidebar */}
          <div
            className={`filter${mobileFilterOpen ? ' show' : ''}`}
            style={{
              ...(typeof window !== 'undefined' && window.innerWidth < 992
                ? { display: mobileFilterOpen ? 'flex' : 'none', flexDirection: 'column' }
                : {})
            }}
          >
            {/* Add a close button for mobile */}
            {typeof window !== 'undefined' && window.innerWidth < 992 && (
              <div style={{ textAlign: 'right', marginBottom: 12 }}>
                <button onClick={() => setMobileFilterOpen(false)} style={{
                  background: 'none', border: 'none', fontSize: 24, cursor: 'pointer'
                }}>&times;</button>
              </div>
            )}
            <div className='category'>
              <h3 className='block-heading'>Categories</h3>
              <ul className='category-list'>
                <li className={`category-item${selectedCategory === 'All' ? ' active' : ''}`}
                  onClick={() => { setSelectedCategory('All'); setSelectedSubcategory(''); setPage(1); }}>
                  All
                </li>
                {categories.map(cat => (
                  <li
                    key={cat}
                    className={`category-item${selectedCategory === cat ? ' active' : ''}${hoveredCategory === cat ? ' show-sub' : ''}`}
                    onMouseEnter={() => setHoveredCategory(cat)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onClick={() => { setSelectedCategory(cat); setSelectedSubcategory(''); setPage(1); }}
                  >
                    {cat}
                    {hoveredCategory === cat && subcategoriesByCategory[cat] && subcategoriesByCategory[cat].length > 0 && (
                      <ul className="subcategory-list">
                        {subcategoriesByCategory[cat].map(sub => (
                          <li
                            key={sub}
                            className={`subcategory-item${selectedSubcategory === sub ? ' active' : ''}`}
                            onClick={e => {
                              e.stopPropagation();
                              setSelectedCategory(cat);
                              setSelectedSubcategory(sub);
                              setPage(1);
                            }}
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className='size'>
              <h3 className='block-heading'>Size</h3>
              <ul className='size-list'>
                {sizes.map(sz => (
                  <li key={sz}
                    className={`size-item${selectedSize === sz ? ' active' : ''}`}
                    onClick={() => { setSelectedSize(sz === selectedSize ? '' : sz); setPage(1); }}>
                    {sz}
                  </li>
                ))}
              </ul>
            </div>
            <div className='sort'>
              <h3 className='block-heading'>Sorting</h3>
              <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="">Default Sorting</option>
                <option value="low">Price : Low - High</option>
                <option value="high">Price : High - Low</option>
              </select>
            </div>
          </div>
          <div className='search-product'>
            <div className='search'>
              <input
                type='text'
                placeholder='search product...'
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
              />
              <div
                className='toggle-filter'
                onClick={() => setMobileFilterOpen(v => !v)}
               
              >
                <ListFilterPlus />
              </div>
            </div>
            <div className='product-collection'>
              <ChromaProductGrid items={paginatedProducts} columns={3} />
              {/* Pagination Controls */}
              <div className="pagination" style={{ marginTop: 24, textAlign: "center" }}>
                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx + 1}
                    onClick={() => setPage(idx + 1)}
                    className={page === idx + 1 ? 'active' : ''}
                    style={{
                      margin: '0 4px',
                      padding: '6px 12px',
                      borderRadius: 4,
                      border: '1px solid #ccc',
                      background: page === idx + 1 ? '#f54500' : '#fff',
                      color: page === idx + 1 ? '#fff' : '#222',
                      cursor: 'pointer'
                    }}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionPage