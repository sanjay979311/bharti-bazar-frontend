"use client";

import React from "react";
import { 
  FiEdit3, 
  FiMapPin, 
  FiCalendar, 
  FiCheckCircle, 
  FiChevronRight, 
  FiUser, 
  FiBriefcase, 
  FiHelpCircle, 
  FiChevronDown, 
  FiTag 
} from "react-icons/fi";

export default function BuyerProfilePage() {
  return (
    <div className="w-full space-y-5 text-slate-800">
      
      {/* 1. TOP SECTION: User Info Card & Verified Buyer Progress */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
        
        {/* User Info Card (Left - 5 Cols) */}
        <div className="xl:col-span-5 bg-[var(--color-surface-card)] rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-start gap-4">
            {/* User Avatar Circle */}
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary-900)] text-white text-2xl font-black flex items-center justify-center shrink-0">
              S
            </div>
            
            {/* User Meta Details */}
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-900 tracking-tight uppercase">
                  SANJAY KUMAR
                </h2>
                <button className="text-slate-400 hover:text-[var(--color-primary-600)] transition-colors cursor-pointer">
                  <FiEdit3 className="text-sm" />
                </button>
              </div>
              <p className="text-xs text-slate-500 font-medium">Designationwo•</p>
              <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                <FiMapPin className="text-slate-400 shrink-0" />
                <span>Khalilabad, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                <FiCalendar className="shrink-0" />
                <span>3 Years</span>
              </div>
            </div>
          </div>

          {/* Profile Strength Bar */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex justify-between items-center text-[11px] font-bold mb-1.5">
              <span className="text-slate-400 uppercase tracking-wider">PROFILE STRENGTH</span>
              <span className="text-[var(--color-accent-600)]">47%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-accent-500)] rounded-full w-[47%]"></div>
            </div>
          </div>
        </div>

        {/* Verified Buyer Progress Card (Right - 7 Cols) */}
        <div className="xl:col-span-7 bg-[var(--color-surface-card)] rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[var(--color-success)] font-black text-sm">
              <FiCheckCircle className="text-base" />
              <span>Verified Buyer Progress</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">1 step away</span>
          </div>

          {/* Stepper Progress Bar */}
          <div className="my-4 px-2">
            <div className="relative flex items-center justify-between">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-[var(--color-primary-900)] -translate-y-1/2"></div>
              
              {["Name", "Company", "Email", "Phone"].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 z-10 bg-white px-1">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary-900)] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">{step}</span>
                </div>
              ))}

              <div className="flex flex-col items-center gap-1.5 z-10 bg-white px-1">
                <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-[var(--color-primary-900)] text-transparent flex items-center justify-center text-xs"></div>
                <span className="text-[10px] text-slate-400 font-medium">GST</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
            <button className="text-xs font-bold text-slate-600 hover:text-[var(--color-primary-600)] transition-colors cursor-pointer flex items-center gap-1">
              <span>+ Add GST</span>
            </button>
            <button className="bg-[#00796b] hover:bg-[#00695c] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors shadow-xs cursor-pointer">
              Complete Verification
            </button>
          </div>
        </div>

      </div>

      {/* 2. MIDDLE GRID: Account Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Primary Details */}
        <div className="bg-[var(--color-surface-card)] p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-[var(--color-primary-600)] transition-all flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-lg">
              <FiUser />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">Primary Details</h3>
              <p className="text-[11px] text-[var(--color-accent-600)] font-medium">Missing alternative mobile</p>
            </div>
          </div>
          <FiChevronRight className="text-slate-300 group-hover:text-[var(--color-primary-600)] transition-colors" />
        </div>

        {/* Address Details */}
        <div className="bg-[var(--color-surface-card)] p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-[var(--color-primary-600)] transition-all flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-lg">
              <FiMapPin />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">Address Details</h3>
              <p className="text-[11px] text-[var(--color-accent-600)] font-medium">Missing house no./block</p>
            </div>
          </div>
          <FiChevronRight className="text-slate-300 group-hover:text-[var(--color-primary-600)] transition-colors" />
        </div>

        {/* Business Details */}
        <div className="bg-[var(--color-surface-card)] p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-[var(--color-primary-600)] transition-all flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-lg">
              <FiBriefcase />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">Business Details</h3>
              <p className="text-[11px] text-[var(--color-accent-600)] font-medium">Missing facebook</p>
            </div>
          </div>
          <FiChevronRight className="text-slate-300 group-hover:text-[var(--color-primary-600)] transition-colors" />
        </div>

        {/* Account Settings */}
        <div className="bg-[var(--color-surface-card)] p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-[var(--color-primary-600)] transition-all flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-lg">
              <FiUser />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">Account Settings</h3>
              <p className="text-[11px] text-slate-400 font-medium">Manage Account</p>
            </div>
          </div>
          <FiChevronDown className="text-slate-300 group-hover:text-[var(--color-primary-600)] transition-colors" />
        </div>

        {/* Help */}
        <div className="bg-[var(--color-surface-card)] p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-[var(--color-primary-600)] transition-all flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-lg">
              <FiHelpCircle />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">Help</h3>
              <p className="text-[11px] text-slate-400 font-medium">Get support & assistance</p>
            </div>
          </div>
          <FiChevronRight className="text-slate-300 group-hover:text-[var(--color-primary-600)] transition-colors" />
        </div>

        {/* Raise a Ticket */}
        <div className="bg-[var(--color-surface-card)] p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-[var(--color-primary-600)] transition-all flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-lg">
              <FiTag />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">Raise a ticket</h3>
              <p className="text-[11px] text-slate-400 font-medium">Initiate a support request</p>
            </div>
          </div>
          <FiChevronRight className="text-slate-300 group-hover:text-[var(--color-primary-600)] transition-colors" />
        </div>

      </div>

      {/* 3. BOTTOM SECTION: WhatsApp Updates & Important Alerts */}
      <div className="bg-[var(--color-surface-card)] rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 pb-3 border-b border-slate-100">
          <input type="checkbox" defaultChecked className="rounded text-[var(--color-success)] focus:ring-[var(--color-success)] cursor-pointer" />
          <span>Also get updates on WhatsApp 💬</span>
        </div>

        <div className="grid grid-cols-12 gap-2 text-xs text-slate-500 font-medium text-center">
          <div className="col-span-6 text-left font-bold text-slate-700">
            Manage Your Settings for Important Alerts
          </div>
          <div className="col-span-2 font-semibold">Email</div>
          <div className="col-span-2 font-semibold">SMS</div>
          <div className="col-span-2 font-semibold">APP</div>
        </div>

        <div className="grid grid-cols-12 gap-2 text-xs text-slate-600 items-center pt-2 border-t border-slate-100 text-center">
          <div className="col-span-6 text-left font-medium">
            Supplier details for your requirement <span className="text-[var(--color-danger)] font-bold">(recommended)</span>
          </div>
          <div className="col-span-2"><input type="checkbox" defaultChecked className="cursor-pointer" /></div>
          <div className="col-span-2"><input type="checkbox" defaultChecked className="cursor-pointer" /></div>
          <div className="col-span-2"><input type="checkbox" defaultChecked className="cursor-pointer" /></div>
        </div>
      </div>

    </div>
  );
}