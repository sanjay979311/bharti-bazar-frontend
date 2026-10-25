"use client";

import React from "react";
import { 
  HiOutlineShieldCheck, 
  HiOutlineLockClosed, 
  HiOutlineBanknotes, 
  HiOutlineScale, 
  HiOutlineCheckBadge 
} from "react-icons/hi2";
import { FiCheckCircle, FiShield, FiAlertTriangle, FiArrowRight } from "react-icons/fi";

export default function BuyerPaymentSafetyPage() {
  return (
    <div className="w-full space-y-5 text-slate-800">
      
      {/* 1. TOP HERO BANNER */}
      <div className="bg-gradient-to-r from-[var(--color-primary-900)] to-slate-800 text-white p-6 rounded-2xl shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="bg-[var(--color-primary-600)] text-white p-1.5 rounded-xl text-xl shrink-0">
              <HiOutlineLockClosed />
            </span>
            <h1 className="text-lg sm:text-xl font-black tracking-tight">Bharti Bazar SafePay Shield</h1>
          </div>
          <p className="text-xs text-slate-300 font-medium">
            100% secure B2B transaction protection for wholesale purchasing. Your payments are held safely until goods are inspected and delivered by verified manufacturers.
          </p>
        </div>

        <div className="bg-white/10 border border-white/15 px-4 py-3 rounded-xl shrink-0 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-success)] text-white flex items-center justify-center text-xl font-bold">
            ✓
          </div>
          <div>
            <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold block">Protection Status</span>
            <span className="text-xs font-black text-emerald-400">Escrow Covered</span>
          </div>
        </div>
      </div>

      {/* 2. THREE KEY SAFETY PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Escrow Protection */}
        <div className="bg-[var(--color-surface-card)] p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-xl">
            <HiOutlineBanknotes />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900">Escrow Payment Holding</h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Funds are locked in a secure nodal account. Payment is released to the seller only after you confirm dispatch & quality.
          </p>
        </div>

        {/* Dispute Resolution */}
        <div className="bg-[var(--color-surface-card)] p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[var(--color-warning)] flex items-center justify-center text-xl">
            <HiOutlineScale />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900">Dispute & Refund Guarantee</h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            In case of missing items or wrong product specifications, raise a ticket within 7 days for quick investigation and full refund.
          </p>
        </div>

        {/* Verified Bank Accounts */}
        <div className="bg-[var(--color-surface-card)] p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--color-success)] flex items-center justify-center text-xl">
            <HiOutlineCheckBadge />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900">GST-Verified Bank Accounts</h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            All supplier bank accounts are cross-checked with official GST registry records to eliminate payment spoofing or fraud.
          </p>
        </div>

      </div>

      {/* 3. SAFE PAYMENT STEPS & GUIDELINES */}
      <div className="bg-[var(--color-surface-card)] rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900">How Bharti Bazar Protects Your Money</h2>
            <p className="text-xs text-slate-500">Simple 4-step safe purchasing workflow</p>
          </div>
          <span className="bg-emerald-100 text-[var(--color-success)] text-[10px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1">
            <FiShield /> 100% Safe Trade
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            { step: "01", title: "Place Order", desc: "Select product and negotiate price via chat" },
            { step: "02", title: "Pay to Escrow", desc: "Deposit amount into secure Bharti Bazar nodal account" },
            { step: "03", title: "Inspect Delivery", desc: "Supplier ships goods; inspect quality upon arrival" },
            { step: "04", title: "Release Funds", desc: "Approve delivery to transfer payment to supplier" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50/70 rounded-xl border border-slate-100 space-y-1.5 relative">
              <span className="text-xs font-black text-[var(--color-primary-600)] bg-[var(--color-primary-50)] px-2 py-0.5 rounded-md">
                Step {item.step}
              </span>
              <h4 className="text-xs font-extrabold text-slate-800 pt-1">{item.title}</h4>
              <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SAFETY WARNING & ACTION CARD */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <FiAlertTriangle className="text-xl text-[var(--color-warning)] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="text-xs font-extrabold text-amber-950">Important Security Alert</h4>
            <p className="text-xs text-amber-800 font-medium">
              Never transfer payments directly to unverified personal bank accounts outside the Bharti Bazar platform.
            </p>
          </div>
        </div>
        <button className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1.5">
          <span>Report Suspicious Activity</span>
          <FiArrowRight />
        </button>
      </div>

    </div>
  );
}