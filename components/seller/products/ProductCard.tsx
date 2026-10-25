"use client";

import React from "react";
import { 
  FiCamera, 
  FiVideo, 
  FiFileText, 
  FiEdit2, 
  FiPlus, 
  FiMoreVertical, 
  FiAlertCircle 
} from "react-icons/fi";

export interface SpecificationItem {
  id: string;
  title: string;
}

export interface DetailedProduct {
  id: string;
  title: string;
  price: string;
  unit: string;
  category: string;
  description: string;
  group: string;
  score: number;
  missingSpecs: string[];
  imageUrl?: string;
}

interface ProductCardProps {
  product: DetailedProduct;
  onEdit: (product: DetailedProduct) => void;
  onDelete: (id: string) => void;
}

export default function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-2xs p-3 sm:p-4 flex flex-col lg:flex-row gap-4 relative">
      
      {/* Left Section: Thumbnails & Main Preview */}
      <div className="flex gap-2">
        {/* Vertical Photo Slot Controls */}
        <div className="flex flex-col gap-1.5">
          {[1, 2, 3, 4, 5].map((idx) => (
            <div
              key={idx}
              className="w-7 h-7 sm:w-8 sm:h-8 border border-slate-200 rounded flex flex-col items-center justify-center text-slate-400 hover:border-teal-600 cursor-pointer transition-colors bg-slate-50"
            >
              <FiCamera className="text-[10px]" />
              <span className="text-[8px] leading-tight">Add</span>
            </div>
          ))}
        </div>

        {/* Main Photo Card & Video/PDF Tabs */}
        <div className="flex flex-col w-48 sm:w-56 border border-slate-200 rounded-lg overflow-hidden">
          <div className="h-40 sm:h-44 bg-slate-100 relative flex items-center justify-center overflow-hidden">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-slate-400 text-xs font-medium">No Image</div>
            )}
          </div>

          <div className="flex border-t border-slate-200 divide-x divide-slate-200 text-[10px] text-slate-600 bg-slate-50">
            <button className="flex-1 py-1.5 flex items-center justify-center gap-1 hover:bg-white transition-colors cursor-pointer">
              <FiVideo className="text-slate-500" />
              <span>Add Video</span>
            </button>
            <button className="flex-1 py-1.5 flex items-center justify-center gap-1 hover:bg-white transition-colors cursor-pointer">
              <FiFileText className="text-slate-500" />
              <span>Add PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Section: Details */}
      <div className="flex-1 space-y-2 text-xs sm:text-sm pt-1">
        {/* Title */}
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-slate-900 text-base">{product.title}</h2>
          <button 
            onClick={() => onEdit(product)}
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <FiEdit2 size={13} />
          </button>
        </div>

        {/* Price */}
        <div className="flex items-center gap-1 font-bold text-slate-900 text-sm">
          <span>₹ {product.price}</span>
          <span className="text-slate-500 font-normal text-xs">/{product.unit}</span>
          <button 
            onClick={() => onEdit(product)}
            className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer"
          >
            <FiEdit2 size={12} />
          </button>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-slate-500 text-xs">Category</span>
          <span className="border border-slate-200 rounded-full px-3 py-0.5 text-xs text-slate-700 font-medium">
            {product.category}
          </span>
          <button className="text-indigo-700 text-xs font-semibold flex items-center gap-0.5 hover:underline cursor-pointer">
            <FiPlus size={12} /> Add
          </button>
        </div>

        {/* Description */}
        <div className="space-y-0.5 pt-1">
          <span className="text-slate-500 text-xs block">Description</span>
          <p className="text-slate-800 text-xs">{product.description || "-"}</p>
        </div>

        {/* Group */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-slate-500 text-xs">Group</span>
          <span className="border border-slate-200 rounded-full px-3 py-0.5 text-xs text-slate-700 font-medium">
            {product.group}
          </span>
        </div>
      </div>

      {/* Right Section: Score & Missing Specifications */}
      <div className="lg:w-80 border-t lg:border-t-0 lg:border-l border-slate-100 pt-3 lg:pt-0 lg:pl-5 flex flex-col justify-between">
        {/* Score Ring & More Button */}
        <div className="flex items-center justify-end gap-3">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center font-bold text-[11px] text-slate-700">
              {product.score}
            </div>
            <span className="text-[10px] text-slate-500 font-medium mt-0.5">Score</span>
          </div>

          <button 
            onClick={() => onDelete(product.id)}
            className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            title="Options"
          >
            <FiMoreVertical size={16} />
          </button>
        </div>

        {/* Missing Specification Tags */}
        <div className="space-y-2 mt-3 lg:mt-0">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-600">
            <FiAlertCircle />
            <span>Specification</span>
            <span className="font-bold">{product.missingSpecs.length} missing</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {product.missingSpecs.map((spec, idx) => (
              <button
                key={idx}
                className="border border-dashed border-amber-400 text-amber-800 text-[11px] px-2.5 py-0.5 rounded-full hover:bg-amber-50 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <FiPlus size={10} className="text-amber-600" />
                <span>{spec}</span>
              </button>
            ))}
          </div>

          <div className="text-center pt-1">
            <button className="text-indigo-700 text-xs font-bold hover:underline cursor-pointer">
              View All
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}