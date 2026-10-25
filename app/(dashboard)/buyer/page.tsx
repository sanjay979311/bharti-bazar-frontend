"use client";

import React from "react";
import Link from "next/link";
import { FiShoppingBag, FiMessageSquare, FiAward, FiArrowRight } from "react-icons/fi";

export default function BuyerDashboardPage() {
  return (
    <div className="w-full space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[var(--color-primary-900)] to-slate-800 text-white p-6 rounded-2xl shadow-sm">
        <h1 className="text-xl sm:text-2xl font-black">Welcome back, Sanjay Kumar! 👋</h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
          Manage your bulk RFQs, chat directly with manufacturers, and track your business profile strength.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Active RFQs</p>
            <p className="text-2xl font-black text-slate-900 mt-1">12</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl text-xl">
            <FiShoppingBag />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">New Messages</p>
            <p className="text-2xl font-black text-slate-900 mt-1">5</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl text-xl">
            <FiMessageSquare />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Buyer Tier</p>
            <p className="text-2xl font-black text-[var(--color-accent-500)] mt-1">Plus Member</p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl text-xl">
            <FiAward />
          </div>
        </div>
      </div>

      {/* Quick Access Links */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-sm font-extrabold text-slate-800">Quick Portal Navigation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/buyer/profile" className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl font-bold text-slate-700 transition-all">
            <span>Complete Profile Verification (47%)</span>
            <FiArrowRight />
          </Link>
          <Link href="/buyer/my-orders" className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl font-bold text-slate-700 transition-all">
            <span>Check Supplier Responses & Quotes</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>

    </div>
  );
}