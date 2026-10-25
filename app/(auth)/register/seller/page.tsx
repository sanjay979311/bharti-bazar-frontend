'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiShield, 
  FiTrendingUp, 
  FiUsers, 
  FiPhoneCall, 
  FiArrowRight, 
  FiMapPin, 
  FiBriefcase,
  FiMail,
  FiUser
} from 'react-icons/fi';
import { FaStore, FaBuilding, FaAward } from 'react-icons/fa';

export default function SellerRegistration() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    mobileNumber: '',
    email: '',
    city: 'Gorakhpur',
    category: 'Industrial Machinery',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-light)] text-[#1e293b]">
      
      {/* 1. HERO & REGISTRATION SECTION */}
      <section className="bg-gradient-to-b from-[var(--color-primary-900)] to-slate-900 text-white py-12 lg:py-16 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary-600)]/30 border border-[var(--color-primary-100)]/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-200">
              <FaAward className="text-[var(--color-accent-500)]" />
              <span>India&apos;s Growing Regional B2B Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Grow Your Business 10x with <br className="hidden sm:inline" />
              <span className="text-[var(--color-accent-500)]">Bharti Bazar</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Connect directly with lakhs of verified wholesale buyers in Gorakhpur, Basti, Khalilabad, and across India. Register your business for FREE today!
            </p>

            {/* Key Benefits Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                'Zero Commission on Direct Buyer Enquiries',
                'Verified Buyer RFQs & Instant SMS Alerts',
                'Dedicated Digital Catalogue Page',
                'Top Ranking in Regional Search Results'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-xs">
                  <FiCheckCircle className="text-[var(--color-success)] text-base shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--color-surface-card)] text-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200">
              
              {!isSubmitted ? (
                <>
                  <div className="mb-6 border-b border-slate-100 pb-4">
                    <h2 className="text-xl font-black text-[var(--color-primary-900)] tracking-tight">
                      List Your Business <span className="text-[var(--color-accent-500)]">FREE</span>
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Start getting buyer enquiries in less than 2 minutes.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Shop Name *</label>
                      <div className="relative">
                        <FaBuilding className="absolute left-3.5 top-3 text-slate-400 text-xs" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Purvanchal Traders"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all"
                        />
                      </div>
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Owner / Contact Person *</label>
                      <div className="relative">
                        <FiUser className="absolute left-3.5 top-3 text-slate-400 text-xs" />
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                      <div className="relative">
                        <FiPhoneCall className="absolute left-3.5 top-3 text-slate-400 text-xs" />
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="10 Digit Mobile Number"
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all"
                        />
                      </div>
                    </div>

                    {/* City & Category Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">City / Hub *</label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Main Category *</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] font-medium text-slate-700"
                        >
                          <option value="Industrial Machinery">Machinery</option>
                          <option value="Textiles & Fabrics">Textiles</option>
                          <option value="Electronics & Components">Electronics</option>
                          <option value="Chemicals & Dyes">Chemicals</option>
                          <option value="Packaging Materials">Packaging</option>
                          <option value="Agriculture Produce">Agriculture</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-2 active:scale-95"
                    >
                      <span>Create Free Seller Account</span>
                      <FiArrowRight className="text-base" />
                    </button>

                    <p className="text-[10px] text-center text-slate-400 font-medium">
                      By registering, you agree to Bharti Bazar&apos;s Terms & Privacy Policy.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-[var(--color-success)] rounded-full flex items-center justify-center mx-auto text-3xl">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--color-primary-900)]">Registration Successful!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Welcome to <strong>Bharti Bazar</strong>! Our onboarding team will contact you shortly to activate your store in <strong>{formData.city}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Back to Form
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-[var(--color-surface-card)] border-y border-slate-200 py-8 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '50,000+', label: 'Registered Sellers' },
            { num: '2,00,000+', label: 'Monthly Buyers' },
            { num: '100%', label: 'Direct Lead Transfer' },
            { num: '₹0', label: 'Listing Commission' },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-[var(--color-primary-600)]">{stat.num}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS (3 SIMPLE STEPS) */}
      <section className="py-14 px-4 max-w-[1280px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-primary-900)]">
            How Bharti Bazar Works for Sellers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            3 simple steps to take your wholesale business digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Create Business Profile',
              desc: 'Add your GST/Business details, address, and upload your products with prices.',
              icon: FaStore
            },
            {
              step: '02',
              title: 'Get Verified Enquiries',
              desc: 'Receive direct buyer calls, WhatsApp messages, and RFQs for your products.',
              icon: FiUsers
            },
            {
              step: '03',
              title: 'Close Deals Directly',
              desc: 'Negotiate price and payment terms directly with buyers with 0% middleman fees.',
              icon: FiTrendingUp
            }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="bg-[var(--color-surface-card)] p-6 rounded-2xl border border-slate-200 shadow-2xs relative hover:border-[var(--color-primary-600)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center text-xl font-bold mb-4 group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                  <IconComp />
                </div>
                <span className="absolute top-6 right-6 text-3xl font-black text-slate-200">{item.step}</span>
                <h3 className="text-base font-extrabold text-[var(--color-primary-900)] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TRUST & SECURITY BANNER */}
      <section className="bg-[var(--color-primary-50)] border-t border-[var(--color-primary-100)] py-12 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-600)] text-white flex items-center justify-center text-2xl shrink-0 shadow-md">
              <FiShield />
            </div>
            <div>
              <h3 className="text-lg font-black text-[var(--color-primary-900)]">Need help setting up your store?</h3>
              <p className="text-xs text-slate-600 font-medium">Our Gorakhpur regional relationship manager is ready to assist you.</p>
            </div>
          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-colors whitespace-nowrap cursor-pointer"
          >
            <FiPhoneCall className="text-base" />
            <span>Call Seller Support: +91 98765 43210</span>
          </a>
        </div>
      </section>

    </div>
  );
}