

// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { 
//   FiGrid, 
//   FiInbox, 
//   FiBox, 
//   FiFileText, 
//   FiDollarSign, 
//   FiUserCheck, 
//   FiBarChart2, 
//   FiSettings, 
//   FiHelpCircle,
//   FiZap,
//   FiStar
// } from "react-icons/fi";
// import { HiOutlineShieldCheck } from "react-icons/hi2";

// interface SidebarItem {
//   title: string;
//   href: string;
//   icon: React.ElementType;
//   badge?: string;
//   badgeType?: "success" | "warning" | "danger" | "accent";
// }

// const sellerNavItems: SidebarItem[] = [
//   { title: "Dashboard", href: "/seller", icon: FiGrid },
//   { title: "Buy Leads", href: "/seller/leads", icon: FiZap, badge: "12 New", badgeType: "accent" },
//   { title: "Inquiries & Messages", href: "/seller/inquiries", icon: FiInbox, badge: "5", badgeType: "danger" },
//   { title: "Product Catalog", href: "/seller/products", icon: FiBox },
//   { title: "Quotations & RFQs", href: "/seller/quotations", icon: FiFileText },
//   { title: "GST & KYC", href: "/seller/verification", icon: HiOutlineShieldCheck, badge: "Verified", badgeType: "success" },
//   { title: "Payments & Invoices", href: "/seller/payments", icon: FiDollarSign },
//   { title: "Premium Plans", href: "/seller/pricing", icon: FiStar, badge: "PRO", badgeType: "accent" },
//   { title: "Sales Analytics", href: "/seller/analytics", icon: FiBarChart2 },
//   { title: "Company Profile", href: "/seller/profile", icon: FiUserCheck },
//   { title: "Store Settings", href: "/seller/settings", icon: FiSettings },
// ];

// export default function SellerSidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="w-full bg-[var(--color-surface-card,#ffffff)] h-full min-h-screen pt-5 pb-12 px-3 flex flex-col justify-between select-none border-r border-slate-200/60 shadow-2xs">
      
//       <div className="space-y-4">
//         {/* Seller Status Header Banner */}
//         <div className="px-2 py-2.5 rounded-xl bg-[var(--color-primary-50,#eef2ff)] border border-[var(--color-primary-100,#e0e7ff)] flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-success,#16a34a)] animate-pulse" />
//             <span className="text-xs font-bold text-[var(--color-primary-900,#1e3a8a)]">Seller Live</span>
//           </div>
//           <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-[var(--color-accent-500,#f97316)] text-white">
//             PRO
//           </span>
//         </div>

//         {/* Navigation Items */}
//         <nav className="space-y-1">
//           {sellerNavItems.map((item) => {
//             const isActive = pathname === item.href;
//             const IconComponent = item.icon;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`flex items-center justify-between py-2 px-2.5 rounded-xl transition-all duration-150 ${
//                   isActive
//                     ? "bg-[var(--color-primary-50,#eef2ff)] text-[var(--color-primary-600,#2563eb)] border border-[var(--color-primary-600,#2563eb)] font-bold shadow-2xs"
//                     : "text-slate-700 hover:bg-slate-50 font-semibold border border-transparent"
//                 }`}
//               >
//                 {/* Left Side: Icon + Title */}
//                 <div className="flex items-center gap-2.5 min-w-0">
//                   <div
//                     className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center shrink-0 transition-all ${
//                       isActive
//                         ? "bg-[var(--color-primary-600,#2563eb)] text-white shadow-2xs"
//                         : "text-[var(--color-primary-600,#2563eb)] bg-transparent"
//                     }`}
//                   >
//                     <IconComponent className="text-base" />
//                   </div>
//                   <span className="text-xs sm:text-[13px] truncate tracking-tight">{item.title}</span>
//                 </div>

//                 {/* Right Side Badges */}
//                 {item.badge && (
//                   <span
//                     className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md shrink-0 ${
//                       item.badgeType === "accent"
//                         ? "bg-orange-100 text-[var(--color-accent-600,#ea580c)]"
//                         : item.badgeType === "danger"
//                         ? "bg-red-100 text-[var(--color-danger,#dc2626)]"
//                         : item.badgeType === "warning"
//                         ? "bg-amber-100 text-[var(--color-warning,#ca8a04)]"
//                         : "bg-emerald-100 text-[var(--color-success,#16a34a)]"
//                     }`}
//                   >
//                     {item.badge}
//                   </span>
//                 )}
//               </Link>
//             );
//           })}
//         </nav>
//       </div>

//       {/* Bottom Section */}
//       <div className="pt-4 pb-4 border-t border-slate-100 space-y-3">
//         {/* Support Link */}
//         <Link
//           href="/seller/support"
//           className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[var(--color-primary-600,#2563eb)] transition-colors px-1"
//         >
//           <FiHelpCircle className="text-base text-slate-400" />
//           <span>Seller Desk & Support</span>
//         </Link>
//       </div>

//     </aside>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FiGrid, 
  FiInbox, 
  FiBox, 
  FiFileText, 
  FiDollarSign, 
  FiUserCheck, 
  FiBarChart2, 
  FiSettings, 
  FiHelpCircle,
  FiZap,
  FiStar,
  FiMenu,
  FiX
} from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi2";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  badgeType?: "success" | "warning" | "danger" | "accent";
}

const sellerNavItems: SidebarItem[] = [
  { title: "Dashboard", href: "/seller", icon: FiGrid },
  { title: "Buy Leads", href: "/seller/leads", icon: FiZap, badge: "12 New", badgeType: "accent" },
  { title: "Inquiries & Messages", href: "/seller/inquiries", icon: FiInbox, badge: "5", badgeType: "danger" },
  { title: "Product Catalog", href: "/seller/products", icon: FiBox },
  { title: "Quotations & RFQs", href: "/seller/quotations", icon: FiFileText },
  { title: "GST & KYC", href: "/seller/verification", icon: HiOutlineShieldCheck, badge: "Verified", badgeType: "success" },
  { title: "Payments & Invoices", href: "/seller/payments", icon: FiDollarSign },
  { title: "Premium Plans", href: "/seller/pricing", icon: FiStar, badge: "PRO", badgeType: "accent" },
  { title: "Sales Analytics", href: "/seller/analytics", icon: FiBarChart2 },
  { title: "Company Profile", href: "/seller/profile", icon: FiUserCheck },
  { title: "Store Settings", href: "/seller/settings", icon: FiSettings },
];

export default function SellerSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ========================================================= */}
      {/* 1. Mobile & Tablet Top Bar (Visible only on lg:hidden) */}
      {/* ========================================================= */}
      <div className="lg:hidden sticky top-0 z-40 bg-[var(--color-primary-900,#1e3a8a)] text-white px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FiX className="text-xl text-white" /> : <FiMenu className="text-xl text-white" />}
          </button>
          <span className="text-sm font-bold tracking-tight">Seller Dashboard</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[var(--color-accent-500,#f97316)] text-white">
            PRO LIVE
          </span>
        </div>
      </div>

      {/* Backdrop overlay for mobile screen open state */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* ========================================================= */}
      {/* 2. Sidebar Navigation Container */}
      {/* ========================================================= */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 z-50 lg:z-auto w-[270px] lg:w-full bg-[var(--color-surface-card,#ffffff)] h-screen lg:h-full lg:min-h-screen pt-5 pb-16 px-3 flex flex-col justify-between select-none border-r border-slate-200/60 shadow-lg lg:shadow-2xs transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="space-y-4">
          
          {/* Header Mobile Close & Status Banner */}
          <div className="flex items-center justify-between px-2 py-2.5 rounded-xl bg-[var(--color-primary-50,#eef2ff)] border border-[var(--color-primary-100,#e0e7ff)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-success,#16a34a)] animate-pulse" />
              <span className="text-xs font-bold text-[var(--color-primary-900,#1e3a8a)]">Seller Online</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-[var(--color-accent-500,#f97316)] text-white">
                PRO
              </span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="lg:hidden p-1 text-slate-500 hover:text-slate-800"
              >
                <FiX className="text-lg" />
              </button>
            </div>
          </div>

          {/* Navigation Menu Items */}
          <nav className="space-y-1">
            {sellerNavItems.map((item) => {
              const isActive = pathname === item.href;
              const IconComponent = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-all duration-150 ${
                    isActive
                      ? "bg-[var(--color-primary-50,#eef2ff)] text-[var(--color-primary-600,#2563eb)] border border-[var(--color-primary-600,#2563eb)] font-bold shadow-2xs"
                      : "text-slate-700 hover:bg-slate-50 font-semibold border border-transparent"
                  }`}
                >
                  {/* Left Side: Icon + Title */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? "bg-[var(--color-primary-600,#2563eb)] text-white shadow-2xs"
                          : "text-[var(--color-primary-600,#2563eb)] bg-transparent"
                      }`}
                    >
                      <IconComponent className="text-base" />
                    </div>
                    <span className="text-xs sm:text-[13px] truncate tracking-tight">{item.title}</span>
                  </div>

                  {/* Right Side Badges */}
                  {item.badge && (
                    <span
                      className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md shrink-0 ${
                        item.badgeType === "accent"
                          ? "bg-orange-100 text-[var(--color-accent-600,#ea580c)]"
                          : item.badgeType === "danger"
                          ? "bg-red-100 text-[var(--color-danger,#dc2626)]"
                          : item.badgeType === "warning"
                          ? "bg-amber-100 text-[var(--color-warning,#ca8a04)]"
                          : "bg-emerald-100 text-[var(--color-success,#16a34a)]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Support Section */}
        <div className="pt-4 pb-6 border-t border-slate-100 space-y-3">
          <Link
            href="/seller/support"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[var(--color-primary-600,#2563eb)] transition-colors px-1"
          >
            <FiHelpCircle className="text-base text-slate-400" />
            <span>Seller Desk & Support</span>
          </Link>
        </div>

      </aside>
    </>
  );
}