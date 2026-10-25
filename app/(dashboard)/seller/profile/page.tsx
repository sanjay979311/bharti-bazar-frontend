"use client";

import React, { useState } from "react";
import { 
  FiUserCheck, 
  FiEdit3, 
  FiCheckCircle, 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiShield, 
  FiSave 
} from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi2";

export default function SellerProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "Apex Manufacturing Solutions",
    ownerName: "Sanjay Kumar",
    email: "sanjay@apexmineral.com",
    phone: "+91 98765 43210",
    gstin: "27AABCA1234F1Z5",
    address: "Plot No. 42, MIDC Industrial Area, Andheri East, Mumbai - 400093",
    category: "Industrial Valves & Fittings, Heavy Machinery",
    turnover: "₹5Cr - ₹10Cr",
    yearEstablished: "2015"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic or API call here
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-emerald-400">
              <FiUserCheck className="text-xl" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Company Profile & KYC
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-2">
            Manage your business identity, verified badges, and contact details visible to buyers.
          </p>
        </div>

        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--color-accent-500,#f97316)] hover:bg-[var(--color-accent-600,#ea580c)] text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0"
        >
          {isEditing ? (
            <>
              <FiSave className="text-base" />
              <span>Save Changes</span>
            </>
          ) : (
            <>
              <FiEdit3 className="text-base" />
              <span>Edit Profile</span>
            </>
          )}
        </button>
      </div>

      {/* 2. Verification Status Card */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[var(--color-success,#16a34a)] flex items-center justify-center border border-emerald-100 shrink-0">
            <HiOutlineShieldCheck className="text-2xl" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-bold text-slate-900">Verified Business Seller</h2>
              <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                Active Trust Badge
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Your GSTIN and Bank account have been successfully verified.</p>
          </div>
        </div>

        <div className="text-left sm:text-right shrink-0">
          <span className="text-xs text-slate-400 block font-medium">Profile Strength</span>
          <span className="text-base font-black text-[var(--color-primary-600,#2563eb)]">85% Complete</span>
        </div>
      </div>

      {/* 3. Profile Information Form / Details */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
        <h2 className="text-sm font-bold text-slate-900 tracking-tight pb-2 border-b border-slate-100">
          Business Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
          
          {/* Company Name */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-600 block">Company Name</label>
            <input
              type="text"
              name="companyName"
              disabled={!isEditing}
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 disabled:bg-slate-50 text-slate-800 font-semibold focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
            />
          </div>

          {/* Owner Name */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-600 block">Contact Person / Owner</label>
            <input
              type="text"
              name="ownerName"
              disabled={!isEditing}
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 disabled:bg-slate-50 text-slate-800 font-semibold focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-600 block flex items-center gap-1">
              <FiMail className="text-slate-400" /> Email Address
            </label>
            <input
              type="email"
              name="email"
              disabled={!isEditing}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 disabled:bg-slate-50 text-slate-800 font-semibold focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-600 block flex items-center gap-1">
              <FiPhone className="text-slate-400" /> Mobile Number
            </label>
            <input
              type="text"
              name="phone"
              disabled={!isEditing}
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 disabled:bg-slate-50 text-slate-800 font-semibold focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
            />
          </div>

          {/* GSTIN */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-600 block flex items-center gap-1">
              <FiShield className="text-emerald-500" /> GSTIN Number
            </label>
            <div className="relative">
              <input
                type="text"
                name="gstin"
                disabled={true}
                value={formData.gstin}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-600 font-bold font-mono"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>
          </div>

          {/* Established Year */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-600 block">Year of Establishment</label>
            <input
              type="text"
              name="yearEstablished"
              disabled={!isEditing}
              value={formData.yearEstablished}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 disabled:bg-slate-50 text-slate-800 font-semibold focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="font-semibold text-slate-600 block flex items-center gap-1">
              <FiMapPin className="text-slate-400" /> Business Address
            </label>
            <textarea
              name="address"
              disabled={!isEditing}
              rows={2}
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 disabled:bg-slate-50 text-slate-800 font-semibold focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
            />
          </div>

        </div>
      </div>

    </div>
  );
}