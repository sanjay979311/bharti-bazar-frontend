"use client";

import React, { useState } from "react";
import { 
  FiSettings, 
  FiBell, 
  FiUsers, 
  FiLock, 
  FiSave, 
  FiGlobe, 
  FiPlus, 
  FiTrash2, 
  FiCheckCircle,
  FiMail,
  FiSmartphone,
  FiShield
} from "react-icons/fi";

export default function SellerSettingsPage() {
  const [activeTab, setActiveTab] = useState<"store" | "notifications" | "team" | "security">("store");
  
  // Settings Form State
  const [storeSettings, setStoreSettings] = useState({
    storeName: "Apex Manufacturing Store",
    supportEmail: "support@apexmineral.com",
    supportPhone: "+91 98765 43210",
    timezone: "IST (UTC+05:30)",
    currency: "INR (₹)",
    leadAutoAssign: true,
    emailAlerts: true,
    whatsappAlerts: true,
    smsAlerts: false,
    twoFactorAuth: true
  });

  const [teamMembers] = useState([
    { id: "TM-01", name: "Sanjay Kumar", email: "sanjay@apexmineral.com", role: "Owner & Admin", status: "Active" },
    { id: "TM-02", name: "Rahul Sharma", email: "rahul.sales@apexmineral.com", role: "Sales Executive", status: "Active" },
  ]);

  const handleToggle = (key: keyof typeof storeSettings) => {
    setStoreSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-blue-300">
              <FiSettings className="text-2xl" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Store & Account Settings
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-2">
            Configure your seller store preferences, lead notification alerts, and team access permissions.
          </p>
        </div>

        <button 
          onClick={() => alert("Settings Saved!")}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent-500,#f97316)] hover:bg-[var(--color-accent-600,#ea580c)] text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 cursor-pointer"
        >
          <FiSave className="text-base" />
          <span>Save Preferences</span>
        </button>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200/80 pb-0 overflow-x-auto">
        <button
          onClick={() => setActiveTab("store")}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "store"
              ? "border-[var(--color-primary-600,#2563eb)] text-[var(--color-primary-600,#2563eb)]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FiGlobe className="text-base" />
          <span>Store Info & Preferences</span>
        </button>

        <button
          onClick={() => setActiveTab("notifications")}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "notifications"
              ? "border-[var(--color-primary-600,#2563eb)] text-[var(--color-primary-600,#2563eb)]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FiBell className="text-base" />
          <span>Lead & Inquiry Alerts</span>
        </button>

        <button
          onClick={() => setActiveTab("team")}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "team"
              ? "border-[var(--color-primary-600,#2563eb)] text-[var(--color-primary-600,#2563eb)]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FiUsers className="text-base" />
          <span>Team & Staff Roles</span>
        </button>

        <button
          onClick={() => setActiveTab("security")}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "security"
              ? "border-[var(--color-primary-600,#2563eb)] text-[var(--color-primary-600,#2563eb)]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FiLock className="text-base" />
          <span>Security & Password</span>
        </button>
      </div>

      {/* 3. Tab Content 1: Store Preferences */}
      {activeTab === "store" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight pb-2 border-b border-slate-100">
            General Store Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-600 block">Public Display Store Name</label>
              <input
                type="text"
                value={storeSettings.storeName}
                onChange={(e) => setStoreSettings({ ...storeSettings, storeName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-600 block">Inquiry Support Email</label>
              <input
                type="email"
                value={storeSettings.supportEmail}
                onChange={(e) => setStoreSettings({ ...storeSettings, supportEmail: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-600 block">Support Phone Number</label>
              <input
                type="text"
                value={storeSettings.supportPhone}
                onChange={(e) => setStoreSettings({ ...storeSettings, supportPhone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-600 block">Default Currency</label>
              <input
                type="text"
                disabled
                value={storeSettings.currency}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 font-semibold text-slate-600"
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. Tab Content 2: Notification Alerts */}
      {activeTab === "notifications" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight pb-2 border-b border-slate-100">
            Real-Time Buyer Lead Notifications
          </h2>

          <div className="space-y-4">
            {/* Email Notification */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[var(--color-primary-600,#2563eb)]">
                  <FiMail className="text-lg" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">Email Alerts for New Buy Leads</p>
                  <p className="text-[11px] text-slate-500">Get instant emails whenever a matching lead is posted.</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle("emailAlerts")}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                  storeSettings.emailAlerts ? "bg-[var(--color-primary-600,#2563eb)]" : "bg-slate-300"
                }`}
              >
                <span className={`block w-4 h-4 bg-white rounded-full transition-transform absolute top-1 ${
                  storeSettings.emailAlerts ? "left-6" : "left-1"
                }`} />
              </button>
            </div>

            {/* WhatsApp Notification */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <FiSmartphone className="text-lg" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">WhatsApp Lead Notifications</p>
                  <p className="text-[11px] text-slate-500">Receive instant RFQ details on your WhatsApp mobile.</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle("whatsappAlerts")}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                  storeSettings.whatsappAlerts ? "bg-emerald-600" : "bg-slate-300"
                }`}
              >
                <span className={`block w-4 h-4 bg-white rounded-full transition-transform absolute top-1 ${
                  storeSettings.whatsappAlerts ? "left-6" : "left-1"
                }`} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Tab Content 3: Team Access */}
      {activeTab === "team" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              Manage Staff & Representatives
            </h2>
            <button className="px-3.5 py-1.5 rounded-xl bg-[var(--color-primary-600,#2563eb)] text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs">
              <FiPlus className="text-sm" /> Add Team Member
            </button>
          </div>

          <div className="space-y-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-50,#eef2ff)] text-[var(--color-primary-600,#2563eb)] font-bold text-xs flex items-center justify-center border border-[var(--color-primary-100,#e0e7ff)]">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">{member.name}</p>
                    <p className="text-[11px] text-slate-500">{member.email} • <strong className="text-slate-700">{member.role}</strong></p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                    {member.status}
                  </span>
                  <button className="p-2 text-slate-400 hover:text-red-600 transition-colors">
                    <FiTrash2 className="text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Tab Content 4: Security */}
      {activeTab === "security" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight pb-2 border-b border-slate-100">
            Account Credentials & Security
          </h2>

          <div className="space-y-4 max-w-md text-xs sm:text-sm">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-600 block">Current Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-600 block">New Password</label>
              <input
                type="password"
                placeholder="Enter new strong password"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
            </div>

            <button className="px-4 py-2.5 rounded-xl bg-[var(--color-primary-600,#2563eb)] text-white font-bold text-xs shadow-2xs">
              Update Password
            </button>
          </div>
        </div>
      )}

    </div>
  );
}