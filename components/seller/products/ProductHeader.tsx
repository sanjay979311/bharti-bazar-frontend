"use client";

import React from "react";
import { FiPlus, FiCamera, FiZap, FiSearch, FiSliders } from "react-icons/fi";

interface ProductHeaderProps {
  activeCount: number;
  onAddProduct: () => void;
}

export default function ProductHeader({ activeCount, onAddProduct }: ProductHeaderProps) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-3">
      {/* Tab Active */}
      <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-1 font-bold text-slate-800 text-sm">
        <span>Active</span>
        <span className="text-teal-700">({activeCount})</span>
      </div>

      {/* Right Actions */}
      <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end text-xs sm:text-sm">
        <button
          onClick={onAddProduct}
          className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
        >
          <FiPlus className="text-base" />
          <span>Add Product</span>
        </button>

        <button className="flex items-center gap-1.5 border border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer">
          <FiCamera className="text-base" />
          <span>Add by Photo</span>
        </button>

        <button className="flex items-center gap-1.5 border border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer">
          <FiZap className="text-base" />
          <span>Quick Add</span>
        </button>

        <div className="relative flex-1 sm:w-52">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search Products"
            className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-teal-600"
          />
        </div>

        <button className="flex items-center gap-1 border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium px-3 py-2 rounded-lg text-xs cursor-pointer">
          <FiSliders />
          <span>More Options</span>
        </button>
      </div>
    </div>
  );
}