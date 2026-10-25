"use client";

import React from "react";

interface RightScoreSidebarProps {
  score: number;
  currentStep: number;
}

export default function RightScoreSidebar({ score, currentStep }: RightScoreSidebarProps) {
  return (
    <div className="bg-slate-100/70 rounded-xl border border-slate-200 p-4 h-full space-y-6">
      {/* Product Score Circle Indicator */}
      <div className="space-y-3">
        <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
          Product Score:
        </h3>

        <div className="flex flex-col items-center py-2">
          {/* Score Indicator Ring */}
          <div className="w-14 h-14 rounded-full border-2 border-slate-400 flex items-center justify-center font-bold text-base text-slate-800 bg-white shadow-2xs">
            {score}
          </div>

          {/* Scale 0 to 100 */}
          <div className="w-full flex justify-between text-[11px] text-slate-400 font-medium mt-3 px-4">
            <span>0</span>
            <span>100</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-4 space-y-2">
        <div
          className={`px-3 py-2 rounded-lg text-xs font-semibold ${
            currentStep === 1
              ? "bg-white border border-slate-200 text-slate-900 shadow-2xs"
              : "text-slate-500"
          }`}
        >
          Basic details
        </div>

        <div
          className={`px-3 py-2 rounded-lg text-xs font-semibold ${
            currentStep === 2
              ? "bg-white border border-slate-200 text-slate-900 shadow-2xs"
              : "text-slate-500"
          }`}
        >
          Specifications
        </div>
      </div>
    </div>
  );
}