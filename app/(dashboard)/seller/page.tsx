import React from "react";
import Link from "next/link";
import { 
  FiZap, 
  FiInbox, 
  FiBox, 
  FiDollarSign, 
  FiTrendingUp, 
  FiArrowUpRight, 
  FiPlus, 
  FiCheckCircle, 
  FiClock, 
  FiChevronRight,
  FiArrowRight,
  FiAward
} from "react-icons/fi";

export default function SellerDashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* 1. Welcome Dark Blue Banner (Image Style) */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col justify-between space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Welcome back, Sanjay Kumar! 👋[cite: 1]
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              Manage your bulk RFQs, chat directly with manufacturers, and track your business profile strength[cite: 1].
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/seller/products/add"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all"
            >
              <FiPlus className="text-base" />
              <span>Add Product</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Top Metric Summary Cards (Image & Overview Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Active RFQs / Leads */}
        <div className="bg-[var(--color-surface-card,#ffffff)] p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              ACTIVE RFQS[cite: 1]
            </span>
            <p className="text-3xl font-black text-slate-900">12[cite: 1]</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-primary-600,#2563eb)] flex items-center justify-center border border-blue-100">
            <FiZap className="text-lg" />
          </div>
        </div>

        {/* New Messages */}
        <div className="bg-[var(--color-surface-card,#ffffff)] p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              NEW MESSAGES[cite: 1]
            </span>
            <p className="text-3xl font-black text-slate-900">5[cite: 1]</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--color-success,#16a34a)] flex items-center justify-center border border-emerald-100">
            <FiInbox className="text-lg" />
          </div>
        </div>

        {/* Buyer Tier */}
        <div className="bg-[var(--color-surface-card,#ffffff)] p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              BUYER TIER[cite: 1]
            </span>
            <p className="text-xl sm:text-2xl font-black text-[var(--color-accent-500,#f97316)]">
              Plus Member[cite: 1]
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[var(--color-accent-500,#f97316)] flex items-center justify-center border border-amber-100">
            <FiAward className="text-lg" />
          </div>
        </div>

      </div>

      {/* 3. Quick Portal Navigation Section (Image Style) */}
      <div className="bg-[var(--color-surface-card,#ffffff)] p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
        <h2 className="text-sm font-bold text-slate-900 tracking-tight">
          Quick Portal Navigation[cite: 1]
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          
          <Link
            href="/seller/verification"
            className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-[var(--color-primary-50,#eef2ff)] border border-slate-200/60 hover:border-[var(--color-primary-600,#2563eb)] transition-all group"
          >
            <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[var(--color-primary-600,#2563eb)]">
              Complete Profile Verification (47%)[cite: 1]
            </span>
            <FiArrowRight className="text-slate-400 group-hover:text-[var(--color-primary-600,#2563eb)] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/seller/leads"
            className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-[var(--color-primary-50,#eef2ff)] border border-slate-200/60 hover:border-[var(--color-primary-600,#2563eb)] transition-all group"
          >
            <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[var(--color-primary-600,#2563eb)]">
              Check Supplier Responses & Quotes[cite: 1]
            </span>
            <FiArrowRight className="text-slate-400 group-hover:text-[var(--color-primary-600,#2563eb)] group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>

      {/* 4. Detailed Metrics & Buy Leads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase">New Buy Leads</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-slate-900">12</span>
            <span className="text-xs font-bold text-emerald-600">+24%</span>
          </div>
          <p className="text-[11px] text-slate-400">Matching your product categories</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase">Direct Inquiries</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-slate-900">5</span>
            <span className="text-xs font-bold text-amber-600">Pending</span>
          </div>
          <p className="text-[11px] text-slate-400">2 requires urgent reply</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase">Active Products</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-slate-900">48</span>
            <span className="text-xs font-bold text-emerald-600">100% Live</span>
          </div>
          <p className="text-[11px] text-slate-400">All verified by quality team</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase">Monthly Earnings</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-slate-900">₹1.42L</span>
            <span className="text-xs font-bold text-emerald-600">+12%</span>
          </div>
          <p className="text-[11px] text-slate-400">Based on closed quotations</p>
        </div>
      </div>

      {/* 5. Recent Buy Leads & Trust Score Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* High-Match Buy Leads */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-5 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">High-Match Buy Leads</h2>
              <p className="text-xs text-slate-500">Recent requirements posted by buyers</p>
            </div>
            <Link
              href="/seller/leads"
              className="text-xs font-bold text-[var(--color-primary-600,#2563eb)] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <FiChevronRight className="text-sm" />
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { title: "Industrial Stainless Steel Valves (500 Pcs)", location: "Mumbai, Maharashtra", qty: "500 Pieces", budget: "₹2.5 Lakhs", time: "10 mins ago", buyerType: "Verified Enterprise Buyer" },
              { title: "Heavy Duty Hydraulic Pumps", location: "Ahmedabad, Gujarat", qty: "50 Units", budget: "₹1.8 Lakhs", time: "45 mins ago", buyerType: "Verified GST Buyer" },
              { title: "PVC Conduit Pipes (20mm)", location: "Delhi NCR", qty: "2000 Meters", budget: "₹85,000", time: "2 hours ago", buyerType: "Regular Buyer" }
            ].map((lead, index) => (
              <div key={index} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-slate-800">{lead.title}</span>
                    <span className="text-[10px] font-extrabold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">{lead.buyerType}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 flex-wrap">
                    <span><b>Qty:</b> {lead.qty}</span>
                    <span>•</span>
                    <span><b>Budget:</b> {lead.budget}</span>
                    <span>•</span>
                    <span>{lead.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="text-[10px] text-slate-400">{lead.time}</span>
                  <button className="px-3 py-1.5 rounded-lg bg-[var(--color-primary-600,#2563eb)] text-white text-xs font-bold shadow-2xs">
                    Contact Buyer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Score & Tips */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-4 shadow-2xs">
            <h2 className="text-base font-bold text-slate-900">Seller Trust Score</h2>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-50,#eef2ff)] border border-[var(--color-primary-100,#e0e7ff)] flex items-center justify-center text-[var(--color-primary-600,#2563eb)] font-extrabold text-xl">
                85%
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Excellent Profile</p>
                <p className="text-[11px] text-slate-500 mt-0.5">High chance of winning lead responses.</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>GST Verified</span>
                <span className="font-bold text-emerald-600">Done</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Catalog Completeness</span>
                <span className="font-bold text-slate-800">90%</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Avg Response Time</span>
                <span className="font-bold text-slate-800">&lt; 1 Hour</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/5 to-transparent border border-amber-500/25 space-y-2">
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wider">
              Seller Tip
            </span>
            <p className="text-xs font-bold text-slate-800">Respond within 15 minutes</p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Sellers who contact buyers within the first 15 minutes convert 3x more deals than competitors.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}