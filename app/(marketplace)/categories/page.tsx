

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import {
//   IoShieldCheckmarkSharp,
//   IoStorefrontSharp,
//   IoCubeSharp,
//   IoStar,
//   IoLocation,
//   IoCall,
//   IoMail,
//   IoHeart,
//   IoHeartOutline,
//   IoGrid,
//   IoList,
//   IoChevronDown,
//   IoChevronUp,
//   IoFilter,
//   IoClose,
//   IoSearch,
//   IoCheckmarkCircle,
//   IoCamera,
//   IoPaperPlaneSharp,
//   IoCheckmark,
// } from 'react-icons/io5';

// // --- Dummy Data for B2B Product Listing ---
// const DUMMY_PRODUCTS = [
//   {
//     id: 1,
//     title: "Men's Baggy Fit Jeans (Blue Cotton)",
//     price: 2500,
//     unit: 'Piece',
//     priceType: 'Bulk Price',
//     image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80',
//     imageCount: 4,
//     badgeType: 'star',
//     specs: [
//       { label: 'Fit Type', value: 'Baggy Fit' },
//       { label: 'Fabric', value: 'Cotton' },
//       { label: 'Gender', value: "Men's" },
//       { label: 'Color', value: 'Blue' },
//       { label: 'MOQ', value: '100 Pieces' },
//     ],
//     supplier: {
//       name: '3comma Labs Private Limited',
//       logoText: '3C',
//       logoBg: 'bg-rose-600',
//       location: 'Gorakhpur, Uttar Pradesh',
//       experience: '13+ Years',
//       verifiedText: 'Verified Business',
//       rating: 3.6,
//       reviewsCount: 567,
//     },
//   },
//   {
//     id: 2,
//     title: 'Dark Blue Casual Wear Funky Knitted Jeans, Printed',
//     price: 499,
//     unit: 'Piece',
//     priceType: 'Bulk Price',
//     image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&auto=format&fit=crop&q=80',
//     imageCount: 4,
//     trustSeal: true,
//     badgeType: 'star',
//     specs: [
//       { label: 'Fit Type', value: 'Comfort Fit' },
//       { label: 'Fabric', value: 'Denim' },
//       { label: 'Pattern', value: 'Printed' },
//       { label: 'Color', value: 'Dark Blue' },
//       { label: 'MOQ', value: '100 Pieces' },
//     ],
//     supplier: {
//       name: 'Sadabahar Fashion',
//       logoText: 'SF',
//       logoBg: 'bg-purple-600',
//       location: 'Gorakhpur, Uttar Pradesh',
//       experience: '11+ Years',
//       verifiedText: 'TrustSEAL',
//       rating: 4.1,
//       reviewsCount: 1139,
//     },
//   },
//   {
//     id: 3,
//     title: 'Men Denim Jeans, Blue',
//     price: 400,
//     unit: 'Piece',
//     priceType: 'Bulk Price',
//     image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&auto=format&fit=crop&q=80',
//     imageCount: 3,
//     badgeType: 'verified',
//     specs: [
//       { label: 'Fit Type', value: 'Regular Fit' },
//       { label: 'Fabric', value: 'Denim' },
//       { label: 'Size', value: '30' },
//       { label: 'Color', value: 'Blue' },
//       { label: 'Pattern', value: 'Plain' },
//       { label: 'Stretch Type', value: 'Stretchable' },
//     ],
//     supplier: {
//       name: 'Ritika Fashions',
//       logoText: 'R',
//       logoBg: 'bg-[var(--color-primary-900)]',
//       location: 'Gorakhpur, Uttar Pradesh',
//       experience: '16+ Years',
//       verifiedText: 'TrustSEAL',
//       rating: 3.9,
//       reviewsCount: 102,
//     },
//   },
//   {
//     id: 4,
//     title: 'Classic Straight Fit Jeans',
//     price: 750,
//     unit: 'Piece',
//     priceType: 'Bulk Price',
//     image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&auto=format&fit=crop&q=80',
//     imageCount: 4,
//     badgeType: 'verified',
//     specs: [
//       { label: 'Fit Type', value: 'Straight Fit' },
//       { label: 'Fabric', value: 'Denim' },
//       { label: 'Gender', value: 'Men' },
//       { label: 'Color', value: 'Blue' },
//       { label: 'MOQ', value: '100 Pieces' },
//     ],
//     supplier: {
//       name: 'M.K. Fashion Hub',
//       logoText: 'MH',
//       logoBg: 'bg-slate-800',
//       location: 'Gorakhpur, Uttar Pradesh',
//       experience: '8+ Years',
//       verifiedText: 'Verified Business',
//       rating: 4.2,
//       reviewsCount: 421,
//     },
//   },
// ];

// const CATEGORY_TAGS = [
//   { name: 'All (156)', active: true },
//   { name: 'Men Jeans (89)' },
//   { name: 'Men Denim Jeans (156)' },
//   { name: 'Ladies Jeans (42)' },
//   { name: 'Kids Jeans (28)' },
//   { name: 'Below ₹400 (36)' },
//   { name: 'Khalilabad (12)' },
//   { name: 'Varanasi (21)' },
//   { name: 'Delhi (18)' },
//   { name: 'Uttar Pradesh', hasDropdown: true },
//   { name: 'More', hasDropdown: true },
// ];

// export default function B2BListingPage() {
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
//   const [favorites, setFavorites] = useState<number[]>([]);
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

//   const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
//     location: true,
//     businessType: true,
//     priceRange: true,
//     moq: true,
//   });

//   const toggleSection = (sectionKey: string) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [sectionKey]: !prev[sectionKey],
//     }));
//   };

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[var(--color-surface-light)] text-slate-800 text-sm font-sans antialiased selection:bg-[var(--color-primary-100)] selection:text-[var(--color-primary-900)]">
      
//       {/* Top Banner / Announcement Header */}
//       <div className="bg-[var(--color-primary-900)] text-white text-xs py-2 px-4 text-center font-medium">
//         ✨ Connect directly with verified manufacturers & bulk wholesalers in Gorakhpur, Khalilabad & Basti.
//       </div>

//       <div className="max-w-[1440px] mx-auto px-3 sm:px-6 py-4">
        
//         {/* Breadcrumb Trail */}
//         <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-3 overflow-x-auto no-scrollbar">
//           <Link href="/" className="hover:text-[var(--color-primary-600)] transition">Home</Link>
//           <span className="text-slate-300">/</span>
//           <Link href="#" className="hover:text-[var(--color-primary-600)] transition">Fashion & Apparel</Link>
//           <span className="text-slate-300">/</span>
//           <Link href="#" className="hover:text-[var(--color-primary-600)] transition">Men Clothing</Link>
//           <span className="text-slate-300">/</span>
//           <span className="text-slate-900 font-semibold">Men Jeans</span>
//         </nav>

//         {/* Page Header Card */}
//         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-5 bg-[var(--color-surface-card)] p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[var(--color-primary-50)] to-transparent pointer-events-none rounded-bl-full"></div>
          
//           <div className="relative z-10">
//             <div className="inline-flex items-center gap-1.5 bg-[var(--color-primary-50)] text-[var(--color-primary-700)] text-xs font-bold px-3 py-1 rounded-full mb-2">
//               <IoShieldCheckmarkSharp /> B2B Verified Marketplace
//             </div>
//             <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
//               Denim Jeans - Wholesaler In Gorakhpur
//             </h1>
//             <p className="text-slate-500 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
//               Discover verified wholesale traders, direct manufacturers, and bulk suppliers offering premium quality denim jeans at competitive factory prices.
//             </p>
//           </div>

//           {/* Value Props Widgets */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-3 relative z-10">
//             <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3 hover:border-blue-200 transition">
//               <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center font-bold text-lg shrink-0">
//                 <IoShieldCheckmarkSharp />
//               </div>
//               <div>
//                 <p className="text-xs font-extrabold text-slate-900 leading-tight">Verified Suppliers</p>
//                 <p className="text-[11px] text-slate-500 mt-0.5">100% Genuine Firms</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3 hover:border-amber-200 transition">
//               <div className="w-10 h-10 rounded-lg bg-amber-50 text-[var(--color-accent-500)] flex items-center justify-center font-bold text-lg shrink-0">
//                 <IoStorefrontSharp />
//               </div>
//               <div>
//                 <p className="text-xs font-extrabold text-slate-900 leading-tight">Best Rates</p>
//                 <p className="text-[11px] text-slate-500 mt-0.5">Wholesale Pricing</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3 hover:border-emerald-200 transition">
//               <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[var(--color-success)] flex items-center justify-center font-bold text-lg shrink-0">
//                 <IoCubeSharp />
//               </div>
//               <div>
//                 <p className="text-xs font-extrabold text-slate-900 leading-tight">Bulk Orders</p>
//                 <p className="text-[11px] text-slate-500 mt-0.5">Custom Quotes</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Horizontal Category & Quick Filters Bar */}
//         <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-5">
//           {CATEGORY_TAGS.map((tag, i) => (
//             <button
//               key={i}
//               className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 border shadow-2xs ${
//                 tag.active
//                   ? 'bg-[var(--color-primary-600)] text-white border-[var(--color-primary-600)] shadow-blue-500/20'
//                   : 'bg-[var(--color-surface-card)] text-slate-700 border-slate-200 hover:border-[var(--color-primary-600)] hover:text-[var(--color-primary-600)]'
//               }`}
//             >
//               <span>{tag.name}</span>
//               {tag.hasDropdown && <IoChevronDown className="text-xs opacity-70" />}
//             </button>
//           ))}
//         </div>

//         {/* Main Content Layout */}
//         <div className="flex flex-col lg:flex-row gap-6">
          
//           {/* Desktop Left Sidebar Filters */}
//           <aside className="hidden lg:block w-72 shrink-0 space-y-4">
//             <div className="flex items-center justify-between pb-3 border-b border-slate-200 bg-[var(--color-surface-card)] px-4 pt-4 rounded-xl border-x border-t">
//               <h2 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
//                 <IoFilter className="text-[var(--color-primary-600)] text-base" /> Refine Results
//               </h2>
//               <button className="text-xs text-[var(--color-primary-600)] hover:underline font-bold cursor-pointer">
//                 Clear All
//               </button>
//             </div>

//             {/* Filter Card: Location */}
//             <div className="bg-[var(--color-surface-card)] border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
//               <button
//                 onClick={() => toggleSection('location')}
//                 className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
//               >
//                 <span>Location</span>
//                 {openSections.location ? <IoChevronUp /> : <IoChevronDown />}
//               </button>
//               {openSections.location && (
//                 <div className="p-4 space-y-3 border-t border-slate-100">
//                   <div className="relative">
//                     <IoSearch className="absolute left-3 top-3 text-slate-400 text-sm" />
//                     <input
//                       type="text"
//                       placeholder="Search City or Region..."
//                       className="w-full text-xs pl-9 pr-3 py-2 border border-slate-200 rounded-xl outline-none focus:border-[var(--color-primary-600)] focus:ring-1 focus:ring-[var(--color-primary-600)] bg-slate-50/50"
//                     />
//                   </div>
//                   <div className="space-y-2.5 text-xs text-slate-600">
//                     <label className="flex items-center justify-between cursor-pointer font-bold text-slate-900">
//                       <span className="flex items-center gap-2.5">
//                         <input type="checkbox" defaultChecked className="rounded text-[var(--color-primary-600)] focus:ring-[var(--color-primary-600)] w-4 h-4" /> Gorakhpur
//                       </span>
//                       <span className="text-slate-400 font-medium">156</span>
//                     </label>
//                     {['Lucknow (842)', 'Varanasi (621)', 'Kanpur (513)', 'Delhi (1,240)'].map((loc, idx) => (
//                       <label key={idx} className="flex items-center justify-between cursor-pointer hover:text-slate-900 transition">
//                         <span className="flex items-center gap-2.5">
//                           <input type="checkbox" className="rounded text-[var(--color-primary-600)] focus:ring-[var(--color-primary-600)] w-4 h-4" /> {loc.split(' ')[0]}
//                         </span>
//                         <span className="text-slate-400 font-medium">{loc.split(' ')[1]}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Filter Card: Business Type */}
//             <div className="bg-[var(--color-surface-card)] border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
//               <button
//                 onClick={() => toggleSection('businessType')}
//                 className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
//               >
//                 <span>Business Type</span>
//                 {openSections.businessType ? <IoChevronUp /> : <IoChevronDown />}
//               </button>
//               {openSections.businessType && (
//                 <div className="p-4 space-y-2.5 border-t border-slate-100 text-xs text-slate-600">
//                   {[
//                     { name: 'Manufacturer', count: 89 },
//                     { name: 'Wholesaler', count: 156, active: true },
//                     { name: 'Supplier', count: 132 },
//                     { name: 'Exporter', count: 44 },
//                   ].map((type, idx) => (
//                     <label key={idx} className={`flex items-center justify-between cursor-pointer ${type.active ? 'font-bold text-slate-900' : 'hover:text-slate-900'}`}>
//                       <span className="flex items-center gap-2.5">
//                         <input type="checkbox" defaultChecked={type.active} className="rounded text-[var(--color-primary-600)] focus:ring-[var(--color-primary-600)] w-4 h-4" /> {type.name}
//                       </span>
//                       <span className="text-slate-400">{type.count}</span>
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Filter Card: Price Range */}
//             <div className="bg-[var(--color-surface-card)] border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
//               <button
//                 onClick={() => toggleSection('priceRange')}
//                 className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
//               >
//                 <span>Price Range (₹)</span>
//                 {openSections.priceRange ? <IoChevronUp /> : <IoChevronDown />}
//               </button>
//               {openSections.priceRange && (
//                 <div className="p-4 space-y-3 border-t border-slate-100">
//                   <div className="flex items-center gap-2">
//                     <input type="text" placeholder="Min ₹" className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[var(--color-primary-600)] bg-slate-50/50" />
//                     <span className="text-slate-400 font-bold">-</span>
//                     <input type="text" placeholder="Max ₹" className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[var(--color-primary-600)] bg-slate-50/50" />
//                   </div>
//                   <button className="w-full bg-[var(--color-primary-600)] text-white text-xs font-extrabold py-2 rounded-xl hover:bg-[var(--color-primary-700)] transition cursor-pointer shadow-sm">
//                     Apply Price Filter
//                   </button>
//                 </div>
//               )}
//             </div>
//           </aside>

//           {/* Right Product Section */}
//           <main className="flex-1 min-w-0">
            
//             {/* Toolbar Header (Results & View Switcher) */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 bg-[var(--color-surface-card)] p-4 rounded-2xl border border-slate-200/80 shadow-xs">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setIsMobileFilterOpen(true)}
//                   className="lg:hidden flex items-center gap-1.5 bg-[var(--color-primary-50)] text-[var(--color-primary-700)] px-3.5 py-2 rounded-xl font-extrabold text-xs cursor-pointer"
//                 >
//                   <IoFilter /> Filters
//                 </button>
//                 <h2 className="font-extrabold text-slate-900 text-sm sm:text-base">
//                   156 Denim Jeans Wholesalers in Gorakhpur
//                 </h2>
//               </div>

//               <div className="flex items-center justify-between sm:justify-end gap-3">
//                 <div className="flex items-center gap-2 text-xs">
//                   <span className="text-slate-500 hidden sm:inline font-medium">Sort by:</span>
//                   <select className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold text-slate-800 outline-none focus:border-[var(--color-primary-600)] cursor-pointer">
//                     <option>Relevance</option>
//                     <option>Price: Low to High</option>
//                     <option>Price: High to Low</option>
//                     <option>Rating: High to Low</option>
//                   </select>
//                 </div>

//                 {/* View Mode Switcher */}
//                 <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden p-0.5 bg-slate-100">
//                   <button
//                     onClick={() => setViewMode('grid')}
//                     aria-label="Grid View"
//                     className={`p-2 rounded-lg text-sm transition cursor-pointer ${
//                       viewMode === 'grid' ? 'bg-white text-[var(--color-primary-600)] shadow-xs' : 'text-slate-500 hover:text-slate-800'
//                     }`}
//                   >
//                     <IoGrid />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('list')}
//                     aria-label="List View"
//                     className={`p-2 rounded-lg text-sm transition cursor-pointer ${
//                       viewMode === 'list' ? 'bg-white text-[var(--color-primary-600)] shadow-xs' : 'text-slate-500 hover:text-slate-800'
//                     }`}
//                   >
//                     <IoList />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Product Cards Container */}
//             <div
//               className={
//                 viewMode === 'grid'
//                   ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
//                   : 'flex flex-col gap-4'
//               }
//             >
//               {DUMMY_PRODUCTS.map((product) => {
//                 const isFav = favorites.includes(product.id);

//                 /* --- PROFESSIONAL LIST VIEW LAYOUT --- */
//                 if (viewMode === 'list') {
//                   return (
//                     <div
//                       key={product.id}
//                       className="bg-[var(--color-surface-card)] border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col lg:flex-row items-stretch group"
//                     >
//                       {/* Left: Responsive Image Section */}
//                       <div className="relative w-full lg:w-72 shrink-0 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 flex items-center justify-center p-3">
//                         <div className="relative w-full aspect-4/3 lg:aspect-square bg-white rounded-xl overflow-hidden border border-slate-200/60 shadow-2xs">
//                           <img
//                             src={product.image}
//                             alt={product.title}
//                             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                           />

//                           {/* Badges */}
//                           <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
//                             {product.badgeType === 'star' && (
//                               <span className="bg-gradient-to-r from-amber-500 to-[var(--color-accent-500)] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
//                                 <IoStar className="text-amber-100 text-xs" /> Star Supplier
//                               </span>
//                             )}
//                             {product.badgeType === 'verified' && (
//                               <span className="bg-[var(--color-success)] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
//                                 <IoCheckmarkCircle className="text-xs" /> Verified
//                               </span>
//                             )}
//                           </div>

//                           {/* Favorite Button */}
//                           <button
//                             onClick={() => toggleFavorite(product.id)}
//                             aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
//                             className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-rose-500 transition shadow-md cursor-pointer"
//                           >
//                             {isFav ? <IoHeart className="text-rose-500 text-lg" /> : <IoHeartOutline className="text-lg" />}
//                           </button>

//                           {/* Photo Count */}
//                           <span className="absolute bottom-2.5 right-2.5 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md flex items-center gap-1">
//                             <IoCamera className="text-xs" /> +{product.imageCount}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Middle: Title, Price & Specifications Table */}
//                       <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
//                         <div>
//                           <h3 className="font-extrabold text-slate-900 text-base sm:text-lg hover:text-[var(--color-primary-600)] cursor-pointer transition leading-snug">
//                             {product.title}
//                           </h3>

//                           <div className="flex flex-wrap items-baseline gap-2 mt-2 mb-4">
//                             <span className="text-xl sm:text-2xl font-black text-slate-900">
//                               ₹ {product.price.toLocaleString()}
//                             </span>
//                             <span className="text-xs text-slate-500 font-bold">/ {product.unit}</span>
//                             <span className="text-[10px] bg-[var(--color-primary-50)] text-[var(--color-primary-700)] font-extrabold px-2.5 py-1 rounded-md border border-[var(--color-primary-100)]">
//                               {product.priceType}
//                             </span>
//                           </div>

//                           {/* Specs Grid */}
//                           <div className="border border-slate-200/80 rounded-xl p-3 bg-slate-50/60 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
//                             {product.specs.map((spec, i) => (
//                               <div key={i} className="flex justify-between items-center py-1 border-b border-slate-200/50 last:border-0">
//                                 <span className="text-slate-500 font-medium">{spec.label}:</span>
//                                 <span className="font-bold text-slate-800">{spec.value}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Right: Supplier Details & Action Buttons */}
//                       <div className="p-4 sm:p-5 w-full lg:w-72 shrink-0 bg-slate-50/50 flex flex-col justify-between gap-4">
//                         <div className="space-y-2">
//                           <h4 className="font-extrabold text-slate-900 text-sm hover:text-[var(--color-primary-600)] cursor-pointer transition">
//                             {product.supplier.name}
//                           </h4>

//                           <p className="text-xs text-slate-500 flex items-center gap-1.5">
//                             <IoLocation className="text-slate-400 shrink-0 text-sm" /> {product.supplier.location}
//                           </p>

//                           <div className="flex items-center gap-2 pt-0.5">
//                             <span className="text-xs font-bold text-[var(--color-success)] flex items-center gap-0.5">
//                               ✓ {product.supplier.verifiedText}
//                             </span>
//                             <span className="text-slate-300">•</span>
//                             <span className="text-xs font-extrabold text-amber-700">{product.supplier.experience}</span>
//                           </div>

//                           <div className="flex items-center gap-2 pt-0.5">
//                             <span className="bg-amber-500 text-white text-xs font-black px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs">
//                               <IoStar className="text-white text-[10px]" /> {product.supplier.rating}
//                             </span>
//                             <span className="text-xs text-slate-500 font-medium">({product.supplier.reviewsCount} reviews)</span>
//                           </div>

//                           <p className="text-[11px] text-emerald-700 font-bold pt-1">
//                             ⚡ 90% Response Rate
//                           </p>
//                         </div>

//                         {/* CTAs */}
//                         <div className="flex flex-col gap-2 pt-3 border-t border-slate-200/80">
//                           <button className="w-full bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-extrabold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-500/10">
//                             <IoPaperPlaneSharp className="text-sm" /> Contact Supplier
//                           </button>
//                           <button className="w-full bg-white hover:bg-slate-50 text-[var(--color-primary-700)] border-2 border-[var(--color-primary-600)] font-extrabold py-2 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 cursor-pointer">
//                             <IoCall className="text-[var(--color-primary-600)] text-base" /> Call Now
//                           </button>
//                         </div>
//                       </div>

//                     </div>
//                   );
//                 }

//                 /* --- PROFESSIONAL GRID VIEW LAYOUT --- */
//                 return (
//                   <div
//                     key={product.id}
//                     className="bg-[var(--color-surface-card)] border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[var(--color-primary-600)]/30 transition-all duration-300 flex flex-col justify-between group"
//                   >
//                     <div>
//                       <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
//                         <img
//                           src={product.image}
//                           alt={product.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                         />

//                         <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
//                           {product.badgeType === 'star' && (
//                             <span className="bg-gradient-to-r from-amber-500 to-[var(--color-accent-500)] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
//                               <IoStar className="text-amber-100 text-xs" /> Star Supplier
//                             </span>
//                           )}
//                           {product.badgeType === 'verified' && (
//                             <span className="bg-[var(--color-success)] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
//                               <IoCheckmarkCircle className="text-xs" /> Verified
//                             </span>
//                           )}
//                         </div>

//                         <button
//                           onClick={() => toggleFavorite(product.id)}
//                           aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
//                           className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-rose-500 transition shadow-md cursor-pointer"
//                         >
//                           {isFav ? <IoHeart className="text-rose-500 text-lg" /> : <IoHeartOutline className="text-lg" />}
//                         </button>

//                         <span className="absolute bottom-2.5 right-2.5 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md flex items-center gap-1">
//                           <IoCamera className="text-xs" /> +{product.imageCount}
//                         </span>
//                       </div>

//                       <div className="p-4">
//                         <h3 className="font-extrabold text-slate-900 line-clamp-1 text-sm group-hover:text-[var(--color-primary-600)] transition cursor-pointer">
//                           {product.title}
//                         </h3>

//                         <div className="flex items-baseline gap-1.5 mt-2 mb-3">
//                           <span className="text-lg font-black text-slate-900">
//                             ₹ {product.price.toLocaleString()}
//                           </span>
//                           <span className="text-xs text-slate-500 font-bold">/ {product.unit}</span>
//                           <span className="ml-auto text-[10px] bg-[var(--color-primary-50)] text-[var(--color-primary-700)] font-extrabold px-2 py-0.5 rounded-md border border-[var(--color-primary-100)]">
//                             {product.priceType}
//                           </span>
//                         </div>

//                         <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100 text-xs space-y-1.5 mb-3">
//                           {product.specs.map((spec, i) => (
//                             <div key={i} className="flex justify-between text-[11px]">
//                               <span className="text-slate-400 font-medium">{spec.label}</span>
//                               <span className="font-bold text-slate-800">{spec.value}</span>
//                             </div>
//                           ))}
//                         </div>

//                         <div className="pt-2.5 border-t border-slate-100 flex items-start gap-2.5">
//                           <div className={`w-8 h-8 rounded-full ${product.supplier.logoBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs`}>
//                             {product.supplier.logoText}
//                           </div>
//                           <div className="min-w-0 flex-1">
//                             <p className="font-extrabold text-xs text-slate-900 truncate hover:text-[var(--color-primary-600)] cursor-pointer">
//                               {product.supplier.name}
//                             </p>
//                             <p className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
//                               <IoLocation className="text-slate-400 shrink-0" /> {product.supplier.location}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="p-4 pt-0 grid grid-cols-2 gap-2.5 mt-1">
//                       <button className="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-extrabold py-2 px-2 rounded-xl text-xs transition shadow-md shadow-orange-500/10 flex items-center justify-center gap-1.5 cursor-pointer">
//                         <IoMail className="text-sm" /> Contact
//                       </button>
//                       <button className="bg-white border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] font-extrabold py-1.5 px-2 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer">
//                         <IoCall className="text-sm" /> Call
//                       </button>
//                     </div>

//                   </div>
//                 );
//               })}
//             </div>

//           </main>
//         </div>

//       </div>

//       {/* Mobile Filter Slide-over Drawer */}
//       {isMobileFilterOpen && (
//         <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex justify-end lg:hidden">
//           <div className="w-4/5 max-w-xs bg-[var(--color-surface-card)] h-full p-5 overflow-y-auto space-y-5 shadow-2xl">
//             <div className="flex items-center justify-between pb-3 border-b border-slate-200">
//               <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
//                 <IoFilter className="text-[var(--color-primary-600)]" /> Filters
//               </h3>
//               <button onClick={() => setIsMobileFilterOpen(false)} aria-label="Close filters drawer" className="text-xl text-slate-600 hover:text-slate-900 cursor-pointer p-1">
//                 <IoClose />
//               </button>
//             </div>
            
//             <div className="space-y-4 text-xs">
//               <div>
//                 <h4 className="font-bold text-slate-900 mb-2">Location</h4>
//                 <label className="flex items-center gap-2 font-semibold text-slate-700">
//                   <input type="checkbox" defaultChecked className="rounded text-[var(--color-primary-600)] w-4 h-4" /> Gorakhpur (156)
//                 </label>
//               </div>

//               <div>
//                 <h4 className="font-bold text-slate-900 mb-2">Business Type</h4>
//                 <label className="flex items-center gap-2 font-semibold text-slate-700">
//                   <input type="checkbox" defaultChecked className="rounded text-[var(--color-primary-600)] w-4 h-4" /> Wholesaler (156)
//                 </label>
//               </div>

//               <button 
//                 onClick={() => setIsMobileFilterOpen(false)} 
//                 className="w-full bg-[var(--color-primary-600)] text-white font-extrabold py-2.5 rounded-xl shadow-md cursor-pointer mt-4"
//               >
//                 Apply Filters
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IoShieldCheckmarkSharp,
  IoStorefrontSharp,
  IoCubeSharp,
  IoStar,
  IoLocation,
  IoCall,
  IoHeart,
  IoHeartOutline,
  IoGrid,
  IoList,
  IoChevronDown,
  IoChevronUp,
  IoFilter,
  IoClose,
  IoSearch,
  IoCheckmarkCircle,
  IoCamera,
  IoPaperPlaneSharp,
} from 'react-icons/io5';

// --- Types ---
interface Spec {
  label: string;
  value: string;
}

interface Supplier {
  name: string;
  logoText: string;
  logoBg: string;
  location: string;
  experience: string;
  verifiedText: string;
  rating: number;
  reviewsCount: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  unit: string;
  priceType: string;
  image: string;
  imageCount: number;
  badgeType: 'star' | 'verified';
  specs: Spec[];
  supplier: Supplier;
}

// --- Dummy Products Data (Matching Image) ---
const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Men's Baggy Fit Jeans (Blue Cotton)",
    price: 2500,
    unit: 'Piece',
    priceType: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80',
    imageCount: 4,
    badgeType: 'star',
    specs: [
      { label: 'Fit Type', value: 'Baggy Fit' },
      { label: 'Fabric', value: 'Cotton' },
      { label: 'Gender', value: "Men's" },
      { label: 'Color', value: 'Blue' },
      { label: 'MOQ', value: '100 Pieces' },
    ],
    supplier: {
      name: '3comma Labs Private Limited',
      logoText: '3C',
      logoBg: 'bg-rose-600',
      location: 'Gorakhpur, Uttar Pradesh',
      experience: '13+ Years',
      verifiedText: 'Verified Business',
      rating: 3.6,
      reviewsCount: 567,
    },
  },
  {
    id: 2,
    title: 'Dark Blue Casual Wear Funky Knitted Jeans, Printed',
    price: 499,
    unit: 'Piece',
    priceType: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&auto=format&fit=crop&q=80',
    imageCount: 4,
    badgeType: 'star',
    specs: [
      { label: 'Fit Type', value: 'Comfort Fit' },
      { label: 'Fabric', value: 'Denim' },
      { label: 'Pattern', value: 'Printed' },
      { label: 'Color', value: 'Dark Blue' },
      { label: 'MOQ', value: '100 Pieces' },
    ],
    supplier: {
      name: 'Sadabahar Fashion',
      logoText: 'SF',
      logoBg: 'bg-purple-600',
      location: 'Gorakhpur, Uttar Pradesh',
      experience: '11+ Years',
      verifiedText: 'TrustSEAL',
      rating: 4.1,
      reviewsCount: 1139,
    },
  },
  {
    id: 3,
    title: 'Men Denim Jeans',
    price: 400,
    unit: 'Piece',
    priceType: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&auto=format&fit=crop&q=80',
    imageCount: 3,
    badgeType: 'verified',
    specs: [
      { label: 'Fabric Type', value: 'Cotton Lycra' },
      { label: 'Fit Type', value: 'Comfort Fit' },
      { label: 'Gender', value: 'Men' },
      { label: 'Color', value: 'Blue' },
      { label: 'MOQ', value: '50 Pieces' },
    ],
    supplier: {
      name: 'Ritika Fashions',
      logoText: 'R',
      logoBg: 'bg-blue-900',
      location: 'Gorakhpur, Uttar Pradesh',
      experience: '16+ Years',
      verifiedText: 'Verified Business',
      rating: 3.9,
      reviewsCount: 102,
    },
  },
  {
    id: 4,
    title: 'Classic Straight Fit Jeans',
    price: 750,
    unit: 'Piece',
    priceType: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&auto=format&fit=crop&q=80',
    imageCount: 4,
    badgeType: 'verified',
    specs: [
      { label: 'Fit Type', value: 'Straight Fit' },
      { label: 'Fabric', value: 'Denim' },
      { label: 'Gender', value: 'Men' },
      { label: 'Color', value: 'Blue' },
      { label: 'MOQ', value: '100 Pieces' },
    ],
    supplier: {
      name: 'M.K. Fashion Hub',
      logoText: 'MH',
      logoBg: 'bg-slate-800',
      location: 'Gorakhpur, Uttar Pradesh',
      experience: '8+ Years',
      verifiedText: 'Verified Business',
      rating: 4.2,
      reviewsCount: 421,
    },
  },
  {
    id: 5,
    title: "Women's Blue Denim Jeans",
    price: 699,
    unit: 'Piece',
    priceType: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80',
    imageCount: 3,
    badgeType: 'verified',
    specs: [
      { label: 'Fit Type', value: 'Slim Fit' },
      { label: 'Fabric', value: 'Denim' },
      { label: 'Gender', value: 'Women' },
      { label: 'Color', value: 'Light Blue' },
      { label: 'MOQ', value: '100 Pieces' },
    ],
    supplier: {
      name: 'Shree Balaji Garments',
      logoText: 'SB',
      logoBg: 'bg-orange-600',
      location: 'Gorakhpur, Uttar Pradesh',
      experience: '12+ Years',
      verifiedText: 'Verified Business',
      rating: 4.0,
      reviewsCount: 296,
    },
  },
  {
    id: 6,
    title: 'Kids Denim Jeans',
    price: 350,
    unit: 'Piece',
    priceType: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&auto=format&fit=crop&q=80',
    imageCount: 4,
    badgeType: 'verified',
    specs: [
      { label: 'Fit Type', value: 'Regular Fit' },
      { label: 'Fabric', value: 'Denim' },
      { label: 'Gender', value: 'Kids' },
      { label: 'Color', value: 'Blue' },
      { label: 'MOQ', value: '50 Pieces' },
    ],
    supplier: {
      name: 'Gupta Jeans House',
      logoText: 'GT',
      logoBg: 'bg-red-600',
      location: 'Gorakhpur, Uttar Pradesh',
      experience: '9+ Years',
      verifiedText: 'Verified Business',
      rating: 3.8,
      reviewsCount: 176,
    },
  },
  {
    id: 7,
    title: 'Wholesale Denim Bundle',
    price: 280,
    unit: 'Piece',
    priceType: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&auto=format&fit=crop&q=80',
    imageCount: 5,
    badgeType: 'verified',
    specs: [
      { label: 'Fabric', value: 'Denim' },
      { label: 'Fit Type', value: 'Regular Fit' },
      { label: 'Gender', value: 'Men' },
      { label: 'Color', value: 'Mix' },
      { label: 'MOQ', value: '100 Pieces' },
    ],
    supplier: {
      name: 'Gorakhpur Textile Traders',
      logoText: 'GT',
      logoBg: 'bg-blue-600',
      location: 'Gorakhpur, Uttar Pradesh',
      experience: '10+ Years',
      verifiedText: 'Verified Business',
      rating: 4.3,
      reviewsCount: 565,
    },
  },
  {
    id: 8,
    title: "Men's Black Denim Jeans",
    price: 650,
    unit: 'Piece',
    priceType: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&auto=format&fit=crop&q=80',
    imageCount: 2,
    badgeType: 'star',
    specs: [
      { label: 'Fit Type', value: 'Regular Fit' },
      { label: 'Fabric', value: 'Denim' },
      { label: 'Gender', value: 'Men' },
      { label: 'Color', value: 'Black' },
      { label: 'MOQ', value: '100 Pieces' },
    ],
    supplier: {
      name: 'R.B. Jeans Collection',
      logoText: 'RB',
      logoBg: 'bg-red-800',
      location: 'Gorakhpur, Uttar Pradesh',
      experience: '7+ Years',
      verifiedText: 'Verified Business',
      rating: 4.0,
      reviewsCount: 221,
    },
  },
];

const CATEGORY_TAGS = [
  { name: 'All (156)', active: true },
  { name: 'Men Jeans (89)' },
  { name: 'Men Denim Jeans (156)' },
  { name: 'Ladies Jeans (42)' },
  { name: 'Kids Jeans (28)' },
  { name: 'Below ₹400 (36)' },
  { name: 'Khalilabad (12)' },
  { name: 'Varanasi (21)' },
  { name: 'Delhi (18)' },
  { name: 'Muzaffarpur (14)' },
  { name: 'Prayagraj (11)' },
  { name: 'Uttar Pradesh', hasDropdown: true },
  { name: 'More', hasDropdown: true },
];

export default function B2BListingPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter Accordions Toggle State
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    location: true,
    businessType: true,
    priceRange: true,
    moq: true,
    fabricType: true,
    fitType: true,
    gender: true,
    color: true,
  });

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reusable Sidebar Filters Component
  const SidebarFilters = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 bg-white px-4 pt-4 rounded-xl border-x border-t">
        <h2 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
          Filters
        </h2>
        <button className="text-xs text-blue-600 hover:underline font-bold cursor-pointer">
          Clear All
        </button>
      </div>

      {/* 1. Filter: Location */}
      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
        <button
          onClick={() => toggleSection('location')}
          className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
        >
          <span>Location</span>
          {openSections.location ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {openSections.location && (
          <div className="p-4 space-y-3 border-t border-slate-100">
            <div className="relative">
              <IoSearch className="absolute left-3 top-2.5 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search City..."
                className="w-full text-xs pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg outline-none focus:border-blue-600 bg-slate-50"
              />
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              {[
                { name: 'Gorakhpur', count: 156, checked: true },
                { name: 'Lucknow', count: 842 },
                { name: 'Varanasi', count: 621 },
                { name: 'Kanpur', count: 513 },
                { name: 'Delhi', count: '1,240' },
                { name: 'Mumbai', count: '1,980' },
              ].map((loc, idx) => (
                <label key={idx} className={`flex items-center justify-between cursor-pointer ${loc.checked ? 'font-bold text-slate-900' : 'hover:text-slate-900'}`}>
                  <span className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked={loc.checked} className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4" />
                    {loc.name}
                  </span>
                  <span className="text-slate-400 font-medium">{loc.count}</span>
                </label>
              ))}
              <button className="text-blue-600 font-bold text-[11px] pt-1 hover:underline cursor-pointer">Show More ∨</button>
            </div>
          </div>
        )}
      </div>

      {/* 2. Filter: Business Type */}
      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
        <button
          onClick={() => toggleSection('businessType')}
          className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
        >
          <span>Business Type</span>
          {openSections.businessType ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {openSections.businessType && (
          <div className="p-4 space-y-2 text-xs text-slate-600 border-t border-slate-100">
            {[
              { name: 'Manufacturer', count: 89 },
              { name: 'Wholesaler', count: 156, checked: true },
              { name: 'Supplier', count: 132 },
              { name: 'Exporter', count: 44 },
              { name: 'Trader', count: 98 },
            ].map((type, idx) => (
              <label key={idx} className={`flex items-center justify-between cursor-pointer ${type.checked ? 'font-bold text-slate-900' : 'hover:text-slate-900'}`}>
                <span className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked={type.checked} className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4" />
                  {type.name}
                </span>
                <span className="text-slate-400 font-medium">{type.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 3. Filter: Price Range (₹) */}
      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
        <button
          onClick={() => toggleSection('priceRange')}
          className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
        >
          <span>Price Range (₹)</span>
          {openSections.priceRange ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {openSections.priceRange && (
          <div className="p-4 space-y-3 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Min" className="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-600 bg-slate-50" />
              <span className="text-slate-400 font-bold">-</span>
              <input type="text" placeholder="Max" className="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-600 bg-slate-50" />
            </div>
            <button className="w-full bg-blue-600 text-white text-xs font-extrabold py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer shadow-sm">
              Apply
            </button>
          </div>
        )}
      </div>

      {/* 4. Filter: Minimum Order Quantity (MOQ) */}
      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
        <button
          onClick={() => toggleSection('moq')}
          className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
        >
          <span>Minimum Order Quantity</span>
          {openSections.moq ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {openSections.moq && (
          <div className="p-4 space-y-2 text-xs text-slate-600 border-t border-slate-100">
            {[
              { name: 'Any MOQ', checked: true },
              { name: '1 - 100 Pieces' },
              { name: '101 - 500 Pieces' },
              { name: '501 - 1,000 Pieces' },
              { name: '1,000+ Pieces' },
            ].map((item, idx) => (
              <label key={idx} className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                <input type="radio" name="moq" defaultChecked={item.checked} className="text-blue-600 focus:ring-blue-500 w-4 h-4" />
                <span>{item.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 5. Filter: Fabric Type */}
      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
        <button
          onClick={() => toggleSection('fabricType')}
          className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
        >
          <span>Fabric Type</span>
          {openSections.fabricType ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {openSections.fabricType && (
          <div className="p-4 space-y-2 text-xs text-slate-600 border-t border-slate-100">
            {[
              { name: '100% Cotton Denim', count: 112 },
              { name: 'Cotton Lycra / Stretch', count: 85 },
              { name: 'Polyester Blend', count: 43 },
              { name: 'Knit Denim', count: 29 },
              { name: 'Raw Denim', count: 18 },
            ].map((item, idx) => (
              <label key={idx} className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                <span className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4" />
                  {item.name}
                </span>
                <span className="text-slate-400 font-medium">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 6. Filter: Fit Type */}
      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
        <button
          onClick={() => toggleSection('fitType')}
          className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
        >
          <span>Fit Type</span>
          {openSections.fitType ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {openSections.fitType && (
          <div className="p-4 space-y-2 text-xs text-slate-600 border-t border-slate-100">
            {[
              { name: 'Regular Fit', count: 94 },
              { name: 'Slim Fit', count: 76 },
              { name: 'Baggy Fit', count: 48 },
              { name: 'Comfort Fit', count: 32 },
              { name: 'Straight Fit', count: 28 },
            ].map((item, idx) => (
              <label key={idx} className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                <span className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4" />
                  {item.name}
                </span>
                <span className="text-slate-400 font-medium">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 7. Filter: Gender */}
      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
        <button
          onClick={() => toggleSection('gender')}
          className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
        >
          <span>Gender</span>
          {openSections.gender ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {openSections.gender && (
          <div className="p-4 space-y-2 text-xs text-slate-600 border-t border-slate-100">
            {[
              { name: "Men's", count: 142 },
              { name: "Women's / Ladies", count: 68 },
              { name: "Boys / Kids", count: 35 },
              { name: "Unisex", count: 19 },
              { name: "Girls", count: 14 },
            ].map((item, idx) => (
              <label key={idx} className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                <span className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4" />
                  {item.name}
                </span>
                <span className="text-slate-400 font-medium">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 8. Filter: Color */}
      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
        <button
          onClick={() => toggleSection('color')}
          className="w-full flex items-center justify-between p-4 text-xs font-extrabold text-slate-900 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer"
        >
          <span>Color</span>
          {openSections.color ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {openSections.color && (
          <div className="p-4 space-y-2 text-xs text-slate-600 border-t border-slate-100">
            {[
              { name: 'Dark Blue', count: 120, hex: '#1e3a8a' },
              { name: 'Light Blue', count: 88, hex: '#60a5fa' },
              { name: 'Black', count: 64, hex: '#18181b' },
              { name: 'Grey', count: 42, hex: '#6b7280' },
              { name: 'White', count: 15, hex: '#f4f4f5' },
            ].map((item, idx) => (
              <label key={idx} className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                <span className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4" />
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-300 inline-block" style={{ backgroundColor: item.hex }} />
                  {item.name}
                </span>
                <span className="text-slate-400 font-medium">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 text-sm font-sans antialiased">
      
      {/* Top Banner */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 text-center font-medium">
        ✨ Connect directly with verified manufacturers & bulk wholesalers in Gorakhpur, Khalilabad & Basti.
      </div>

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 py-4">
        
        {/* Breadcrumb Trail */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-3 overflow-x-auto no-scrollbar">
          <Link href="#" className="hover:text-blue-600 transition">Home</Link>
          <span className="text-slate-300">/</span>
          <Link href="#" className="hover:text-blue-600 transition">Fashion & Apparel</Link>
          <span className="text-slate-300">/</span>
          <Link href="#" className="hover:text-blue-600 transition">Men Clothing</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-semibold">Men Jeans</span>
        </nav>

        {/* Page Banner Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Denim Jeans - Wholesaler In Gorakhpur
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Find verified denim jeans wholesalers, suppliers and manufacturers in Gorakhpur.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 bg-blue-50/60 border border-blue-100 rounded-xl px-3 py-2">
              <IoShieldCheckmarkSharp className="text-blue-600 text-lg" />
              <div>
                <p className="text-xs font-bold text-slate-900">Verified Suppliers</p>
                <p className="text-[10px] text-slate-500">Only Genuine Businesses</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-blue-50/60 border border-blue-100 rounded-xl px-3 py-2">
              <IoStorefrontSharp className="text-blue-600 text-lg" />
              <div>
                <p className="text-xs font-bold text-slate-900">Best Wholesale Prices</p>
                <p className="text-[10px] text-slate-500">Direct from Manufacturers</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-blue-50/60 border border-blue-100 rounded-xl px-3 py-2">
              <IoCubeSharp className="text-blue-600 text-lg" />
              <div>
                <p className="text-xs font-bold text-slate-900">Bulk Order Support</p>
                <p className="text-[10px] text-slate-500">Custom Quotes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Category Tag Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4">
          {CATEGORY_TAGS.map((tag, i) => (
            <button
              key={i}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer flex items-center gap-1 border ${
                tag.active
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              <span>{tag.name}</span>
              {tag.hasDropdown && <IoChevronDown className="text-xs opacity-70" />}
            </button>
          ))}
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-5">
          
          {/* Desktop Left Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <SidebarFilters />
          </aside>

          {/* Right Main Product Section */}
          <main className="flex-1 min-w-0">
            
            {/* Toolbar Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg font-bold text-xs cursor-pointer"
                >
                  <IoFilter /> Filters
                </button>
                <h2 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  156 Denim Jeans Wholesalers in Gorakhpur
                </h2>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500 hidden sm:inline font-medium">Sort by:</span>
                  <select className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-slate-800 outline-none focus:border-blue-600 cursor-pointer">
                    <option>Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                  </select>
                </div>

                {/* Grid / List Switcher */}
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden p-0.5 bg-slate-100">
                  <button
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid View"
                    className={`p-1.5 rounded-md text-sm transition cursor-pointer ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <IoGrid />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    aria-label="List View"
                    className={`p-1.5 rounded-md text-sm transition cursor-pointer ${
                      viewMode === 'list' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <IoList />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Cards Container */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'
                  : 'flex flex-col gap-4'
              }
            >
              {DUMMY_PRODUCTS.map((product) => {
                const isFav = favorites.includes(product.id);

                /* --- LIST VIEW LAYOUT --- */
                if (viewMode === 'list') {
                  return (
                    <div
                      key={product.id}
                      className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-blue-300 transition flex flex-col lg:flex-row items-stretch group"
                    >
                      <div className="relative w-full lg:w-60 shrink-0 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 p-2.5">
                        <div className="relative w-full aspect-4/3 lg:aspect-square bg-white rounded-xl overflow-hidden border border-slate-200/60">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                          <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                            {product.badgeType === 'star' && (
                              <span className="bg-amber-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                                <IoStar className="text-xs" /> Star Supplier
                              </span>
                            )}
                            {product.badgeType === 'verified' && (
                              <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                                <IoCheckmarkCircle className="text-xs" /> Verified Supplier
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => toggleFavorite(product.id)}
                            className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-rose-500 shadow-xs cursor-pointer"
                          >
                            {isFav ? <IoHeart className="text-rose-500 text-base" /> : <IoHeartOutline className="text-base" />}
                          </button>

                          <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                            <IoCamera className="text-xs" /> +{product.imageCount}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-base hover:text-blue-600 cursor-pointer transition">
                            {product.title}
                          </h3>

                          <div className="flex items-baseline gap-2 mt-1.5 mb-3">
                            <span className="text-xl font-black text-slate-900">
                              ₹ {product.price.toLocaleString()}
                            </span>
                            <span className="text-xs text-slate-500 font-bold">/ {product.unit}</span>
                            <span className="text-[10px] bg-blue-50 text-blue-700 font-extrabold px-2 py-0.5 rounded border border-blue-100">
                              {product.priceType}
                            </span>
                          </div>

                          <div className="border border-slate-200/80 rounded-xl p-2.5 bg-slate-50/60 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
                            {product.specs.map((spec, i) => (
                              <div key={i} className="flex justify-between items-center py-0.5 border-b border-slate-200/40 last:border-0">
                                <span className="text-slate-500 font-medium">{spec.label}:</span>
                                <span className="font-bold text-slate-800">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 w-full lg:w-64 shrink-0 bg-slate-50/50 flex flex-col justify-between gap-3">
                        <div className="space-y-1.5">
                          <h4 className="font-extrabold text-slate-900 text-sm hover:text-blue-600 cursor-pointer transition">
                            {product.supplier.name}
                          </h4>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <IoLocation className="text-slate-400 shrink-0" /> {product.supplier.location}
                          </p>
                          <div className="flex items-center gap-2 pt-0.5 text-xs">
                            <span className="font-bold text-emerald-600">✓ {product.supplier.verifiedText}</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-extrabold text-amber-700">{product.supplier.experience}</span>
                          </div>
                          <div className="flex items-center gap-1.5 pt-0.5">
                            <span className="bg-amber-500 text-white text-xs font-black px-1.5 py-0.5 rounded flex items-center gap-0.5">
                              <IoStar className="text-white text-[10px]" /> {product.supplier.rating}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">({product.supplier.reviewsCount})</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-2 px-3 rounded-lg text-xs transition flex items-center justify-center gap-1.5 cursor-pointer">
                            <IoPaperPlaneSharp /> Contact Supplier
                          </button>
                          <button className="w-full bg-white hover:bg-slate-50 text-blue-600 border border-blue-600 font-extrabold py-1.5 px-3 rounded-lg text-xs transition flex items-center justify-center gap-1.5 cursor-pointer">
                            <IoCall /> Call Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                /* --- GRID VIEW LAYOUT (Exact Figma Design Matching Image) --- */
                return (
                  <div
                    key={product.id}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Banner */}
                      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                          {product.badgeType === 'star' && (
                            <span className="bg-amber-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                              <IoStar className="text-xs" /> Star Supplier
                            </span>
                          )}
                          {product.badgeType === 'verified' && (
                            <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                              <IoCheckmarkCircle className="text-xs" /> Verified Supplier
                            </span>
                          )}
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-rose-500 shadow-2xs cursor-pointer"
                        >
                          {isFav ? <IoHeart className="text-rose-500 text-base" /> : <IoHeartOutline className="text-base" />}
                        </button>

                        {/* Image Counter */}
                        <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                          <IoCamera className="text-xs" /> +{product.imageCount}
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="p-3.5">
                        <h3 className="font-extrabold text-slate-900 line-clamp-1 text-xs group-hover:text-blue-600 transition cursor-pointer">
                          {product.title}
                        </h3>

                        <div className="flex items-baseline gap-1 mt-1.5 mb-3">
                          <span className="text-base font-black text-slate-900">
                            ₹ {product.price.toLocaleString()}
                          </span>
                          <span className="text-[11px] text-slate-500 font-bold">/ {product.unit}</span>
                          <span className="ml-auto text-[9px] bg-blue-50 text-blue-700 font-extrabold px-1.5 py-0.5 rounded border border-blue-100">
                            {product.priceType}
                          </span>
                        </div>

                        {/* Specifications Table */}
                        <div className="bg-slate-50/80 rounded-lg p-2 border border-slate-100 text-[11px] space-y-1 mb-3">
                          {product.specs.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center text-slate-600">
                              <span className="text-slate-400 font-medium">{spec.label}</span>
                              <span className="font-semibold text-slate-800">: {spec.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Supplier Info */}
                        <div className="pt-2 border-t border-slate-100 flex items-start gap-2">
                          <div className={`w-7 h-7 rounded-full ${product.supplier.logoBg} text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5`}>
                            {product.supplier.logoText}
                          </div>

                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-slate-900 text-xs truncate hover:text-blue-600 cursor-pointer">
                              {product.supplier.name}
                            </h4>
                            <p className="text-[10px] text-slate-400 truncate flex items-center gap-0.5">
                              <IoLocation className="shrink-0" /> {product.supplier.location}
                            </p>
                            <div className="flex items-center gap-1 text-[10px] mt-0.5">
                              <span className="text-amber-700 font-extrabold">{product.supplier.experience}</span>
                              <span className="text-slate-300">|</span>
                              <span className="text-emerald-600 font-bold">✓ {product.supplier.verifiedText}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] mt-0.5">
                              <span className="text-amber-500 font-black flex items-center">
                                ★ {product.supplier.rating}
                              </span>
                              <span className="text-slate-400">({product.supplier.reviewsCount})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Buttons */}
                    <div className="p-3.5 pt-0 grid grid-cols-2 gap-2">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-2 px-2 rounded-lg text-[11px] transition flex items-center justify-center gap-1 cursor-pointer">
                        <IoPaperPlaneSharp /> Contact
                      </button>
                      <button className="w-full bg-white hover:bg-slate-50 text-blue-600 border border-blue-600 font-extrabold py-2 px-2 rounded-lg text-[11px] transition flex items-center justify-center gap-1 cursor-pointer">
                        <IoCall /> Call Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Drawer Filter Drawer Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10">
            <div className="p-4 border-b flex items-center justify-between bg-slate-50">
              <h2 className="font-extrabold text-slate-900 text-sm">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900"
              >
                <IoClose className="text-xl" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <SidebarFilters />
            </div>
            <div className="p-4 border-t bg-white">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-blue-600 text-white font-extrabold py-2.5 rounded-xl text-xs"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}