'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FiSearch, 
  FiCheckCircle, 
  FiShield, 
  FiFileText, 
  FiSend, 
  FiTruck, 
  FiMapPin, 
  FiPhoneCall, 
  FiArrowRight,
  FiBox,
  FiClock,
  FiHelpCircle
} from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi2';
import { FaBuilding, FaTags, FaUserCheck, FaCogs, FaTractor, FaTools } from 'react-icons/fa';

// Popular Bulk Categories for Buyers
const BULK_CATEGORIES = [
  { name: 'Industrial Machinery', count: '12,500+ Suppliers', icon: FaCogs, href: '/categories/machinery' },
  { name: 'Textiles & Wholesale Fabrics', count: '8,400+ Suppliers', icon: FaTags, href: '/categories/textiles' },
  { name: 'Electronics & Motors', count: '15,000+ Suppliers', icon: FiBox, href: '/categories/electronics' },
  { name: 'Agricultural Produce', count: '6,200+ Suppliers', icon: FaTractor, href: '/categories/agriculture' },
  { name: 'Packaging & Cartons', count: '9,100+ Suppliers', icon: FiBox, href: '/categories/packaging' },
  { name: 'Chemicals & Dyes', count: '4,800+ Suppliers', icon: FaTools, href: '/categories/chemicals' },
];

export default function BuyerLanding() {
  const [rfqData, setRfqData] = useState({
    productName: '',
    quantity: '',
    unit: 'Pieces',
    buyerName: '',
    mobileNumber: '',
    city: 'Gorakhpur',
    details: '',
  });

  const [isRfqSubmitted, setIsRfqSubmitted] = useState(false);

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRfqSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-light)] text-[#1e293b]">
      
      {/* 1. HERO & RFQ (REQUIREMENT POSTING) SECTION */}
      <section className="bg-gradient-to-b from-[var(--color-primary-900)] via-slate-900 to-[var(--color-primary-900)] text-white py-12 lg:py-16 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content for Buyers */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary-600)]/30 border border-[var(--color-primary-100)]/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-200">
              <HiOutlineShieldCheck className="text-[var(--color-accent-500)] text-base" />
              <span>100% Free Buyer Protection & Verified Suppliers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Get the <span className="text-[var(--color-accent-500)]">Best Wholesale Quotes</span> from Verified Sellers
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Tell us what you need! Post your bulk requirement on <strong>Bharti Bazar</strong> and receive instant price quotes directly from top manufacturers in Gorakhpur, Basti, Khalilabad, and across India.
            </p>

            {/* Value Props for Buyers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                'Get Multiple Quotes in 30 Minutes',
                'Direct Factory Rates with Zero Middlemen',
                'Verified Local & Regional Manufacturers',
                '100% Privacy & Spam-Free Contact'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-xs">
                  <FiCheckCircle className="text-[var(--color-success)] text-base shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right RFQ Form Container */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--color-surface-card)] text-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200">
              
              {!isRfqSubmitted ? (
                <>
                  <div className="mb-5 border-b border-slate-100 pb-3">
                    <h2 className="text-xl font-black text-[var(--color-primary-900)] tracking-tight flex items-center gap-2">
                      <FiFileText className="text-[var(--color-accent-500)]" />
                      <span>Post Your <span className="text-[var(--color-accent-500)]">Bulk RFQ</span></span>
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Sellers will compete to give you the lowest price!
                    </p>
                  </div>

                  <form onSubmit={handleRfqSubmit} className="space-y-3.5">
                    
                    {/* Product Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Product / Service Needed *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 5 HP Industrial Electric Motor"
                        value={rfqData.productName}
                        onChange={(e) => setRfqData({ ...rfqData, productName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all font-medium"
                      />
                    </div>

                    {/* Quantity & Unit */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1">Quantity *</label>
                        <input
                          type="number"
                          required
                          placeholder="e.g. 500"
                          value={rfqData.quantity}
                          onChange={(e) => setRfqData({ ...rfqData, quantity: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] transition-all font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Unit</label>
                        <select
                          value={rfqData.unit}
                          onChange={(e) => setRfqData({ ...rfqData, unit: e.target.value })}
                          className="w-full px-2 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] font-medium text-slate-700"
                        >
                          <option value="Pieces">Pieces</option>
                          <option value="Kg">Kg</option>
                          <option value="Tons">Tons</option>
                          <option value="Meters">Meters</option>
                          <option value="Boxes">Boxes</option>
                        </select>
                      </div>
                    </div>

                    {/* Buyer Name & Mobile */}
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={rfqData.buyerName}
                          onChange={(e) => setRfqData({ ...rfqData, buyerName: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] transition-all font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mobile No *</label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="10 Digit No"
                          value={rfqData.mobileNumber}
                          onChange={(e) => setRfqData({ ...rfqData, mobileNumber: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* City Select */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Delivery City *</label>
                      <select
                        value={rfqData.city}
                        onChange={(e) => setRfqData({ ...rfqData, city: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] font-medium text-slate-700"
                      >
                        <option value="Gorakhpur">Gorakhpur</option>
                        <option value="Khalilabad">Khalilabad</option>
                        <option value="Basti">Basti</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-2 active:scale-95"
                    >
                      <FiSend className="text-base" />
                      <span>Submit Requirement & Get Rates</span>
                    </button>

                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-[var(--color-success)] rounded-full flex items-center justify-center mx-auto text-3xl">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--color-primary-900)]">Requirement Posted!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-medium">
                    Your request for <strong>{rfqData.productName}</strong> ({rfqData.quantity} {rfqData.unit}) has been broadcasted to verified sellers in <strong>{rfqData.city}</strong>.
                  </p>
                  <button
                    onClick={() => setIsRfqSubmitted(false)}
                    className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Post Another Requirement
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS BAR FOR BUYERS */}
      <section className="bg-[var(--color-surface-card)] border-y border-slate-200 py-8 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '1,50,000+', label: 'Products & Services' },
            { num: '30 Mins', label: 'Avg Quote Response Time' },
            { num: '100% Free', label: 'For All Wholesale Buyers' },
            { num: 'Verified', label: 'Supplier Badges & Audits' },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-[var(--color-primary-600)]">{stat.num}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPLORE TOP BULK CATEGORIES */}
      <section className="py-14 px-4 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-primary-900)]">
              Explore Top Wholesale Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Find verified regional manufacturers, traders, and suppliers
            </p>
          </div>
          <Link 
            href="/categories"
            className="flex items-center gap-1.5 text-[var(--color-primary-600)] font-extrabold text-xs hover:underline"
          >
            <span>View All Categories</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BULK_CATEGORIES.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <Link
                key={idx}
                href={cat.href}
                className="flex items-center gap-4 bg-[var(--color-surface-card)] p-4 rounded-2xl border border-slate-200 hover:border-[var(--color-primary-600)] shadow-2xs hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-xl shrink-0 group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                  <IconComp />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-800 truncate group-hover:text-[var(--color-primary-600)] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">{cat.count}</p>
                </div>
                <FiArrowRight className="text-slate-300 group-hover:text-[var(--color-primary-600)] group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. HOW BUYING WORKS (3 SIMPLE STEPS) */}
      <section className="bg-[var(--color-surface-card)] border-y border-slate-200 py-14 px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-primary-900)]">
              Simple 3-Step Sourcing Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              How Bharti Bazar helps you find the best rates with complete safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Post Requirement',
                desc: 'Fill out the quick RFQ form with your quantity, specs, and preferred location.',
                icon: FiFileText
              },
              {
                step: '02',
                title: 'Compare Quotes',
                desc: 'Receive competitive price quotes via call and WhatsApp from multiple verified sellers.',
                icon: FaUserCheck
              },
              {
                step: '03',
                title: 'Finalize & Buy',
                desc: 'Choose the best offer, inspect products, and deal directly with zero commission.',
                icon: FiTruck
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-[var(--color-surface-light)] p-6 rounded-2xl border border-slate-200 relative group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-600)] flex items-center justify-center text-xl font-bold mb-4">
                    <IconComp />
                  </div>
                  <span className="absolute top-6 right-6 text-3xl font-black text-slate-300">{item.step}</span>
                  <h3 className="text-base font-extrabold text-[var(--color-primary-900)] mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BUYER SUPPORT & ASSISTANCE BANNER */}
      <section className="bg-[var(--color-primary-50)] py-12 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-600)] text-white flex items-center justify-center text-2xl shrink-0 shadow-md">
              <FiShield />
            </div>
            <div>
              <h3 className="text-lg font-black text-[var(--color-primary-900)]">Looking for custom sourcing assistance?</h3>
              <p className="text-xs text-slate-600 font-medium">Our procurement experts in Gorakhpur will help you find hard-to-get items.</p>
            </div>
          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-colors whitespace-nowrap cursor-pointer"
          >
            <FiPhoneCall className="text-base" />
            <span>Call Buyer Support: +91 98765 43210</span>
          </a>
        </div>
      </section>

    </div>
  );
}




