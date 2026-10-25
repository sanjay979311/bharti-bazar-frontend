"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FiFileText, 
  FiPlus, 
  FiSearch, 
  FiFilter, 
  FiCheckCircle, 
  FiClock, 
  FiXCircle,
  FiDownload,
  FiEye,
  FiSend,
  FiDollarSign,
  FiUser
} from "react-icons/fi";

const initialQuotations = [
  {
    id: "QT-2026-089",
    rfqTitle: "Industrial Stainless Steel Valves (500 Pcs)",
    buyerName: "Apex Manufacturing Solutions",
    location: "Mumbai, Maharashtra",
    amount: "₹2,65,000",
    taxAmount: "₹47,700 (18% GST)",
    totalAmount: "₹3,12,700",
    sentDate: "Oct 18, 2026",
    validTill: "Oct 31, 2026",
    status: "Accepted",
    itemsCount: "1 Item (500 Pcs)"
  },
  {
    id: "QT-2026-085",
    rfqTitle: "Heavy Duty Hydraulic Gear Pumps",
    buyerName: "Gujarat Tech Infra",
    location: "Ahmedabad, Gujarat",
    amount: "₹1,95,000",
    taxAmount: "₹35,100 (18% GST)",
    totalAmount: "₹2,30,100",
    sentDate: "Oct 15, 2026",
    validTill: "Oct 28, 2026",
    status: "Under Review",
    itemsCount: "2 Items (50 Units)"
  },
  {
    id: "QT-2026-078",
    rfqTitle: "PVC Conduit Pipes (20mm Heavy)",
    buyerName: "Royal Contractors",
    location: "Delhi NCR",
    amount: "₹82,000",
    taxAmount: "₹14,760 (18% GST)",
    totalAmount: "₹96,760",
    sentDate: "Oct 10, 2026",
    validTill: "Oct 22, 2026",
    status: "Pending Response",
    itemsCount: "1 Item (2000 Meters)"
  },
  {
    id: "QT-2026-062",
    rfqTitle: "3-Phase Induction Electric Motors 5HP",
    buyerName: "Vanguard Engineers",
    location: "Coimbatore, Tamil Nadu",
    amount: "₹1,18,000",
    taxAmount: "₹21,240 (18% GST)",
    totalAmount: "₹1,39,240",
    sentDate: "Oct 02, 2026",
    validTill: "Oct 15, 2026",
    status: "Expired",
    itemsCount: "3 Items (15 Units)"
  }
];

export default function QuotationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredQuotations = initialQuotations.filter((quote) => {
    const matchesSearch =
      quote.rfqTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.buyerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || quote.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-blue-300">
              <FiFileText className="text-2xl" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Quotations & RFQs
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-2">
            Create, track, and send price quotations directly to interested buyer enquiries.
          </p>
        </div>

        <Link
          href="/seller/leads"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-accent-500,#f97316)] hover:bg-[var(--color-accent-600,#ea580c)] text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 cursor-pointer"
        >
          <FiSend className="text-base" />
          <span>Quote New Buy Lead</span>
        </Link>
      </div>

      {/* 2. Quotation Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">
            Total Quotations
          </span>
          <p className="text-2xl font-black text-slate-900">24</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">
            Accepted
          </span>
          <p className="text-2xl font-black text-emerald-600">8</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">
            Under Review
          </span>
          <p className="text-2xl font-black text-amber-600">11</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">
            Quoted Value
          </span>
          <p className="text-2xl font-black text-[var(--color-primary-600,#2563eb)]">
            ₹18.4L
          </p>
        </div>
      </div>

      {/* 3. Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
          <input
            type="text"
            placeholder="Search by Quote ID, RFQ Title, or Buyer Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-56">
            <FiFilter className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors appearance-none font-semibold text-slate-700 cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Accepted">Accepted</option>
              <option value="Under Review">Under Review</option>
              <option value="Pending Response">Pending Response</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Quotations List */}
      <div className="space-y-3">
        {filteredQuotations.length > 0 ? (
          filteredQuotations.map((quote) => (
            <div
              key={quote.id}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[var(--color-primary-600,#2563eb)]/40 transition-all space-y-4"
            >
              {/* Top Row: Quote ID, Title, Status */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-mono font-bold text-[var(--color-primary-600,#2563eb)] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {quote.id}
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                      {quote.rfqTitle}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1 text-slate-700 font-semibold">
                      <FiUser className="text-slate-400" /> {quote.buyerName}
                    </span>
                    <span>•</span>
                    <span>{quote.location}</span>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md shrink-0 uppercase tracking-wider ${
                    quote.status === "Accepted"
                      ? "bg-emerald-100 text-emerald-800"
                      : quote.status === "Under Review"
                      ? "bg-amber-100 text-amber-800"
                      : quote.status === "Pending Response"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {quote.status}
                </span>
              </div>

              {/* Quote Pricing & Summary Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-xs">
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Base Amount
                  </span>
                  <span className="font-bold text-slate-800">
                    {quote.amount}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Applicable GST
                  </span>
                  <span className="font-semibold text-slate-600">
                    {quote.taxAmount}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Total Value
                  </span>
                  <span className="font-extrabold text-[var(--color-primary-600,#2563eb)]">
                    {quote.totalAmount}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Valid Until
                  </span>
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <FiClock className="text-slate-400" /> {quote.validTill}
                  </span>
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-slate-400 font-medium">
                  Sent on <strong>{quote.sentDate}</strong> • {quote.itemsCount}
                </span>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 font-semibold text-slate-700 inline-flex items-center gap-1.5 transition-colors">
                    <FiEye className="text-sm text-slate-500" />
                    <span>View Detail</span>
                  </button>

                  <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 font-semibold text-slate-700 inline-flex items-center gap-1.5 transition-colors">
                    <FiDownload className="text-sm text-slate-500" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-8 text-center rounded-2xl border border-slate-200/80 space-y-2">
            <p className="text-sm font-bold text-slate-700">
              No Quotations Found
            </p>
            <p className="text-xs text-slate-500">
              Try adjusting your search query or status filter.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}