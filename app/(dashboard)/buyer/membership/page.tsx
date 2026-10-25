"use client";

import React, { useState } from "react";

export default function MembershipPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string>("plus");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header Banner Section */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary-900)] tracking-tight">
          Your <span className="text-[var(--color-primary-600)]">Procurement Assistant⁺</span> for Smarter Buying
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Get verified buyer status, priority RFQ quotations, and dedicated support to source products at wholesale rates.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
        
        {/* 1. MINI PLAN */}
        <div 
          onClick={() => setSelectedPlan("mini")}
          className={`bg-[var(--color-surface-card)] rounded-2xl border-2 p-6 flex flex-col justify-between transition-all cursor-pointer relative ${
            selectedPlan === "mini"
              ? "border-[var(--color-primary-600)] shadow-md scale-[1.01]"
              : "border-slate-200 hover:border-slate-300 shadow-xs"
          }`}
        >
          <div>
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-lg font-bold text-sm">
                  📋
                </div>
                <h3 className="font-bold text-slate-800 text-lg">Mini</h3>
              </div>
              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedPlan === "mini" ? "border-[var(--color-primary-600)] bg-[var(--color-primary-600)] text-white" : "border-slate-300"
              }`}>
                {selectedPlan === "mini" && <span className="text-[10px]">✓</span>}
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-black text-slate-900">₹999</span>
              <span className="text-xs text-slate-500 font-medium ml-1">/ month</span>
            </div>

            {/* Features List */}
            <ul className="space-y-3 text-xs text-slate-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span>Procurement Assistant⁺ on <strong>2 RFQs</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span><strong>₹5 Lakh</strong> Payment Protection*</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span>Multi-supplier quotations</span>
              </li>
            </ul>
          </div>

          <button className="w-full bg-[var(--color-primary-50)] hover:bg-[var(--color-primary-100)] text-[var(--color-primary-700)] font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer">
            Apply for Mini
          </button>
        </div>

        {/* 2. PLUS PLAN (MOST POPULAR) */}
        <div 
          onClick={() => setSelectedPlan("plus")}
          className={`bg-[var(--color-surface-card)] rounded-2xl border-2 p-6 flex flex-col justify-between transition-all cursor-pointer relative ${
            selectedPlan === "plus"
              ? "border-[var(--color-primary-900)] shadow-xl scale-[1.03] z-10"
              : "border-slate-200 hover:border-slate-300 shadow-xs"
          }`}
        >
          {/* Top Badge Header */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-primary-900)] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-xs">
            ★ Most Popular
          </div>

          <div>
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[var(--color-primary-900)] text-white rounded-lg font-bold text-sm">
                  🛍️
                </div>
                <h3 className="font-extrabold text-[var(--color-primary-900)] text-xl">Plus</h3>
              </div>
              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedPlan === "plus" ? "border-[var(--color-primary-900)] bg-[var(--color-primary-900)] text-white" : "border-slate-300"
              }`}>
                {selectedPlan === "plus" && <span className="text-[10px]">✓</span>}
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-black text-slate-900">₹1,999</span>
              <span className="text-xs text-slate-500 font-medium ml-1">/ year</span>
            </div>

            {/* Features List */}
            <ul className="space-y-3 text-xs text-slate-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span>Procurement Assistant⁺ on <strong>10 RFQs</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span><strong>₹10 Lakh</strong> Payment Protection*</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span className="font-bold text-[var(--color-primary-700)]">Verified Business Buyer Badge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span>Vendor Management System</span>
              </li>
            </ul>
          </div>

          <button className="w-full bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-extrabold text-xs py-3 rounded-xl shadow-md transition-colors cursor-pointer">
            Apply for Plus
          </button>
        </div>

        {/* 3. MAX PLAN */}
        <div 
          onClick={() => setSelectedPlan("max")}
          className={`bg-[var(--color-surface-card)] rounded-2xl border-2 p-6 flex flex-col justify-between transition-all cursor-pointer relative ${
            selectedPlan === "max"
              ? "border-[var(--color-primary-600)] shadow-md scale-[1.01]"
              : "border-slate-200 hover:border-slate-300 shadow-xs"
          }`}
        >
          {/* Top Badge Header */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-primary-50)] text-[var(--color-primary-700)] border border-[var(--color-primary-100)] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
            ★ Our Best Offering
          </div>

          <div>
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-lg font-bold text-sm">
                  👑
                </div>
                <h3 className="font-bold text-slate-800 text-lg">Max</h3>
              </div>
              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedPlan === "max" ? "border-[var(--color-primary-600)] bg-[var(--color-primary-600)] text-white" : "border-slate-300"
              }`}>
                {selectedPlan === "max" && <span className="text-[10px]">✓</span>}
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-black text-slate-900">₹9,999</span>
              <span className="text-xs text-slate-500 font-medium ml-1">/ year</span>
            </div>

            {/* Features List */}
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Everything in Plus</div>
            <ul className="space-y-3 text-xs text-slate-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span>Procurement Assistant⁺ on <strong>50 RFQs</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span>Buy Now Pay Later Facility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success)] font-bold">✓</span>
                <span>No Spam Calls Guarantee</span>
              </li>
            </ul>
          </div>

          <button className="w-full bg-[var(--color-primary-50)] hover:bg-[var(--color-primary-100)] text-[var(--color-primary-700)] font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer">
            Apply for Max
          </button>
        </div>

      </div>

      {/* Footer Support Info */}
      <div className="mt-12 text-center text-xs text-slate-400">
        Need assistance choosing the right buyer plan? <a href="#" className="text-[var(--color-primary-600)] font-semibold hover:underline">Contact Procurement Support</a>
      </div>

    </div>
  );
}