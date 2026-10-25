"use client";

import React, { useState } from "react";
import { 
  FiDollarSign, 
  FiArrowUpRight, 
  FiDownload, 
  FiSearch, 
  FiFilter, 
  FiCreditCard, 
  FiCheckCircle, 
  FiClock, 
  FiFileText,
  FiTrendingUp
} from "react-icons/fi";

const sampleTransactions = [
  {
    id: "INV-2026-102",
    buyerName: "Apex Manufacturing Solutions",
    description: "Payment for Order #ORD-8921 (SS Valves)",
    amount: "₹3,12,700",
    date: "Oct 18, 2026",
    method: "Bank Transfer (NEFT)",
    status: "Completed"
  },
  {
    id: "INV-2026-098",
    buyerName: "Gujarat Tech Infra",
    description: "Payment for Order #ORD-8840 (Hydraulic Pumps)",
    amount: "₹2,30,100",
    date: "Oct 15, 2026",
    method: "UPI Payment",
    status: "Completed"
  },
  {
    id: "INV-2026-091",
    buyerName: "Royal Contractors",
    description: "Advance Payment for Order #ORD-8712",
    amount: "₹50,000",
    date: "Oct 12, 2026",
    method: "Credit Card",
    status: "Processing"
  },
  {
    id: "INV-2026-084",
    buyerName: "Vanguard Engineers",
    description: "Payment for Order #ORD-8510 (Electric Motors)",
    amount: "₹1,39,240",
    date: "Oct 05, 2026",
    method: "Bank Transfer (RTGS)",
    status: "Completed"
  }
];

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredTransactions = sampleTransactions.filter((tx) => {
    const matchesSearch =
      tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.buyerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || tx.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-emerald-400">
              <FiDollarSign className="text-2xl" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Payments & Invoices Desk
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-2">
            Track buyer settlements, download GST invoices, and manage direct bank payouts.
          </p>
        </div>

        <button className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer">
          <FiDownload className="text-base text-amber-400" />
          <span>Download Statement</span>
        </button>
      </div>

      {/* 2. Key Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Received</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <FiDollarSign className="text-base" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹7,32,040</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600">
              <FiArrowUpRight className="text-xs" /> +15.2%
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Cleared to Bank Account</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Payouts</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
              <FiClock className="text-base" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹50,000</span>
            <span className="text-xs font-bold text-amber-600">Processing</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Expected in 24 Hours</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">GST Collected</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[var(--color-primary-600,#2563eb)] flex items-center justify-center border border-blue-100">
              <FiFileText className="text-base" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹1,18,800</span>
            <span className="text-xs font-bold text-emerald-600">18% Rate</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Ready for GSTR-1 File</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Payout Bank</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <FiCreditCard className="text-base" />
            </div>
          </div>
          <div className="space-y-0.5">
            <p className="text-base font-bold text-slate-900">HDFC Bank Ltd.</p>
            <p className="text-[11px] font-mono text-slate-500 font-semibold">•••• 1234 (Verified)</p>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Direct Settlement</p>
        </div>

      </div>

      {/* 3. Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
          <input
            type="text"
            placeholder="Search by Invoice ID, Buyer Name, or Details..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-56">
            <FiFilter className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-[var(--color-primary-600,#2563eb)] transition-colors appearance-none font-semibold text-slate-700 cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Transactions List / Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight">Recent Settlement Invoices</h2>
          <span className="text-xs font-semibold text-slate-400">{filteredTransactions.length} Invoices</span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((tx) => (
              <div
                key={tx.id}
                className="p-4 sm:p-5 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-mono font-bold text-[var(--color-primary-600,#2563eb)] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {tx.id}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {tx.buyerName}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-medium">
                    {tx.description}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium pt-0.5">
                    <span>Date: <strong className="text-slate-600">{tx.date}</strong></span>
                    <span>•</span>
                    <span>Via: <strong className="text-slate-600">{tx.method}</strong></span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="text-left sm:text-right">
                    <p className="text-base sm:text-lg font-black text-slate-900">
                      {tx.amount}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded ${
                        tx.status === "Completed"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {tx.status === "Completed" ? (
                        <FiCheckCircle className="text-xs" />
                      ) : (
                        <FiClock className="text-xs" />
                      )}
                      {tx.status}
                    </span>
                  </div>

                  <button className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-[var(--color-primary-600,#2563eb)] hover:bg-slate-50 transition-colors cursor-pointer">
                    <FiDownload className="text-base" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center space-y-1">
              <p className="text-sm font-bold text-slate-700">No Invoices Found</p>
              <p className="text-xs text-slate-500">Try adjusting your search query or filter settings.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}