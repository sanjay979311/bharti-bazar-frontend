
// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { 
//   FiSearch, 
//   FiUser, 
//   FiBox, 
//   FiChevronDown, 
//   FiClock,
//   FiMenu,
//   FiX,
//   FiChevronRight,
//   FiPlusCircle,
//   FiGlobe,
//   FiPhoneCall,
//   FiGrid,
//   FiFileText,
//   FiHelpCircle
// } from 'react-icons/fi';
// import { HiOutlineShieldCheck } from 'react-icons/hi2';
// import { FaMapMarkerAlt, FaStore, FaTools, FaTractor, FaCogs } from 'react-icons/fa';

// // Regional Hubs / B2B Target Markets
// const DUMMY_LOCATIONS = ['Gorakhpur', 'Khalilabad', 'Basti', 'Lucknow', 'Varanasi', 'Delhi NCR'];

// // Top B2B Categories for Left Drawer
// const TOP_CATEGORIES = [
//   { name: 'Industrial Machinery', icon: FaCogs, href: '/categories/machinery' },
//   { name: 'Textiles & Fabrics', icon: FiGrid, href: '/categories/textiles' },
//   { name: 'Electronics & Components', icon: FiBox, href: '/categories/electronics' },
//   { name: 'Chemicals & Dyes', icon: FaTools, href: '/categories/chemicals' },
//   { name: 'Packaging Materials', icon: FiBox, href: '/categories/packaging' },
//   { name: 'Agriculture Produce', icon: FaTractor, href: '/categories/agriculture' },
// ];

// // Recent Search History
// const RECENT_SEARCHES = ['Fresh Dates', 'Stainless Steel Coils', 'Electric Motor', 'Carton Box'];

// // Auto-Suggestions
// const DUMMY_SEARCH_ITEMS = [
//   { id: 1, title: 'Stainless Steel Coils', category: 'Industrial Machinery', type: 'Product' },
//   { id: 2, title: 'Industrial Electric Motor', category: 'Electronics', type: 'Product' },
//   { id: 3, title: 'Packaging Carton Box', category: 'Packaging', type: 'Product' },
//   { id: 4, title: 'Cold Storage Services', category: 'Logistics', type: 'Service' },
// ];

// export default function Header() {
//   const [selectedLocation, setSelectedLocation] = useState('Gorakhpur');
//   const [locationSearch, setLocationSearch] = useState('');
//   const [isLocationOpen, setIsLocationOpen] = useState(false);

//   const [query, setQuery] = useState('');
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const locationRef = useRef<HTMLDivElement>(null);
//   const searchRef = useRef<HTMLDivElement>(null);

//   // Close dropdowns on outside click
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
//         setIsLocationOpen(false);
//       }
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setIsSearchOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const filteredLocations = DUMMY_LOCATIONS.filter(loc =>
//     loc.toLowerCase().includes(locationSearch.toLowerCase())
//   );

//   const filteredSearchResults = DUMMY_SEARCH_ITEMS.filter(item =>
//     item.title.toLowerCase().includes(query.toLowerCase()) ||
//     item.category.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <>
//       <header className="w-full bg-[var(--color-surface-card)] border-b border-slate-200/90 sticky top-0 z-40 shadow-xs backdrop-blur-md">
//         <div className="max-w-[1440px] mx-auto px-3 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
          
//           {/* 1. BRAND LOGO & MENU TOGGLE */}
//           <div className="flex items-center gap-2 sm:gap-3 shrink-0">
//             <button
//               onClick={() => setIsDrawerOpen(true)}
//               className="p-2 hover:bg-[var(--color-primary-50)] rounded-xl text-[var(--color-primary-900)] transition-colors cursor-pointer active:scale-95"
//               title="Open Navigation Menu"
//             >
//               <FiMenu className="text-xl sm:text-2xl" />
//             </button>

//             {/* BRANDING: BHARTI BAZAR */}
//             <Link href="/" className="flex items-center gap-2.5 group">
//               <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--color-primary-600)] flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-md group-hover:bg-[var(--color-primary-700)] transition-all">
//                 B
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-lg sm:text-2xl font-black text-[var(--color-primary-900)] tracking-tight leading-none">
//                   Bharti<span className="text-[var(--color-accent-500)]">Bazar</span>
//                 </span>
//                 <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden sm:block mt-0.5">
//                   B2B Wholesale Directory
//                 </span>
//               </div>
//             </Link>
//           </div>

//           {/* 2. SEARCH BAR & LOCATION SELECTOR */}
//           <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-[280px] sm:min-w-[340px] max-w-3xl order-3 lg:order-2 w-full lg:w-auto">
            
//             {/* Location Selector */}
//             <div className="relative shrink-0" ref={locationRef}>
//               <button
//                 onClick={() => setIsLocationOpen(!isLocationOpen)}
//                 className="flex items-center bg-[var(--color-surface-light)] hover:bg-slate-200/70 border border-slate-300/80 rounded-xl overflow-hidden transition-all cursor-pointer h-10 sm:h-11 shadow-2xs"
//               >
//                 <div className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 text-xs font-bold text-slate-700">
//                   <FaMapMarkerAlt className="text-[var(--color-danger)] text-xs shrink-0" />
//                   <span className="max-w-[70px] sm:max-w-[110px] truncate">{selectedLocation}</span>
//                 </div>
//                 <div className="border-l border-slate-300/80 px-2 h-full flex items-center text-slate-500 bg-slate-100/50">
//                   <FiChevronDown className={`text-xs transition-transform duration-200 ${isLocationOpen ? 'rotate-180 text-[var(--color-primary-600)]' : ''}`} />
//                 </div>
//               </button>

//               {/* Location Dropdown */}
//               {isLocationOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-56 bg-[var(--color-surface-card)] border border-slate-200 rounded-2xl shadow-2xl p-3 z-50">
//                   <div className="mb-2">
//                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1 px-1">Select Trade Hub</p>
//                     <input
//                       type="text"
//                       placeholder="Search city..."
//                       value={locationSearch}
//                       onChange={(e) => setLocationSearch(e.target.value)}
//                       className="w-full px-3 py-1.5 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] transition-all"
//                       autoFocus
//                     />
//                   </div>
//                   <div className="max-h-48 overflow-y-auto space-y-0.5">
//                     {filteredLocations.map((loc) => (
//                       <button
//                         key={loc}
//                         onClick={() => {
//                           setSelectedLocation(loc);
//                           setIsLocationOpen(false);
//                           setLocationSearch('');
//                         }}
//                         className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors font-medium ${
//                           selectedLocation === loc
//                             ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)] font-bold'
//                             : 'hover:bg-slate-100 text-slate-700'
//                         }`}
//                       >
//                         {loc}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Product/Service Input Search */}
//             <div className="relative flex-1" ref={searchRef}>
//               <div className="flex items-center border border-slate-300 hover:border-slate-400 rounded-xl overflow-hidden focus-within:border-[var(--color-primary-600)] focus-within:ring-2 focus-within:ring-[var(--color-primary-100)] transition-all bg-[var(--color-surface-card)] shadow-2xs h-10 sm:h-11">
//                 <input
//                   type="text"
//                   placeholder="Enter product or service (e.g. Electric Motor)"
//                   value={query}
//                   onFocus={() => setIsSearchOpen(true)}
//                   onChange={(e) => {
//                     setQuery(e.target.value);
//                     setIsSearchOpen(true);
//                   }}
//                   className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none bg-transparent font-medium"
//                 />

//                 <button className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white px-4 sm:px-6 h-full flex items-center justify-center transition-colors shrink-0 cursor-pointer">
//                   <FiSearch className="text-sm sm:text-base font-bold" />
//                 </button>
//               </div>

//               {/* Auto-Suggestions & Recent Searches */}
//               {isSearchOpen && (
//                 <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-surface-card)] border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-50">
//                   <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
//                     {query.trim().length === 0 ? (
//                       <div className="p-2">
//                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider px-3 py-1.5">Recent Searches</p>
//                         {RECENT_SEARCHES.map((item, idx) => (
//                           <div
//                             key={idx}
//                             onClick={() => {
//                               setQuery(item);
//                               setIsSearchOpen(false);
//                             }}
//                             className="flex items-center gap-3 px-3 py-2 hover:bg-[var(--color-primary-50)] rounded-xl transition-colors cursor-pointer group"
//                           >
//                             <FiClock className="text-slate-400 group-hover:text-[var(--color-primary-600)] text-xs shrink-0" />
//                             <span className="text-xs font-semibold text-slate-700 group-hover:text-[var(--color-primary-900)]">
//                               {item}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="p-2">
//                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider px-3 py-1.5">Matching Categories &amp; Products</p>
//                         {filteredSearchResults.length > 0 ? (
//                           filteredSearchResults.map((item) => (
//                             <Link
//                               key={item.id}
//                               href={`/search?q=${encodeURIComponent(item.title)}&city=${selectedLocation}`}
//                               onClick={() => setIsSearchOpen(false)}
//                               className="flex items-center justify-between px-3 py-2.5 hover:bg-[var(--color-primary-50)] rounded-xl transition-colors group cursor-pointer"
//                             >
//                               <div>
//                                 <p className="text-xs font-bold text-slate-800 group-hover:text-[var(--color-primary-600)]">
//                                   {item.title}
//                                 </p>
//                                 <p className="text-[10px] text-slate-400">
//                                   Category: <span className="text-slate-600 font-medium">{item.category}</span>
//                                 </p>
//                               </div>
//                               <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-[var(--color-primary-100)] group-hover:text-[var(--color-primary-600)]">
//                                 {item.type}
//                               </span>
//                             </Link>
//                           ))
//                         ) : (
//                           <div className="px-4 py-5 text-center text-xs text-slate-500">
//                             No matching items found for &quot;{query}&quot;
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//           </div>

//           {/* 3. RIGHT SIDE: Action Buttons */}
//           <div className="flex items-center gap-2 sm:gap-3 shrink-0 order-2 lg:order-3">
            
//             {/* List Business Button */}
//             <Link
//               href="/register/seller"
//               className="flex items-center gap-2 bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold text-xs px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
//             >
//               <FaStore className="text-xs hidden sm:block" />
//               <span>List Business</span>
//               <span className="bg-white/20 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
//                 FREE
//               </span>
//             </Link>

//             {/* Profile Avatar */}
//             <Link
//               href="/buyer"
//               className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--color-surface-light)] hover:bg-[var(--color-primary-50)] border border-slate-200 hover:border-[var(--color-primary-100)] flex items-center justify-center text-[var(--color-primary-900)] transition-colors cursor-pointer shadow-2xs"
//               title="User Account"
//             >
//               <FiUser className="text-base font-bold" />
//             </Link>

//           </div>

//         </div>
//       </header>

//       {/* 4. RESPONSIVE LEFT DRAWER NAVIGATION */}
//       {isDrawerOpen && (
//         <div className="fixed inset-0 z-50 flex">
          
//           {/* Backdrop Blur Overlay */}
//           <div 
//             onClick={() => setIsDrawerOpen(false)}
//             className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
//           />

//           {/* Drawer Body */}
//           <div className="relative w-80 max-w-[85vw] bg-[var(--color-surface-card)] h-full shadow-2xl flex flex-col z-50 overflow-y-auto">
            
//             {/* Drawer Header (Trust Blue Theme) */}
//             <div className="bg-[var(--color-primary-900)] text-white p-4 sm:p-5 flex items-center justify-between">
//               <div className="flex items-center gap-2.5">
//                 <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-600)] flex items-center justify-center font-black text-sm">
//                   B
//                 </div>
//                 <div>
//                   <span className="text-lg font-black tracking-tight leading-none block">Bharti Bazar</span>
//                   <span className="text-[10px] text-blue-200">Verified B2B Marketplace</span>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => setIsDrawerOpen(false)}
//                 className="p-1.5 hover:bg-white/10 rounded-xl text-white transition-colors cursor-pointer"
//               >
//                 <FiX className="text-xl" />
//               </button>
//             </div>

//             {/* CTA Banner inside Drawer */}
//             <div className="p-4 bg-[var(--color-primary-50)] border-b border-[var(--color-primary-100)] space-y-2">
//               <Link 
//                 href="/rfq/post"
//                 onClick={() => setIsDrawerOpen(false)}
//                 className="flex items-center justify-between bg-[var(--color-accent-500)] text-white px-3.5 py-2.5 rounded-xl font-bold text-xs shadow-xs hover:bg-[var(--color-accent-600)] transition-colors"
//               >
//                 <span className="flex items-center gap-2">
//                   <FiPlusCircle className="text-sm" />
//                   Post Bulk Requirement
//                 </span>
//                 <FiChevronRight />
//               </Link>

//               <Link 
//                 href="/dashboard/seller"
//                 onClick={() => setIsDrawerOpen(false)}
//                 className="flex items-center justify-between bg-[var(--color-surface-card)] border border-orange-200 text-slate-800 px-3.5 py-2.5 rounded-xl font-semibold text-xs hover:bg-orange-50 transition-colors"
//               >
//                 <span className="flex items-center gap-2">
//                   <FaStore className="text-[var(--color-accent-500)]" />
//                   List Your Business
//                   <span className="bg-[var(--color-accent-500)] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase">FREE</span>
//                 </span>
//                 <FiChevronRight className="text-slate-400" />
//               </Link>
//             </div>

//             {/* Category and Service Links */}
//             <div className="p-4 space-y-6 flex-1">
              
//               {/* Category Links */}
//               <div>
//                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 px-1">
//                   Top Marketplace Categories
//                 </h3>
//                 <div className="space-y-0.5">
//                   {TOP_CATEGORIES.map((cat, idx) => {
//                     const IconComp = cat.icon;
//                     return (
//                       <Link
//                         key={idx}
//                         href={cat.href}
//                         onClick={() => setIsDrawerOpen(false)}
//                         className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-600)] transition-colors"
//                       >
//                         <span className="flex items-center gap-3">
//                           <IconComp className="text-slate-400 text-sm" />
//                           {cat.name}
//                         </span>
//                         <FiChevronRight className="text-slate-300" />
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* B2B Services */}
//               <div>
//                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 px-1">
//                   Services &amp; Tools
//                 </h3>
//                 <div className="space-y-0.5">
//                   <Link
//                     href="/rfq"
//                     onClick={() => setIsDrawerOpen(false)}
//                     className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-600)] transition-colors"
//                   >
//                     <span className="flex items-center gap-3">
//                       <FiFileText className="text-slate-400 text-sm" />
//                       Latest Buyers RFQ Feed
//                     </span>
//                     <FiChevronRight className="text-slate-300" />
//                   </Link>

//                   <Link
//                     href="/exporters"
//                     onClick={() => setIsDrawerOpen(false)}
//                     className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-600)] transition-colors"
//                   >
//                     <span className="flex items-center gap-3">
//                       <FiGlobe className="text-slate-400 text-sm" />
//                       Verified Exporters
//                     </span>
//                     <FiChevronRight className="text-slate-300" />
//                   </Link>

//                   <Link
//                     href="/trade-assurance"
//                     onClick={() => setIsDrawerOpen(false)}
//                     className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-600)] transition-colors"
//                   >
//                     <span className="flex items-center gap-3">
//                       <HiOutlineShieldCheck className="text-slate-400 text-base" />
//                       Trade Assurance
//                     </span>
//                     <FiChevronRight className="text-slate-300" />
//                   </Link>
//                 </div>
//               </div>

//               {/* Help & Support */}
//               <div>
//                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 px-1">
//                   Support
//                 </h3>
//                 <div className="space-y-0.5">
//                   <Link
//                     href="/help"
//                     onClick={() => setIsDrawerOpen(false)}
//                     className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-600)] transition-colors"
//                   >
//                     <span className="flex items-center gap-3">
//                       <FiHelpCircle className="text-slate-400 text-sm" />
//                       Help Center / FAQs
//                     </span>
//                     <FiChevronRight className="text-slate-300" />
//                   </Link>

//                   <Link
//                     href="/contact"
//                     onClick={() => setIsDrawerOpen(false)}
//                     className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-600)] transition-colors"
//                   >
//                     <span className="flex items-center gap-3">
//                       <FiPhoneCall className="text-slate-400 text-sm" />
//                       Contact Support
//                     </span>
//                     <FiChevronRight className="text-slate-300" />
//                   </Link>
//                 </div>
//               </div>

//             </div>

//             {/* Drawer Regional Footer */}
//             <div className="p-4 bg-[var(--color-surface-light)] border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
//               <span className="flex items-center gap-1.5 font-bold">
//                 <FaMapMarkerAlt className="text-[var(--color-danger)]" /> Trade Hub: {selectedLocation}
//               </span>
//               <button 
//                 onClick={() => {
//                   setIsDrawerOpen(false);
//                   setIsLocationOpen(true);
//                 }}
//                 className="text-[var(--color-primary-600)] font-extrabold hover:underline cursor-pointer"
//               >
//                 Change
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   );
// }




'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  FiSearch, 
  FiUser, 
  FiBox, 
  FiChevronDown, 
  FiClock,
  FiMenu,
  FiX,
  FiChevronRight,
  FiPlusCircle,
  FiGlobe,
  FiPhoneCall,
  FiGrid,
  FiFileText,
  FiHelpCircle,
  FiMic
} from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi2';
import { FaMapMarkerAlt, FaStore, FaTools, FaTractor, FaCogs } from 'react-icons/fa';

// TypeScript Global Window Extension for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

interface SpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (event: Event) => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
  start(): void;
  stop(): void;
}

interface SpeechRecognitionEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionErrorEvent {
  error: string;
}

declare var SpeechRecognition: {
  prototype: SpeechRecognition;
  new(): SpeechRecognition;
};

// Regional Hubs / B2B Target Markets
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

// Recent Search History
const RECENT_SEARCHES = ['Fresh Dates', 'Stainless Steel Coils', 'Electric Motor', 'Carton Box'];

// Auto-Suggestions
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

  // Professional Voice Search Modal States
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<'listening' | 'error'>('listening');
  const [speechSupported, setSpeechSupported] = useState(false);

  const locationRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Check Web Speech API support on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      setSpeechSupported(true);
    }
  }, []);

  // Voice Search Handler
  const startVoiceSearch = () => {
    if (!speechSupported) {
      alert('Voice search is not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    setIsVoiceModalOpen(true);
    setVoiceStatus('listening');

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionAPI();
    recognitionRef.current = recognition;

    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setVoiceStatus('listening');
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      const cleanQuery = transcript.replace(/\.$/, '');
      setQuery(cleanQuery);
      setIsSearchOpen(true);
      setIsVoiceModalOpen(false);
    };

    recognition.onerror = () => {
      setVoiceStatus('error');
    };

    recognition.onend = () => {
      setVoiceStatus((prev) => (prev === 'listening' ? 'error' : prev));
    };

    recognition.start();
  };

  // Close Voice Modal
  const closeVoiceModal = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsVoiceModalOpen(false);
  };

  // Close dropdowns on outside click
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
      <header className="w-full bg-[var(--color-surface-card)] border-b border-slate-200 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 py-2 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
          
          {/* 1. BRAND LOGO & MENU TOGGLE */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-1.5 hover:bg-[var(--color-primary-50)] rounded-xl text-[var(--color-primary-900)] transition-colors cursor-pointer active:scale-95"
              title="Open Navigation Menu"
            >
              <FiMenu className="text-xl sm:text-2xl" />
            </button>

            {/* BRANDING: BHARTI BAZAR */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[var(--color-primary-600)] flex items-center justify-center text-white font-black text-lg shadow-xs group-hover:bg-[var(--color-primary-700)] transition-all">
                B
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-extrabold text-[var(--color-primary-900)] tracking-tight leading-none">
                  Bharti<span className="text-[var(--color-accent-500)]">Bazar</span>
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider hidden sm:block mt-0.5">
                  B2B Wholesale Directory
                </span>
              </div>
            </Link>
          </div>

          {/* 2. COMPACT SEARCH BAR & LOCATION SELECTOR */}
          <div className="flex items-center gap-2 flex-1 min-w-[280px] sm:min-w-[320px] max-w-xl order-3 lg:order-2 w-full lg:w-auto">
            
            {/* Location Selector (1:1 Match with Provided Image) */}
            <div className="relative shrink-0" ref={locationRef}>
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center bg-[#f8fafc] hover:bg-slate-100/80 border border-slate-300/90 rounded-2xl overflow-hidden transition-all cursor-pointer h-9 sm:h-10 shadow-2xs"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-800">
                  <FaMapMarkerAlt className="text-[#dc2626] text-sm shrink-0" />
                  <span className="max-w-[70px] sm:max-w-[105px] truncate font-semibold text-slate-800">{selectedLocation}</span>
                </div>
                <div className="border-l border-slate-300/80 px-2 h-full flex items-center text-slate-400 bg-slate-50">
                  <FiChevronDown className={`text-xs transition-transform duration-200 ${isLocationOpen ? 'rotate-180 text-[var(--color-primary-600)]' : ''}`} />
                </div>
              </button>

              {/* Location Dropdown */}
              {isLocationOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-[var(--color-surface-card)] border border-slate-200 rounded-xl shadow-xl p-2.5 z-50">
                  <div className="mb-2">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1 px-1">Select Hub</p>
                    <input
                      type="text"
                      placeholder="Search city..."
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                      className="w-full px-2.5 py-1 text-xs bg-[var(--color-surface-light)] border border-slate-200 rounded-lg outline-none focus:border-[var(--color-primary-600)] transition-all"
                      autoFocus
                    />
                  </div>
                  <div className="max-h-44 overflow-y-auto space-y-0.5">
                    {filteredLocations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setIsLocationOpen(false);
                          setLocationSearch('');
                        }}
                        className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors font-medium ${
                          selectedLocation === loc
                            ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)] font-bold'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SEARCH BOX WITH BRAND-MATCHED VOICE MIC & SEARCH ICON */}
            <div className="relative flex-1" ref={searchRef}>
              <div className="flex items-center border border-slate-300 hover:border-slate-400 rounded-2xl bg-[var(--color-surface-card)] shadow-2xs focus-within:border-[var(--color-primary-600)] focus-within:ring-2 focus-within:ring-[var(--color-primary-100)] transition-all h-9 sm:h-10 pl-3 pr-1 gap-2">
                
                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Enter product or service name..."
                  value={query}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none bg-transparent font-medium"
                />

                {/* Clear (Cross) Button */}
                {query.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setIsSearchOpen(false);
                    }}
                    title="Clear search"
                    className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                  >
                    <FiX className="text-base" />
                  </button>
                )}

                {/* Theme-Matched Sleek Voice Mic SVG */}
                <button
                  type="button"
                  onClick={startVoiceSearch}
                  title="Search by Voice"
                  className="p-1 hover:bg-[var(--color-primary-50)] rounded-full transition-all shrink-0 cursor-pointer flex items-center justify-center active:scale-95"
                >
                  <svg className="w-4 h-6 sm:w-4 sm:h-6" viewBox="0 0 24 32" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.79086 2 8 3.79086 8 6V13C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13V6C16 3.79086 14.2091 2 12 2Z" fill="var(--color-primary-600)"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 11C10.3431 11 9 12.3431 9 14V14.5C9 15.8807 10.1193 17 11.5 17C12.8807 17 14 15.8807 14 14.5V14C14 12.3431 12.6569 11 12 11Z" fill="#60a5fa"/>
                    <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12H3C3 16.5323 6.37583 20.2763 10.75 20.8955V24.5H13.25V20.8955C17.6242 20.2763 21 16.5323 21 12H19Z" fill="var(--color-accent-500)"/>
                    <rect x="8" y="24.5" width="8" height="2" rx="1" fill="var(--color-accent-500)"/>
                  </svg>
                </button>

                {/* Orange Action Search Button */}
                <button 
                  type="button"
                  className="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-2xs active:scale-95"
                >
                  <FiSearch className="text-base sm:text-lg stroke-[2.5]" />
                </button>
              </div>

              {/* Auto-Suggestions Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-surface-card)] border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                    {query.trim().length === 0 ? (
                      <div className="p-2">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider px-2.5 py-1">Recent Searches</p>
                        {RECENT_SEARCHES.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setQuery(item);
                              setIsSearchOpen(false);
                            }}
                            className="flex items-center gap-2.5 px-2.5 py-1.5 hover:bg-[var(--color-primary-50)] rounded-lg transition-colors cursor-pointer group"
                          >
                            <FiClock className="text-slate-400 group-hover:text-[var(--color-primary-600)] text-xs shrink-0" />
                            <span className="text-xs font-semibold text-slate-700 group-hover:text-[var(--color-primary-900)]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-2">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider px-2.5 py-1">Matching Products</p>
                        {filteredSearchResults.length > 0 ? (
                          filteredSearchResults.map((item) => (
                            <Link
                              key={item.id}
                              href={`/search?q=${encodeURIComponent(item.title)}&city=${selectedLocation}`}
                              onClick={() => setIsSearchOpen(false)}
                              className="flex items-center justify-between px-2.5 py-2 hover:bg-[var(--color-primary-50)] rounded-lg transition-colors group cursor-pointer"
                            >
                              <div>
                                <p className="text-xs font-bold text-slate-800 group-hover:text-[var(--color-primary-600)]">
                                  {item.title}
                                </p>
                                <p className="text-[10px] text-slate-400">
                                  Category: <span className="text-slate-600 font-medium">{item.category}</span>
                                </p>
                              </div>
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                                {item.type}
                              </span>
                            </Link>
                          ))
                        ) : (
                          <div className="px-3 py-4 text-center text-xs text-slate-500">
                            No matching items found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* 3. RIGHT SIDE: Action Buttons */}
          <div className="flex items-center gap-2 shrink-0 order-2 lg:order-3">
            
            {/* List Business Button */}
            <Link
              href="/register/seller"
              className="flex items-center gap-1.5 bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold text-xs px-3 py-2 rounded-xl shadow-2xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              <FaStore className="text-xs hidden sm:block" />
              <span>List Business</span>
              <span className="bg-white/20 text-white text-[8px] font-black px-1 py-0.5 rounded uppercase">
                FREE
              </span>
            </Link>

            {/* Profile Avatar */}
            <Link
              href="/buyer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[var(--color-surface-light)] hover:bg-[var(--color-primary-50)] border border-slate-200 flex items-center justify-center text-[var(--color-primary-900)] transition-colors cursor-pointer"
              title="User Account"
            >
              <FiUser className="text-sm font-bold" />
            </Link>

          </div>

        </div>
      </header>

      {/* 4. PROFESSIONAL VOICE SEARCH MODAL */}
      {isVoiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={closeVoiceModal}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          />

          <div className="relative w-full max-w-sm bg-[var(--color-surface-card)] rounded-2xl shadow-2xl p-6 z-50 border border-slate-100 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={closeVoiceModal}
              className="absolute top-3.5 right-3.5 p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <FiX className="text-lg" />
            </button>

            {voiceStatus === 'listening' ? (
              <div className="py-4 flex flex-col items-center">
                <h3 className="text-lg font-bold text-slate-800 mb-6">
                  Listening.....
                </h3>

                <div className="flex items-center gap-2 h-8">
                  <span className="w-3 h-3 bg-[var(--color-accent-500)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-3 h-3 bg-[var(--color-primary-600)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-3 h-3 bg-[var(--color-accent-500)] rounded-full animate-bounce"></span>
                  <span className="w-3 h-3 bg-[var(--color-primary-600)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-3 h-3 bg-[var(--color-accent-500)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                </div>
              </div>
            ) : (
              <div className="py-2 flex flex-col items-center">
                <h3 className="text-base font-bold text-slate-800 leading-snug">
                  Didn&apos;t catch that.
                </h3>
                <p className="text-sm font-semibold text-slate-600 mb-6">
                  Try speaking again.
                </p>

                <button
                  type="button"
                  onClick={startVoiceSearch}
                  className="w-16 h-16 rounded-full bg-[var(--color-danger)] hover:bg-red-700 text-white flex items-center justify-center shadow-md shadow-red-200 transition-all cursor-pointer active:scale-95 mb-3 group relative"
                >
                  <span className="absolute inset-0 rounded-full bg-red-400 opacity-30 animate-ping"></span>
                  <FiMic className="text-2xl relative z-10" />
                </button>

                <p className="text-xs font-bold text-slate-700 tracking-wide mt-1">
                  Click here to Speak
                </p>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 5. RESPONSIVE LEFT DRAWER NAVIGATION */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
          />

          <div className="relative w-80 max-w-[85vw] bg-[var(--color-surface-card)] h-full shadow-2xl flex flex-col z-50 overflow-y-auto">
            <div className="bg-[var(--color-primary-900)] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[var(--color-primary-600)] flex items-center justify-center font-black text-xs">
                  B
                </div>
                <div>
                  <span className="text-base font-black tracking-tight leading-none block">Bharti Bazar</span>
                  <span className="text-[9px] text-blue-200">Verified B2B Marketplace</span>
                </div>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            <div className="p-3 bg-[var(--color-primary-50)] border-b border-[var(--color-primary-100)] space-y-2">
              <Link 
                href="/rfq/post"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center justify-between bg-[var(--color-accent-500)] text-white px-3 py-2 rounded-xl font-bold text-xs shadow-xs hover:bg-[var(--color-accent-600)] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FiPlusCircle className="text-xs" />
                  Post Bulk Requirement
                </span>
                <FiChevronRight />
              </Link>
            </div>

            <div className="p-3 space-y-5 flex-1">
              <div>
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-2 px-1">
                  Top Marketplace Categories
                </h3>
                <div className="space-y-0.5">
                  {TOP_CATEGORIES.map((cat, idx) => {
                    const IconComp = cat.icon;
                    return (
                      <Link
                        key={idx}
                        href={cat.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-[var(--color-primary-50)] transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <IconComp className="text-slate-400 text-xs" />
                          {cat.name}
                        </span>
                        <FiChevronRight className="text-slate-300" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}