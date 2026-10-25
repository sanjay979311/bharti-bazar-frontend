"use client";

import React, { useState } from "react";
import { 
  FiZap, 
  FiSearch, 
  FiMapPin, 
  FiFilter, 
  FiCheckCircle, 
  FiClock, 
  FiPhoneCall, 
  FiShield, 
  FiSend 
} from "react-icons/fi";

const sampleLeads = [
  {
    id: "LEAD-101",
    title: "Industrial Stainless Steel Valves (500 Pcs)",
    category: "Industrial Valves & Fittings",
    buyerName: "Apex Manufacturing Solutions",
    buyerType: "Verified Enterprise Buyer",
    isGstVerified: true,
    location: "Mumbai, Maharashtra",
    quantity: "500 Pieces",
    budget: "₹2.5 - ₹3.0 Lakhs",
    postedTime: "10 mins ago",
    description: "Looking for SS 304/316 grade ball valves for chemical plant piping installation. Need immediate delivery within 10 days.",
    status: "Urgent"
  },
  {
    id: "LEAD-102",
    title: "Heavy Duty Hydraulic Pumps",
    category: "Hydraulic Machinery",
    buyerName: "Gujarat Tech Infra",
    buyerType: "Verified GST Buyer",
    isGstVerified: true,
    location: "Ahmedabad, Gujarat",
    quantity: "50 Units",
    budget: "₹1.8 - ₹2.2 Lakhs",
    postedTime: "45 mins ago",
    description: "Require high-pressure gear pumps for heavy earthmovers. Please share technical data sheet along with quotation.",
    status: "High Demand"
  },
  {
    id: "LEAD-103",
    title: "PVC Conduit Pipes (20mm Heavy)",
    category: "Electrical Supplies",
    buyerName: "Royal Contractors",
    buyerType: "Regular Buyer",
    isGstVerified: false,
    location: "Delhi NCR",
    quantity: "2000 Meters",
    budget: "₹85,000",
    postedTime: "2 hours ago",
    description: "Need rigid PVC electrical pipes for residential building project in Noida. Requirement is recurring every month.",
    status: "Standard"
  },
  {
    id: "LEAD-104",
    title: "3-Phase Electric Induction Motors 5HP",
    category: "Electrical Motors",
    buyerName: "Vanguard Engineers",
    buyerType: "Verified Enterprise Buyer",
    isGstVerified: true,
    location: "Coimbatore, Tamil Nadu",
    quantity: "15 Units",
    budget: "₹1.2 Lakhs",
    postedTime: "3 hours ago",
    description: "Looking for energy-efficient IE3 standard motors for textile machinery. Urgent requirement.",
    status: "Urgent"
  }
];

export default function BuyLeadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredLeads = sampleLeads.filter(lead => {
    const matchesSearch = lead.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || lead.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col justify-between space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-[var(--color-accent-500,#f97316)]">
                <FiZap className="text-xl" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                Buy Leads Directory
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 mt-2">
              Browse active buyer requirements matched with your business categories.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-center">
              <span className="text-[10px] font-bold uppercase text-slate-200 block">Available Credits</span>
              <span className="text-base font-black text-amber-400">45 Leads</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
          <input
            type="text"
            placeholder="Search by product name, keywords, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-56">
            <FiFilter className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors appearance-none font-semibold text-slate-700"
            >
              <option value="All">All Categories</option>
              <option value="Industrial Valves & Fittings">Industrial Valves & Fittings</option>
              <option value="Hydraulic Machinery">Hydraulic Machinery</option>
              <option value="Electrical Supplies">Electrical Supplies</option>
              <option value="Electrical Motors">Electrical Motors</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Leads List */}
      <div className="space-y-4">
        {filteredLeads.length > 0 ? (
          filteredLeads.map((lead) => (
            <div 
              key={lead.id} 
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[var(--color-primary-600,#2563eb)]/40 transition-all space-y-4"
            >
              {/* Top Row: Title, Badges & Time */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      {lead.title}
                    </h2>
                    {lead.status === "Urgent" && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 bg-red-100 text-red-700 rounded-md uppercase">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-semibold">{lead.category}</p>
                </div>

                <span className="text-xs text-slate-400 font-medium shrink-0 flex items-center gap-1">
                  <FiClock className="text-xs" /> {lead.postedTime}
                </span>
              </div>

              {/* Requirement Description */}
              <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                "{lead.description}"
              </p>

              {/* Requirement Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-slate-400 block">Quantity</span>
                  <span className="font-bold text-slate-800">{lead.quantity}</span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-slate-400 block">Budget</span>
                  <span className="font-bold text-emerald-600">{lead.budget}</span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-slate-400 block">Location</span>
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <FiMapPin className="text-slate-400 shrink-0" /> {lead.location}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-slate-400 block">Buyer Trust</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1">
                    <FiShield className="text-emerald-500" /> {lead.buyerType}
                  </span>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-700">{lead.buyerName}</span>
                  {lead.isGstVerified && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                      <FiCheckCircle className="text-xs" /> GST Verified
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all">
                    <FiPhoneCall className="text-sm text-slate-500" />
                    <span>View Number</span>
                  </button>

                  <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--color-primary-600,#2563eb)] hover:bg-[var(--color-primary-700,#1d4ed8)] text-white text-xs font-bold transition-all shadow-2xs">
                    <FiSend className="text-sm" />
                    <span>Send Quotation</span>
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <div className="bg-white p-8 text-center rounded-2xl border border-slate-200/80 space-y-2">
            <p className="text-sm font-bold text-slate-700">No Buy Leads Found</p>
            <p className="text-xs text-slate-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

    </div>
  );
}