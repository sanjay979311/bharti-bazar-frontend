"use client";

import React, { useState } from "react";
import { 
  FiCheckCircle, 
  FiZap, 
  FiStar, 
  FiHelpCircle, 
  FiArrowRight, 
  FiPhoneCall,
  FiBox,
  FiMessageSquare
} from "react-icons/fi";

interface FeatureItem {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  billingDetail: string;
  badge: string | null;
  highlighted: boolean;
  features: FeatureItem[];
  buttonText: string;
  buttonVariant: "disabled" | "primary" | "accent";
}

const membershipPlans: PlanItem[] = [
  {
    id: "plan-free",
    name: "Free Supplier",
    tagline: "Small cities & local businesses ke liye completely free starting plan.",
    price: "₹0",
    period: "Forever Free",
    billingDetail: "Lifetime Zero Cost",
    badge: null,
    highlighted: false,
    features: [
      { text: "Up to 15 Product Listings", included: true },
      { text: "Direct Buyer Inquiries via Portal", included: true },
      { text: "Send Quotations to Interested Buyers", included: true },
      { text: "Basic Company Profile & Location Listing", included: true },
      { text: "Priority Category Listing", included: false }
    ],
    buttonText: "Current Active Plan",
    buttonVariant: "disabled"
  },
  {
    id: "plan-starter",
    name: "Standard Seller",
    tagline: "More products add karein aur profile verification badge paayein.",
    price: "₹499",
    period: "per month",
    billingDetail: "Billed annually (₹5,988/year)",
    badge: "Recommended for Beginners",
    highlighted: true,
    features: [
      { text: "Unlimited Product & Catalog Uploads", included: true, highlight: true },
      { text: "Verified Business Seller Badge", included: true, highlight: true },
      { text: "Direct WhatsApp Inquiry Forwarding", included: true },
      { text: "Higher Placement in Search Results", included: true },
      { text: "Lead Manager Dashboard Access", included: true }
    ],
    buttonText: "Upgrade for ₹499/mo",
    buttonVariant: "accent"
  },
  {
    id: "plan-pro",
    name: "Pro Business",
    tagline: "Established manufacturers ke liye top ranking aur featured catalog.",
    price: "₹999",
    period: "per month",
    billingDetail: "Billed annually (₹11,988/year)",
    badge: "Maximum Visibility",
    highlighted: false,
    features: [
      { text: "Everything in Standard Seller Plan", included: true },
      { text: "Top Category Banner Listing", included: true, highlight: true },
      { text: "Featured Product Badge on Search", included: true },
      { text: "Priority Customer Support Desk", included: true },
      { text: "Custom PDF Quotation Generator", included: true }
    ],
    buttonText: "Get Pro Business Plan",
    buttonVariant: "primary"
  }
];

const faqs = [
  {
    q: "Kya starting me mujhe koi lead charges pay karne honge?",
    a: "Nahi, starting me aap completely Free Supplier plan se shuru kar sakte hain. Aap apne products add kar sakte hain aur buyers se direct inquiries receive kar sakte hain."
  },
  {
    q: "Products add karne ke liye kitne charges lagte hain?",
    a: "Free plan me aap 15 tak products bilkul free add kar sakte hain. Agar aapko unlimited products add karne hain toh aap Standard Seller (₹499/month) plan me upgrade kar sakte hain."
  },
  {
    q: "Buyers mujhse kaise contact karenge?",
    a: "Buyers aapke product catalog ko dekh kar direct Inquiry/RFQ send kar sakte hain, jo aapke 'Inquiries & Messages' section aur registered WhatsApp/Email par real-time me receive hogi."
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-8 pb-16">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-8 rounded-2xl shadow-sm text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
          <FiStar className="text-amber-400 fill-amber-400" /> Affordable Seller Plans
        </span>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          Grow Your Business with Simple & Low-Cost Pricing
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Start for free, upload your products, receive direct buyer inquiries, and upgrade as your sales grow.
        </p>
      </div>

      {/* 2. Membership Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {membershipPlans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-2xl p-6 border flex flex-col justify-between transition-all relative ${
              plan.highlighted
                ? "border-[var(--color-primary-600,#2563eb)] ring-2 ring-[var(--color-primary-600,#2563eb)]/20 shadow-md"
                : "border-slate-200/80 shadow-2xs hover:border-slate-300"
            }`}
          >
            {/* Top Badge */}
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-extrabold px-3.5 py-1 bg-[var(--color-accent-500,#f97316)] text-white rounded-full uppercase tracking-wider shadow-xs whitespace-nowrap">
                {plan.badge}
              </span>
            )}

            <div className="space-y-5">
              {/* Title & Tagline */}
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">{plan.name}</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Price Display */}
              <div className="py-3.5 border-y border-slate-100 space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-xs font-bold text-slate-500">{plan.period}</span>
                </div>
                <span className="text-[11px] font-bold text-[var(--color-primary-600,#2563eb)] block">
                  {plan.billingDetail}
                </span>
              </div>

              {/* Feature List */}
              <div className="space-y-2.5">
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {plan.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FiCheckCircle 
                        className={`text-base shrink-0 mt-0.5 ${
                          !feat.included 
                            ? "text-slate-300" 
                            : feat.highlight 
                            ? "text-[var(--color-accent-500,#f97316)]" 
                            : "text-emerald-500"
                        }`} 
                      />
                      <span className={`font-medium ${!feat.included ? "text-slate-400 line-through" : feat.highlight ? "font-bold text-slate-900" : ""}`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer ${
                  plan.buttonVariant === "accent"
                    ? "bg-[var(--color-accent-500,#f97316)] hover:bg-[var(--color-accent-600,#ea580c)] text-white"
                    : plan.buttonVariant === "primary"
                    ? "bg-[var(--color-primary-600,#2563eb)] hover:bg-[var(--color-primary-700,#1d4ed8)] text-white"
                    : "bg-slate-100 text-slate-500 cursor-not-allowed border border-slate-200"
                }`}
              >
                <span>{plan.buttonText}</span>
                {plan.buttonVariant !== "disabled" && <FiArrowRight className="text-sm" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Onboarding Growth Strategy Banner */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary-600,#2563eb)]">
            <FiBox className="text-base" />
            <span>Step 1: Product Catalog Creation</span>
          </div>
          <h2 className="text-base font-bold text-slate-900">Pehle apne products listing add karein</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Aapki products jab live hongi tabhi local buyers aapko search kar payenge aur direct RFQ/Quotation request bhejenge.
          </p>
        </div>

        <div className="flex justify-start md:justify-end">
          <a
            href="/seller/products"
            className="px-5 py-2.5 rounded-xl bg-[var(--color-primary-600,#2563eb)] hover:bg-[var(--color-primary-700,#1d4ed8)] text-white font-bold text-xs flex items-center gap-2 shadow-2xs"
          >
            <FiBox className="text-base" />
            <span>Go to Product Catalog</span>
          </a>
        </div>
      </div>

      {/* 4. FAQ Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
          <FiHelpCircle className="text-[var(--color-primary-600,#2563eb)]" /> Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-slate-100 bg-slate-50/50 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-4 text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-between gap-2 cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className="text-slate-400 text-base">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 pt-2 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 5. Support Assistance Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-600,#2563eb)] text-white flex items-center justify-center shrink-0">
            <FiPhoneCall className="text-lg" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-slate-900">Need help setting up your store catalog?</p>
            <p className="text-[11px] text-slate-500">Hamare seller support executive se baat karein.</p>
          </div>
        </div>

        <button className="px-4 py-2 rounded-xl bg-[var(--color-primary-600,#2563eb)] text-white font-bold text-xs shrink-0 cursor-pointer shadow-2xs">
          Request Callback
        </button>
      </div>

    </div>
  );
}