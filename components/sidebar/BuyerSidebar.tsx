"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FiGrid, 
  FiUser, 
  FiAward, 
  FiLock, 
  FiMessageSquare, 
  FiShoppingBag, 
  FiDollarSign, 
  FiTruck, 
  FiTrendingUp, 
  FiHelpCircle 
} from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi2";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  badgeType?: "success" | "warning" | "percent";
}

const buyerNavItems: SidebarItem[] = [
  { title: "Dashboard", href: "/buyer", icon: FiGrid },
  { title: "My Profile", href: "/buyer/profile", icon: FiUser, badge: "47%", badgeType: "percent" },
  { title: "Verified Buyer", href: "/buyer/membership", icon: FiAward },
  { title: "Seller Verification", href: "/buyer/verification", icon: HiOutlineShieldCheck, badge: "NEW", badgeType: "success" },
  { title: "Payment Safety", href: "/buyer/payment-safety", icon: FiLock, badge: "NEW", badgeType: "success" },
  { title: "Messages", href: "/buyer/messages", icon: FiMessageSquare },
  { title: "My Orders", href: "/buyer/my-orders", icon: FiShoppingBag },
  { title: "Loans", href: "/buyer/loans", icon: FiDollarSign },
  { title: "Ship With IM", href: "/buyer/shipping", icon: FiTruck },
  { title: "Credit Score", href: "/buyer/credit-score", icon: FiTrendingUp },
];

export default function BuyerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full bg-[var(--color-surface-card)] h-full min-h-screen py-5 px-3 flex flex-col justify-between select-none border-r border-slate-200/60 shadow-2xs">
      
      {/* Top Menu Links */}
      <nav className="space-y-1">
        {buyerNavItems.map((item) => {
          const isActive = pathname === item.href;
          const IconComponent = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between py-2 px-2.5 rounded-xl transition-all duration-150 ${
                isActive
                  ? "bg-[var(--color-primary-50)] text-[var(--color-primary-600)] border border-[var(--color-primary-600)] font-bold shadow-2xs"
                  : "text-slate-700 hover:bg-slate-50 font-semibold border border-transparent"
              }`}
            >
              {/* Left Side: Icon + Title */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                    isActive
                      ? "bg-[var(--color-primary-600)] text-white shadow-2xs"
                      : "text-[var(--color-primary-600)] bg-transparent"
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
                    item.badgeType === "percent"
                      ? "bg-amber-100 text-[var(--color-warning)]"
                      : "bg-emerald-100 text-[var(--color-success)]"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Help and Support Link */}
      <div className="pt-5 pb-2 px-1 border-t border-slate-100">
        <Link
          href="/buyer/support"
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[var(--color-primary-600)] transition-colors"
        >
          <FiHelpCircle className="text-base text-slate-400" />
          <span>Help and support</span>
        </Link>
      </div>

    </aside>
  );
}