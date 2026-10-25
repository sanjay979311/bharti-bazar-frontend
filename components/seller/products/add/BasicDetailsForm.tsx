"use client";

import React from "react";
import { 
  FiBold, 
  FiItalic, 
  FiList, 
  FiRotateCcw, 
  FiRotateCw, 
  FiCheck 
} from "react-icons/fi";

interface BasicDetailsFormProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onContinue: () => void;
}

export default function BasicDetailsForm({
  formData,
  setFormData,
  onContinue,
}: BasicDetailsFormProps) {
  return (
    <div className="space-y-5 text-xs sm:text-sm">
      {/* Product / Service Name */}
      <div>
        <label className="block text-slate-700 font-semibold mb-1.5">
          Product/Service Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors bg-white"
        />
      </div>

      {/* Price & Unit Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        <div className="sm:col-span-6">
          <label className="block text-slate-700 font-semibold mb-1.5">Price</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-slate-500 font-semibold text-base">₹</span>
            <input
              type="text"
              placeholder="e.g. 500"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full pl-8 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors bg-white"
            />
          </div>
        </div>

        <div className="sm:col-span-1 text-center text-slate-400 font-medium hidden sm:block pt-6">
          - per -
        </div>

        <div className="sm:col-span-5">
          <label className="block text-slate-700 font-semibold mb-1.5">Unit</label>
          <input
            type="text"
            placeholder="Enter Unit (e.g. Piece, Meter, Set)"
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors bg-white"
          />
        </div>
      </div>

      {/* Product / Service Description with Formatting Toolbar */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-slate-700 font-semibold">
            Product/Service Description
          </label>
          <span className="text-[11px] text-slate-400">
            Uses, Details, Benefits, etc.
          </span>
        </div>

        <div className="border border-slate-300 rounded-lg overflow-hidden bg-white">
          {/* Editor Rich Toolbar */}
          <div className="bg-slate-100 border-b border-slate-200 p-2 flex items-center gap-3 text-slate-600 text-xs flex-wrap select-none">
            <button type="button" className="hover:text-slate-900 font-bold p-1">
              <FiBold size={14} />
            </button>
            <button type="button" className="hover:text-slate-900 italic p-1">
              <FiItalic size={14} />
            </button>
            <span className="text-slate-300">|</span>
            <button type="button" className="hover:text-slate-900 p-1">
              <FiList size={14} />
            </button>
            <button type="button" className="hover:text-slate-900 p-1 font-mono font-bold">
              1.
            </button>
            <span className="text-slate-300">|</span>
            <button type="button" className="hover:text-slate-900 p-1 font-serif">
              Ω
            </button>
            <button type="button" className="hover:text-slate-900 p-1 font-semibold text-xs">
              x₂
            </button>
            <button type="button" className="hover:text-slate-900 p-1 font-semibold text-xs">
              x²
            </button>
            <span className="text-slate-300">|</span>
            <button type="button" className="hover:text-slate-900 p-1">
              <FiRotateCcw size={14} />
            </button>
            <button type="button" className="hover:text-slate-900 p-1">
              <FiRotateCw size={14} />
            </button>
            <button type="button" className="hover:text-slate-900 p-1 text-emerald-600">
              <FiCheck size={14} />
            </button>
          </div>

          <textarea
            rows={6}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Type detailed product specification here..."
            className="w-full p-3.5 text-slate-800 text-xs sm:text-sm focus:outline-none resize-none"
          />
        </div>

        <div className="text-right text-[11px] text-slate-400 mt-1">
          {formData.description.length} character (maximum of 4000) including formatting.
        </div>
      </div>

      {/* Save and Continue CTA Button */}
      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={onContinue}
          className="bg-[var(--color-accent-500,#f97316)] hover:bg-[var(--color-accent-600,#ea580c)] text-white font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <span>Save and Continue</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}