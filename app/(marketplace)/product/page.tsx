// src/app/products/page.tsx
'use client';
import React, { useState } from 'react';
import { useGetCategoriesQuery, useGetLocationsQuery, useGetProductsQuery } from '@/redux/services/categoryApi';

export default function ProductsMarketplace() {
  const [filters, setFilters] = useState({ page: 1, category: '', location: '', search: '' });

  const { data: catData } = useGetCategoriesQuery();
  const { data: locData } = useGetLocationsQuery();
  const { data: prodData, isFetching } = useGetProductsQuery(filters);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* 📁 Sidebar: B2B Categories */}
      <aside className="w-64 bg-white border-r p-4 hidden md:block">
        <h3 className="font-bold text-lg mb-4 text-orange-600">Categories</h3>
        <ul className="space-y-2">
          <li 
            className={`cursor-pointer p-2 rounded text-sm ${!filters.category ? 'bg-orange-100 text-orange-700 font-semibold' : 'hover:bg-gray-100'}`}
            onClick={() => setFilters(prev => ({ ...prev, category: '', page: 1 }))}
          >
            All Categories
          </li>
          {catData?.categories.map((cat) => (
            <li 
              key={cat._id}
              className={`cursor-pointer p-2 rounded text-sm ${filters.category === cat._id ? 'bg-orange-100 text-orange-700 font-semibold' : 'hover:bg-gray-100'}`}
              onClick={() => setFilters(prev => ({ ...prev, category: cat._id, page: 1 }))}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* 📦 Main Marketplace Content */}
      <main className="flex-1 p-6">
        <div className="flex flex-wrap gap-4 items-center justify-between border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold">Verified B2B Products</h1>
          
          <div className="flex gap-2 w-full md:w-auto">
            {/* Search Input */}
            <input 
              type="text" placeholder="Search products..." className="border p-2 rounded text-sm w-full md:w-64"
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value, page: 1 }))}
            />
            {/* Location Selector */}
            <select 
              className="border p-2 rounded text-sm bg-white"
              onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value, page: 1 }))}
            >
              <option value="">All India</option>
              {locData?.locations.map(loc => <option key={loc._id} value={loc._id}>{loc.city}</option>)}
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        {isFetching ? <div className="text-center font-semibold py-10">Fetching Verified Leads...</div> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prodData?.products.map((product) => (
              <div key={product._id} className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <h2 className="font-bold text-lg text-gray-900 truncate">{product.title}</h2>
                <p className="text-green-600 font-bold text-xl mt-1">₹{product.price} <span className="text-xs text-gray-500">/ {product.unit}</span></p>
                <div className="text-xs text-gray-400 mt-2 flex justify-between">
                  <span>📍 {product.locationName}</span>
                  <span>Verified Supplier</span>
                </div>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded text-sm font-semibold hover:bg-orange-600">
                  Get Best Quote
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
