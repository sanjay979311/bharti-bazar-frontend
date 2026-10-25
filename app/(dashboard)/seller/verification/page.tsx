"use client";

import React, { useState } from "react";
import { 
  FiCheckCircle, 
  FiClock, 
  FiAlertCircle, 
  FiFileText, 
  FiCreditCard, 
  FiUpload, 
  FiShield, 
  FiExternalLink,
  FiLock
} from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi2";

export default function SellerVerificationPage() {
  const [gstNumber, setGstNumber] = useState("27AABCA1234F1Z5");
  const [panNumber, setPanNumber] = useState("AABCA1234F");
  const [isVerifyingGst, setIsVerifyingGst] = useState(false);

  return (
    <div className="space-y-6 pb-12">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-emerald-400">
              <HiOutlineShieldCheck className="text-2xl" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              GST & Business Verification Desk
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-2">
            Verify your business identity to unlock Verified Supplier Badge and get 4x more buyer leads.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
            <FiCheckCircle className="text-sm" /> Badge Active
          </span>
        </div>
      </div>

      {/* 2. Verification Step Tracker Progress */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Verification Progress (2 of 3 Completed)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Step 1: GSTIN */}
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                1
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">GSTIN Verification</p>
                <p className="text-[10px] font-semibold text-emerald-700">Verified & Active</p>
              </div>
            </div>
            <FiCheckCircle className="text-base text-emerald-600 shrink-0" />
          </div>

          {/* Step 2: Bank Account */}
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                2
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Bank Penny Drop</p>
                <p className="text-[10px] font-semibold text-emerald-700">Penny Sent & Matched</p>
              </div>
            </div>
            <FiCheckCircle className="text-base text-emerald-600 shrink-0" />
          </div>

          {/* Step 3: MSME / Business License */}
          <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                3
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">MSME / License Upload</p>
                <p className="text-[10px] font-semibold text-amber-700">Pending Optional</p>
              </div>
            </div>
            <FiClock className="text-base text-amber-600 shrink-0" />
          </div>

        </div>
      </div>

      {/* 3. Main GSTIN & PAN Form Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <FiShield className="text-lg text-[var(--color-primary-600,#2563eb)]" />
            <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              Taxation & Registration Details
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
            <FiLock className="text-xs" /> 256-Bit SSL Encrypted
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
          
          {/* GSTIN Field */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-600 block">
              Goods and Services Tax Identification Number (GSTIN)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                placeholder="27AABCA1234F1Z5"
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 font-mono font-bold text-slate-800 uppercase focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
              <button 
                disabled
                className="px-4 py-2.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 flex items-center gap-1"
              >
                <FiCheckCircle className="text-sm" /> Verified
              </button>
            </div>
            <p className="text-[11px] text-slate-400">Business Name: APEX MANUFACTURING SOLUTIONS</p>
          </div>

          {/* PAN Field */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-600 block">
              Permanent Account Number (PAN)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                placeholder="AABCA1234F"
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 font-mono font-bold text-slate-800 uppercase focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
              <button 
                disabled
                className="px-4 py-2.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 flex items-center gap-1"
              >
                <FiCheckCircle className="text-sm" /> Verified
              </button>
            </div>
            <p className="text-[11px] text-slate-400">Matched with GST registered Entity</p>
          </div>

        </div>
      </div>

      {/* 4. Document Verification & File Upload Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
        <h2 className="text-sm font-bold text-slate-900 tracking-tight pb-2 border-b border-slate-100">
          Required Business Proof Documents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Document 1: GST Certificate */}
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[var(--color-primary-600,#2563eb)] border border-blue-100">
                <FiFileText className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">GST Certificate (REG-06)</p>
                <p className="text-[10px] text-slate-400">gst_certificate_2026.pdf (1.2 MB)</p>
              </div>
            </div>

            <span className="text-[10px] font-extrabold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md">
              Approved
            </span>
          </div>

          {/* Document 2: MSME / Udyam Upload Card */}
          <div className="p-4 rounded-xl border border-dashed border-slate-300 hover:border-[var(--color-primary-600,#2563eb)] bg-slate-50/30 flex items-center justify-between cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[var(--color-primary-600,#2563eb)] transition-colors">
                <FiUpload className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Udyam / MSME Certificate</p>
                <p className="text-[10px] text-slate-400">PDF, JPG or PNG (Max 5MB)</p>
              </div>
            </div>

            <button className="px-3 py-1.5 rounded-lg bg-[var(--color-primary-600,#2563eb)] text-white text-xs font-bold shadow-2xs">
              Upload
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}