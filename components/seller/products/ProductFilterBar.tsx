"use client";

import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface ProductFilterBarProps {
  totalCount: number;
  incorrectPriceCount: number;
  lowScoreCount: number;
  noSpecsCount: number;
  noDescCount: number;
}

export default function ProductFilterBar({
  totalCount,
  incorrectPriceCount,
  lowScoreCount,
  noSpecsCount,
  noDescCount,
}: ProductFilterBarProps) {
  return (
    <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-4 flex-wrap font-medium">
        <button className="flex items-center gap-1 border border-slate-300 px-2.5 py-1 rounded-md text-slate-700 hover:bg-slate-50">
          <span>All Products ({totalCount})</span>
          <FiChevronDown />
        </button>

        <button className="text-red-600 font-semibold hover:underline">
          Incorrect Price ({incorrectPriceCount})
        </button>

        <button className="text-slate-600 hover:text-slate-900">
          Low Score ({lowScoreCount})
        </button>

        <button className="text-slate-600 hover:text-slate-900">
          No Specifications ({noSpecsCount})
        </button>

        <button className="text-slate-600 hover:text-slate-900">
          No Descriptions ({noDescCount})
        </button>
      </div>

      <div className="flex items-center gap-1 text-slate-500 cursor-pointer hover:text-slate-700">
        <span>Recent Modified</span>
        <FiChevronDown />
      </div>
    </div>
  );
}