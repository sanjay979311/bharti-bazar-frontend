"use client";

import React, { useState } from "react";
import { 
  FiBarChart2, 
  FiTrendingUp, 
  FiEye, 
  FiZap, 
  FiInbox, 
  FiDollarSign, 
  FiMapPin, 
  FiCalendar, 
  FiArrowUpRight, 
  FiPieChart, 
  FiLayers 
} from "react-icons/fi";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <div className="space-y-6 pb-12">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-emerald-400">
              <FiBarChart2 className="text-2xl" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Sales & Business Analytics
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-2">
            Track buyer impressions, product views, lead conversions, and regional enquiry trends.
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-2 shrink-0 bg-white/10 p-1.5 rounded-xl border border-white/20">
          <FiCalendar className="text-sm text-slate-300 ml-2" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer pr-2"
          >
            <option value="7d" className="text-slate-900">Last 7 Days</option>
            <option value="30d" className="text-slate-900">Last 30 Days</option>
            <option value="90d" className="text-slate-900">Last 90 Days</option>
            <option value="1y" className="text-slate-900">This Year</option>
          </select>
        </div>
      </div>

      {/* 2. Primary KPI Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Catalog Impressions */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Catalog Impressions
            </span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[var(--color-primary-600,#2563eb)] flex items-center justify-center border border-blue-100">
              <FiEye className="text-base" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">14,280</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600">
              <FiArrowUpRight className="text-xs" /> +18.4%
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Buyer search appearances</p>
        </div>

        {/* Total Enquiries */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Lead Conversions
            </span>
            <div className="w-8 h-8 rounded-xl bg-orange-50 text-[var(--color-accent-500,#f97316)] flex items-center justify-center border border-orange-100">
              <FiZap className="text-base" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">142</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600">
              <FiArrowUpRight className="text-xs" /> +12.1%
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Buy leads & direct RFQs</p>
        </div>

        {/* Lead Response Rate */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Avg Response Time
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <FiTrendingUp className="text-base" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">32 Mins</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600">
              Fast
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Top 10% in your category</p>
        </div>

        {/* Projected Pipeline Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Quoted Business
            </span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <FiDollarSign className="text-base" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹8.45L</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600">
              <FiArrowUpRight className="text-xs" /> +24%
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Active pending quotations</p>
        </div>

      </div>

      {/* 3. Performance Chart & Top Categories Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Visual Monthly Performance (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-5 space-y-5 shadow-2xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900">Traffic & Enquiry Trend</h2>
              <p className="text-xs text-slate-500">Impressions vs actual buyer enquiries over time</p>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary-600,#2563eb)]" /> Views
              </span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-500,#f97316)]" /> Enquiries
              </span>
            </div>
          </div>

          {/* Styled Bar Chart Representation */}
          <div className="h-56 flex items-end justify-between gap-3 pt-6 px-2">
            {[
              { month: "May", views: 40, leads: 25 },
              { month: "Jun", views: 65, leads: 38 },
              { month: "Jul", views: 50, leads: 30 },
              { month: "Aug", views: 85, leads: 55 },
              { month: "Sep", views: 70, leads: 42 },
              { month: "Oct", views: 100, leads: 78 }
            ].map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full flex items-end justify-center gap-1.5 h-full">
                  {/* Views Bar */}
                  <div 
                    style={{ height: `${item.views}%` }} 
                    className="w-3.5 sm:w-5 bg-[var(--color-primary-600,#2563eb)] rounded-t-md transition-all hover:opacity-85" 
                  />
                  {/* Leads Bar */}
                  <div 
                    style={{ height: `${item.leads}%` }} 
                    className="w-3.5 sm:w-5 bg-[var(--color-accent-500,#f97316)] rounded-t-md transition-all hover:opacity-85" 
                  />
                </div>
                <span className="text-xs font-semibold text-slate-500">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Product Categories */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FiLayers className="text-[var(--color-primary-600,#2563eb)]" /> Top Demographics
            </h2>
          </div>

          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Lead Generation by Region
          </p>

          <div className="space-y-3 text-xs">
            {[
              { region: "Maharashtra", percentage: "38%", count: "54 Leads" },
              { region: "Gujarat", percentage: "26%", count: "37 Leads" },
              { region: "Delhi NCR", percentage: "18%", count: "25 Leads" },
              { region: "Tamil Nadu", percentage: "12%", count: "17 Leads" },
              { region: "Others", percentage: "6%", count: "9 Leads" }
            ].map((dem, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-slate-400 text-xs" /> {dem.region}
                  </span>
                  <span className="text-slate-900 font-bold">{dem.percentage} ({dem.count})</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[var(--color-primary-600,#2563eb)] h-full rounded-full" 
                    style={{ width: dem.percentage }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}