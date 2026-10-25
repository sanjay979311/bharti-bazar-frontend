"use client";

import React from "react";

interface StatsGridProps {
  totalProducts: number;
  activeProducts: number;
  outOfStockProducts: number;
  totalViews: number;
}

export default function StatsGrid({
  totalProducts,
  activeProducts,
  outOfStockProducts,
  totalViews,
}: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
        <span className="text-[11px] font-bold text-slate-400 uppercase">Total Products</span>
        <p className="text-2xl font-black text-slate-900">{totalProducts}</p>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
        <span className="text-[11px] font-bold text-slate-400 uppercase">Active Listings</span>
        <p className="text-2xl font-black text-emerald-600">{activeProducts}</p>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
        <span className="text-[11px] font-bold text-slate-400 uppercase">Out of Stock</span>
        <p className="text-2xl font-black text-red-600">{outOfStockProducts}</p>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
        <span className="text-[11px] font-bold text-slate-400 uppercase">Total Views</span>
        <p className="text-2xl font-black text-[var(--color-primary-600,#2563eb)]">
          {totalViews}
        </p>
      </div>
    </div>
  );
}