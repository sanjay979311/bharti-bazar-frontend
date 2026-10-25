"use client";

import React from "react";

interface StepNavigationProps {
  currentStep: number;
  setStep: (step: number) => void;
}

export default function StepNavigation({ currentStep, setStep }: StepNavigationProps) {
  return (
    <div className="grid grid-cols-2 rounded-lg overflow-hidden mb-6 border border-slate-200">
      <button
        type="button"
        onClick={() => setStep(1)}
        className={`py-3 px-4 text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
          currentStep === 1
            ? "bg-[var(--color-primary-900,#1e3a8a)] text-white shadow-sm"
            : "bg-slate-200 text-slate-600 hover:bg-slate-300"
        }`}
      >
        Basic Details
      </button>

      <button
        type="button"
        onClick={() => setStep(2)}
        className={`py-3 px-4 text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
          currentStep === 2
            ? "bg-[var(--color-primary-900,#1e3a8a)] text-white shadow-sm"
            : "bg-slate-200 text-slate-500 hover:bg-slate-300"
        }`}
      >
        Specification/Additional Details
      </button>
    </div>
  );
}