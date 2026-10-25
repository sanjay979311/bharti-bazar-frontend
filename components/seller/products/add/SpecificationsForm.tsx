"use client";

import React, { useState } from "react";
import { FiPlus, FiTrash2, FiSave } from "react-icons/fi";

interface SpecItem {
  key: string;
  value: string;
}

interface SpecificationsFormProps {
  onSave: () => void;
  onBack: () => void;
}

export default function SpecificationsForm({ onSave, onBack }: SpecificationsFormProps) {
  const [specs, setSpecs] = useState<SpecItem[]>([
    { key: "Material", value: "Stainless Steel" },
    { key: "Size / Dimension", value: "2 Inch" },
  ]);

  const handleAddSpec = () => {
    setSpecs([...specs, { key: "", value: "" }]);
  };

  const handleRemoveSpec = (index: number) => {
    setSpecs(specs.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: "key" | "value", val: string) => {
    const updated = [...specs];
    updated[index][field] = val;
    setSpecs(updated);
  };

  return (
    <div className="space-y-5 text-xs sm:text-sm">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
        <h3 className="font-bold text-slate-800">Add Technical Specifications</h3>
        <button
          type="button"
          onClick={handleAddSpec}
          className="text-xs font-bold text-[var(--color-primary-600,#2563eb)] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <FiPlus /> Add Specification
        </button>
      </div>

      <div className="space-y-3">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Attribute (e.g. Paint Type)"
              value={spec.key}
              onChange={(e) => handleChange(index, "key", e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
            />
            <input
              type="text"
              placeholder="Value (e.g. Synthetic Enamel)"
              value={spec.value}
              onChange={(e) => handleChange(index, "value", e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
            />
            <button
              type="button"
              onClick={() => handleRemoveSpec(index)}
              className="text-slate-400 hover:text-red-600 p-2 cursor-pointer"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Footer Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer"
        >
          ← Back to Basic Details
        </button>

        <button
          type="button"
          onClick={onSave}
          className="bg-[var(--color-accent-500,#f97316)] hover:bg-[var(--color-accent-600,#ea580c)] text-white font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
        >
          <FiSave />
          <span>Save Product Listing</span>
        </button>
      </div>
    </div>
  );
}