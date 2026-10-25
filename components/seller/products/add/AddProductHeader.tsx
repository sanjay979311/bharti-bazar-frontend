"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function AddProductHeader() {
  return (
    <div className="flex items-center gap-3 pb-2 border-b border-slate-200 mb-4">
      <Link
        href="/seller/products"
        className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary-600,#2563eb)] hover:text-[var(--color-primary-700,#1d4ed8)] transition-colors cursor-pointer"
      >
        <FiArrowLeft className="text-base" />
        <span>Back</span>
      </Link>
      <span className="text-slate-300 font-light">|</span>
      <h1 className="text-base sm:text-lg font-bold text-slate-800">
        Add Product / Service
      </h1>
    </div>
  );
}