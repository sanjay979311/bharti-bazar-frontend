'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  FiSearch, 
  FiUser, 
  FiBox, 
  FiHelpCircle, 
  FiMessageSquare,
  FiChevronDown,
  FiClock,
  FiMenu,
  FiX,
  FiChevronRight,
  FiPlusCircle,
  FiGlobe,
  FiPhoneCall,
  FiGrid,
  FiFileText
} from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi2';
import { FaMapMarkerAlt, FaStore, FaTools, FaTractor, FaCogs } from 'react-icons/fa';

// Dummy Locations Data
const DUMMY_LOCATIONS = ['Gorakhpur', 'Khalilabad', 'Basti', 'Lucknow', 'Varanasi', 'Delhi NCR'];

// Top B2B Categories for Left Drawer
const TOP_CATEGORIES = [
  { name: 'Industrial Machinery', icon: FaCogs, href: '/categories/machinery' },
  { name: 'Textiles & Fabrics', icon: FiGrid, href: '/categories/textiles' },
  { name: 'Electronics & Components', icon: FiBox, href: '/categories/electronics' },
  { name: 'Chemicals & Dyes', icon: FaTools, href: '/categories/chemicals' },
  { name: 'Packaging Materials', icon: FiBox, href: '/categories/packaging' },
  { name: 'Agriculture Produce', icon: FaTractor, href: '/categories/agriculture' },
];

// Dummy Recent Search History
const RECENT_SEARCHES = ['Fresh Dates', 'Stainless Steel Coils', 'Electric Motor', 'Carton Box'];

// Dummy Auto-Suggestions
const DUMMY_SEARCH_ITEMS = [
  { id: 1, title: 'Stainless Steel Coils', category: 'Industrial Machinery', type: 'Product' },
  { id: 2, title: 'Industrial Electric Motor', category: 'Electronics', type: 'Product' },
  { id: 3, title: 'Packaging Carton Box', category: 'Packaging', type: 'Product' },
  { id: 4, title: 'Cold Storage Services', category: 'Logistics', type: 'Service' },
];

export default function Header() {
  const [selectedLocation, setSelectedLocation] = useState('Gorakhpur');
  const [locationSearch, setLocationSearch] = useState('');
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const [query, setQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const locationRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLocations = DUMMY_LOCATIONS.filter(loc =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const filteredSearchResults = DUMMY_SEARCH_ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 py-2 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          
          {/* 1. BRAND LOGO & DRAWER MENU TOGGLE */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-xl text-[#0B1E48] transition-colors cursor-pointer"
              title="Open Navigation Drawer"
            >
              <FiMenu className="text-xl sm:text-2xl" />
            </button>

            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#1D61E7] flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-xs">
                K
              </div>
              <span className="text-lg sm:text-2xl font-black text-[#0B1E48] tracking-tight">
                KidBazaar
              </span>
            </Link>
          </div>

          {/* 2. SEARCH SECTION (Mobile par bhi 1 Row me Location + Search Box) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-[220px] max-w-2xl order-3 md:order-2">
            
            {/* Location Selector (Always Visible in 1 Row) */}
            <div className="relative shrink-0" ref={locationRef}>
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center bg-[#F1F5F9] hover:bg-gray-200 border border-transparent rounded-xl overflow-hidden transition-all cursor-pointer"
              >
                <div className="flex items-center gap-1 px-2 sm:px-3 py-2 text-[11px] sm:text-xs font-semibold text-slate-800">
                  <FaMapMarkerAlt className="text-red-500 text-[11px] sm:text-xs shrink-0" />
                  <span className="max-w-[65px] sm:max-w-none truncate">{selectedLocation}</span>
                </div>
                <div className="border-l border-gray-300 px-1.5 sm:px-2 py-2 flex items-center text-slate-500">
                  <FiChevronDown className={`text-[10px] sm:text-xs transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Location Dropdown */}
              {isLocationOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-52 sm:w-56 bg-white border border-gray-200 rounded-xl shadow-2xl p-2.5 z-50">
                  <input
                    type="text"
                    placeholder="Search city..."
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg outline-none focus:border-[#1D61E7] mb-2"
                    autoFocus
                  />
                  <div className="max-h-44 overflow-y-auto space-y-0.5">
                    {filteredLocations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setIsLocationOpen(false);
                          setLocationSearch('');
                        }}
                        className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors ${
                          selectedLocation === loc
                            ? 'bg-blue-50 text-[#1D61E7] font-bold'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product / Service Search Bar */}
            <div className="relative flex-1 min-w-[120px]" ref={searchRef}>
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:border-[#1D61E7] focus-within:ring-1 focus-within:ring-[#1D61E7] transition-all bg-white">
                <input
                  type="text"
                  placeholder="Enter product / service..."
                  value={query}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  className="w-full px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs text-gray-800 placeholder-gray-400 outline-none"
                />

                <button className="bg-[#1D61E7] hover:bg-blue-700 text-white px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-center transition-colors shrink-0 cursor-pointer">
                  <FiSearch className="text-xs sm:text-sm font-bold" />
                </button>
              </div>

              {/* Auto Search & History Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="max-h-64 sm:max-h-72 overflow-y-auto divide-y divide-gray-100">
                    {query.trim().length === 0 ? (
                      RECENT_SEARCHES.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setQuery(item);
                            setIsSearchOpen(false);
                          }}
                          className="flex items-center gap-2.5 px-3 sm:px-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <FiClock className="text-gray-400 text-xs shrink-0" />
                          <span className="text-xs font-semibold text-[#0B1E48]">
                            {item}
                          </span>
                        </div>
                      ))
                    ) : (
                      filteredSearchResults.map((item) => (
                        <Link
                          key={item.id}
                          href={`/search?q=${encodeURIComponent(item.title)}&city=${selectedLocation}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="flex items-center justify-between px-3 sm:px-4 py-2 hover:bg-blue-50 transition-colors group cursor-pointer"
                        >
                          <div>
                            <p className="text-xs font-bold text-[#0B1E48] group-hover:text-[#1D61E7]">
                              {item.title}
                            </p>
                            <p className="text-[10px] text-gray-400">
                              Category: {item.category}
                            </p>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-[#1D61E7]">
                            {item.type}
                          </span>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* 3. RIGHT NAVIGATION BUTTONS (Mobile & Desktop) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 order-2 md:order-3">
            <Link
              href="/rfq/post"
              className="bg-[#1D61E7] hover:bg-blue-700 text-white font-bold text-[11px] sm:text-xs px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Best Price
            </Link>

            <div className="hidden lg:flex items-center gap-4 text-gray-700">
              <Link href="/exporters" className="flex flex-col items-center gap-0.5 hover:text-[#1D61E7] cursor-pointer group">
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 group-hover:border-[#1D61E7] group-hover:text-[#1D61E7]">
                  <FiUser className="text-xs" />
                </div>
                <span className="text-[10px] font-bold text-[#0B1E48]">Exporters</span>
              </Link>

              <Link href="/dashboard/seller" className="flex flex-col items-center gap-0.5 hover:text-[#1D61E7] cursor-pointer group">
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 group-hover:border-[#1D61E7] group-hover:text-[#1D61E7]">
                  <FiBox className="text-xs" />
                </div>
                <span className="text-[10px] font-bold text-[#0B1E48]">Sell</span>
              </Link>

              <Link href="/help" className="flex flex-col items-center gap-0.5 hover:text-[#1D61E7] cursor-pointer group">
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 group-hover:border-[#1D61E7] group-hover:text-[#1D61E7]">
                  <FiHelpCircle className="text-xs" />
                </div>
                <span className="text-[10px] font-bold text-[#0B1E48]">Help</span>
              </Link>

              <Link href="/dashboard/buyer/inquiries" className="flex flex-col items-center gap-0.5 hover:text-[#1D61E7] cursor-pointer group relative">
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 group-hover:border-[#1D61E7] group-hover:text-[#1D61E7]">
                  <FiMessageSquare className="text-xs" />
                </div>
                <span className="absolute -top-1 right-0 bg-red-500 text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center border border-white">
                  0
                </span>
                <span className="text-[10px] font-bold text-[#0B1E48]">Messages</span>
              </Link>

              <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 pl-1">
                <div className="w-7 h-7 rounded-full bg-amber-100 border border-amber-400 flex items-center justify-center text-amber-800 font-bold text-xs">
                  S
                </div>
                <span className="text-xs font-black text-[#0B1E48]">Hi SANJAY</span>
                <FiChevronDown className="text-xs text-gray-600" />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 4. PROFESSIONAL LEFT DRAWER MENU */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          
          {/* Backdrop Blur Overlay */}
          <div 
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Body */}
          <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col z-50 overflow-y-auto">
            
            {/* Drawer Header */}
            <div className="bg-[#0B1E48] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#1D61E7] flex items-center justify-center font-bold text-sm">
                  K
                </div>
                <span className="text-lg font-black tracking-tight">KidBazaar Menu</span>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Quick Actions Card */}
            <div className="p-4 bg-blue-50/60 border-b border-blue-100 space-y-2.5">
              <Link 
                href="/rfq/post"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center justify-between bg-[#1D61E7] text-white px-3.5 py-2.5 rounded-xl font-bold text-xs shadow-xs hover:bg-blue-700 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FiPlusCircle className="text-sm" />
                  Post Bulk Requirement
                </span>
                <FiChevronRight />
              </Link>

              <Link 
                href="/dashboard/seller"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center justify-between bg-white border border-orange-200 text-slate-800 px-3.5 py-2.5 rounded-xl font-semibold text-xs hover:bg-orange-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FaStore className="text-orange-500" />
                  List Business
                  <span className="bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">FREE</span>
                </span>
                <FiChevronRight className="text-slate-400" />
              </Link>
            </div>

            {/* Main Menu Links */}
            <div className="p-4 space-y-6 flex-1">
              
              {/* Category Section */}
              <div>
                <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">
                  Top Marketplace Categories
                </h3>
                <div className="space-y-1">
                  {TOP_CATEGORIES.map((cat, idx) => {
                    const IconComp = cat.icon;
                    return (
                      <Link
                        key={idx}
                        href={cat.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#1D61E7] transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <IconComp className="text-slate-500 text-sm" />
                          {cat.name}
                        </span>
                        <FiChevronRight className="text-slate-300" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* B2B Services Section */}
              <div>
                <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">
                  Services &amp; Tools
                </h3>
                <div className="space-y-1">
                  <Link
                    href="/rfq"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#1D61E7] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <FiFileText className="text-slate-500 text-sm" />
                      Latest Buyers RFQ Feed
                    </span>
                    <FiChevronRight className="text-slate-300" />
                  </Link>

                  <Link
                    href="/exporters"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#1D61E7] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <FiGlobe className="text-slate-500 text-sm" />
                      Verified Exporters
                    </span>
                    <FiChevronRight className="text-slate-300" />
                  </Link>

                  <Link
                    href="/trade-assurance"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#1D61E7] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HiOutlineShieldCheck className="text-slate-500 text-base" />
                      Trade Assurance
                    </span>
                    <FiChevronRight className="text-slate-300" />
                  </Link>
                </div>
              </div>

              {/* Help & Support Section */}
              <div>
                <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">
                  Support
                </h3>
                <div className="space-y-1">
                  <Link
                    href="/help"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#1D61E7] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <FiHelpCircle className="text-slate-500 text-sm" />
                      Help Center / FAQs
                    </span>
                    <FiChevronRight className="text-slate-300" />
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#1D61E7] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <FiPhoneCall className="text-slate-500 text-sm" />
                      Contact Us
                    </span>
                    <FiChevronRight className="text-slate-300" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Footer / Regional Location Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-bold">
                <FaMapMarkerAlt className="text-red-500" /> Regional Hub: {selectedLocation}
              </span>
              <button 
                onClick={() => {
                  setIsDrawerOpen(false);
                  setIsLocationOpen(true);
                }}
                className="text-[#1D61E7] font-extrabold hover:underline cursor-pointer"
              >
                Change
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
