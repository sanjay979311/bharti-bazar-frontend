"use client";

import React from "react";
import { 
  HiOutlineShieldCheck, 
  HiOutlineCheckBadge, 
  HiOutlineDocumentText, 
  HiOutlineBuildingOffice2 
} from "react-icons/hi2";
import { FiCheckCircle, FiChevronRight, FiAlertCircle } from "react-icons/fi";

export default function VerificationPage() {
  return (
    <div className="w-full space-y-5 text-slate-800">
      
      {/* 1. TOP BANNER HEADER */}
      <div className="bg-gradient-to-r from-[var(--color-primary-900)] to-slate-800 text-white p-6 rounded-2xl shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-[var(--color-success)] text-white p-1 rounded-lg text-lg">
              <HiOutlineShieldCheck />
            </span>
            <h1 className="text-lg sm:text-xl font-black tracking-tight">Trust & Seller Verification Center</h1>
          </div>
          <p className="text-xs text-slate-300 font-medium max-w-2xl">
            Verify your business credentials, GST details, and banking information to build trust with verified suppliers and unlock high-value B2B trade benefits.
          </p>
        </div>
        <div className="bg-white/10 border border-white/15 px-4 py-2.5 rounded-xl text-center shrink-0">
          <span className="text-[10px] text-slate-300 uppercase tracking-wider block font-bold">Verification Status</span>
          <span className="text-xs font-extrabold text-[var(--color-success)] flex items-center gap-1 mt-0.5">
            <FiCheckCircle /> Level 1 Verified
          </span>
        </div>
      </div>

      {/* 2. VERIFICATION STEPS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* GST Verification */}
        <div className="bg-[var(--color-surface-card)] p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-xl shrink-0">
              <HiOutlineDocumentText />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-extrabold text-slate-900">GSTIN Verification</h3>
                <span className="bg-emerald-100 text-[var(--color-success)] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                GST Number: <span className="font-bold text-slate-700">09AABCD1234F1Z5</span> (Uttar Pradesh)
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">Linked with business profile</span>
            <span className="text-[var(--color-primary-600)] font-bold cursor-pointer hover:underline">Update GST &rarr;</span>
          </div>
        </div>

        {/* Business PAN & Legal Entity */}
        <div className="bg-[var(--color-surface-card)] p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
              <HiOutlineBuildingOffice2 />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-extrabold text-slate-900">Legal Business Entity</h3>
                <span className="bg-amber-100 text-amber-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  Pending
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Upload UDYAM / Trade License certificate for wholesale badge.
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-amber-600 font-medium flex items-center gap-1">
              <FiAlertCircle /> 1 document required
            </span>
            <button className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-bold px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer">
              Upload Now
            </button>
          </div>
        </div>

      </div>

      {/* 3. BENEFITS OF VERIFICATION */}
      <div className="bg-[var(--color-surface-card)] rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
        <h2 className="text-sm font-extrabold text-slate-900">Why Get Fully Verified?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-slate-50 rounded-xl space-y-1.5 border border-slate-100">
            <HiOutlineCheckBadge className="text-2xl text-[var(--color-primary-600)]" />
            <h4 className="font-extrabold text-slate-800">Priority Supplier Quotes</h4>
            <p className="text-slate-500 font-medium">Verified buyers receive 3x faster response rates and lowest wholesale pricing from manufacturers.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl space-y-1.5 border border-slate-100">
            <HiOutlineShieldCheck className="text-2xl text-[var(--color-success)]" />
            <h4 className="font-extrabold text-slate-800">Payment Protection</h4>
            <p className="text-slate-500 font-medium">Unlock secure escrow transactions and trade credit safety for bulk regional orders.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl space-y-1.5 border border-slate-100">
            <HiOutlineDocumentText className="text-2xl text-amber-600" />
            <h4 className="font-extrabold text-slate-800">Verified Badge on RFQs</h4>
            <p className="text-slate-500 font-medium">Suppliers treat your bulk inquiries with high priority when your company badge is active.</p>
          </div>
        </div>
      </div>

    </div>
  );
}