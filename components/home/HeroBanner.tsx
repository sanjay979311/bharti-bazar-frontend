// "use client";

// import Link from "next/link";
// import {
//   FaCheckCircle,
//   FaShieldAlt,
//   FaTruck,
//   FaGlobe,
//   FaArrowRight,
// } from "react-icons/fa";

// export default function HeroBanner() {
//   return (
//     <section className="w-full bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 py-6 sm:py-8 border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Full-Width Banner Container */}
//         <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-100/90 via-sky-50 to-blue-200/60 border border-blue-200/80 shadow-md p-6 sm:p-10 lg:p-12 min-h-[380px] flex items-center">
          
//           {/* Background Graphic Element (Simulating cargo, airplane, and city skyline from reference image) */}
//           <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]" />
          
//           {/* Optional decorative background image overlay if you place an asset in public folder */}
//           <div className="absolute right-0 bottom-0 opacity-40 pointer-events-none hidden lg:block w-1/2 h-full bg-no-repeat bg-right-bottom bg-contain" 
//                style={{ backgroundImage: "url('/hero-bg-graphic.png')" }} 
//           />

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
            
//             {/* Left Content Area (Text, Buttons & Trust Badges) */}
//             <div className="lg:col-span-8 space-y-5">
              
//               {/* Trusted Badge Tag */}
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600/10 text-blue-800 text-xs sm:text-sm font-bold tracking-wide uppercase border border-blue-200">
//                 <span className="w-2 h-2 rounded-full bg-blue-600" />
//                 TRUSTED B2B MARKETPLACE
//               </div>

//               {/* Main Heading */}
//               <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
//                 Global Products <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
//                   For Your Business
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed font-medium">
//                 Connect with verified suppliers, manufacturers and exporters across India and worldwide.
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-wrap items-center gap-3 pt-2">
//                 <Link
//                   href="/categories"
//                   className="px-6 py-3 rounded-lg text-white font-semibold text-sm shadow-md transition-all duration-200 flex items-center gap-2 hover:opacity-95 active:scale-[0.98]"
//                   style={{ backgroundColor: "var(--color-primary-600)" }}
//                 >
//                   Explore Categories <FaArrowRight className="text-xs" />
//                 </Link>

//                 <Link
//                   href="/rfq"
//                   className="px-6 py-3 rounded-lg font-semibold text-sm bg-white text-blue-900 shadow-sm hover:bg-gray-50 transition-all duration-200 border border-gray-300 active:scale-[0.98]"
//                 >
//                   Get Quotes Now
//                 </Link>
//               </div>

//               {/* Bottom 4 Trust Icons Bar */}
//               <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-blue-200/60 text-xs sm:text-sm text-slate-700 font-medium">
//                 <div className="flex items-center gap-2">
//                   <div className="p-1 rounded-full bg-blue-600 text-white text-xs">
//                     <FaCheckCircle />
//                   </div>
//                   <span>Verified Suppliers</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="p-1 rounded-full bg-blue-600 text-white text-xs">
//                     <FaShieldAlt />
//                   </div>
//                   <span>Secure Transactions</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="p-1 rounded-full bg-blue-600 text-white text-xs">
//                     <FaTruck />
//                   </div>
//                   <span>On-Time Delivery</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="p-1 rounded-full bg-blue-600 text-white text-xs">
//                     <FaGlobe />
//                   </div>
//                   <span>Global Network</span>
//                 </div>
//               </div>

//             </div>

//             {/* Right Side Card ("From India to the World") */}
//             <div className="lg:col-span-4 flex justify-end">
//               <div className="w-full max-w-xs bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-white shadow-xl space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
//                     <FaGlobe className="text-2xl" />
//                   </div>
//                   <div>
//                     <h2 className="text-sm font-bold text-slate-900 leading-tight">From India</h2>
//                     <h2 className="text-sm font-bold text-slate-900 leading-tight">to the World</h2>
//                   </div>
//                 </div>

//                 <div className="pt-1 flex items-center justify-between text-xs font-semibold text-slate-600 border-t border-gray-100">
//                   <span>Your Global Trade Partner</span>
//                   <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaTruck,
  FaGlobe,
  FaArrowRight,
  FaCog,
  FaTshirt,
  FaMicrochip,
  FaFlask,
  FaBoxOpen,
  FaHardHat,
  FaSeedling,
  FaUtensils,
  FaPrescriptionBottleAlt,
  FaCouch,
  FaCar,
  FaEllipsisH,
  FaClipboardList,
  FaChevronRight,
} from "react-icons/fa";

// Data arrays for sections
const quickCategories = [
  { name: "Machinery", icon: FaCog, color: "text-blue-600", count: "25,000+ Products" },
  { name: "Textiles", icon: FaTshirt, color: "text-rose-500", count: "18,000+ Products" },
  { name: "Electronics", icon: FaMicrochip, color: "text-indigo-600", count: "32,000+ Products" },
  { name: "Chemicals", icon: FaFlask, color: "text-cyan-600", count: "12,000+ Products" },
  { name: "Packaging", icon: FaBoxOpen, color: "text-amber-600", count: "15,000+ Products" },
  { name: "Construction", icon: FaHardHat, color: "text-yellow-600", count: "28,000+ Products" },
  { name: "Agriculture", icon: FaSeedling, color: "text-green-600", count: "20,000+ Products" },
  { name: "Food & Beverage", icon: FaUtensils, color: "text-orange-500", count: "18,000+ Products" },
  { name: "Health & Medical", icon: FaPrescriptionBottleAlt, color: "text-blue-500", count: "9,000+ Products" },
  { name: "Home & Furniture", icon: FaCouch, color: "text-amber-700", count: "16,000+ Products" },
  { name: "Automotive", icon: FaCar, color: "text-red-600", count: "11,000+ Products" },
  { name: "More Categories", icon: FaEllipsisH, color: "text-blue-600", count: "View All" },
];

const featuredListings = [
  { title: "Stainless Steel Coils", price: "₹ 1,50,000 / Ton", minOrder: "Min. Order: 1 Ton", imgBg: "bg-slate-200" },
  { title: "Industrial Electric Motor", price: "₹ 25,000 / Piece", minOrder: "Min. Order: 10 Piece", imgBg: "bg-blue-100" },
  { title: "Electronic Circuit Board", price: "₹ 1,500 / Piece", minOrder: "Min. Order: 100 Piece", imgBg: "bg-indigo-100" },
  { title: "Packaging Carton Box", price: "₹ 15 / Piece", minOrder: "Min. Order: 500 Piece", imgBg: "bg-amber-100" },
  { title: "Fresh Dates", price: "₹ 50 / Kg", minOrder: "Min. Order: 100 Kg", imgBg: "bg-orange-100" },
  { title: "Industrial Valve", price: "₹ 8,500 / Piece", minOrder: "Min. Order: 5 Piece", imgBg: "bg-slate-300" },
];

const topSuppliers = [
  { name: "Shree Steel Industries", location: "Kolkata, India", badges: ["Verified", "Manufacturer"] },
  { name: "Global Electro Pvt Ltd", location: "Gurugram, India", badges: ["Verified", "Supplier"] },
  { name: "Asian Packaging Co.", location: "Mumbai, India", badges: ["Verified", "Manufacturer"] },
  { name: "Krishna Textiles", location: "Surat, India", badges: ["Verified", "Exporter"] },
  { name: "Agro Fresh Traders", location: "Nashik, India", badges: ["Verified", "Wholesaler"] },
];

const latestRfqs = [
  { title: "Stainless Steel Sheet 304", qty: "Quantity: 5 Ton", status: "New" },
  { title: "Packaging Boxes", qty: "Quantity: 10,000 Piece", status: "New" },
  { title: "Organic Spices", qty: "Quantity: 2 Ton", status: "Open" },
  { title: "Industrial Pump", qty: "Quantity: 50 Piece", status: "Open" },
  { title: "Cotton Fabric", qty: "Quantity: 1,000 Meter", status: "Open" },
];

const popularProducts = [
  { name: "PVC Pipe", price: "₹ 120 / Piece" },
  { name: "Cement", price: "₹ 420 / Bag" },
  { name: "LED Bulb", price: "₹ 80 / Piece" },
  { name: "Steel Rod", price: "₹ 55,000 / Ton" },
  { name: "Rice", price: "₹ 45 / Kg" },
  { name: "Hand Gloves", price: "₹ 12 / Pair" },
  { name: "Plastic Granules", price: "₹ 90 / Kg" },
  { name: "T-Shirt", price: "₹ 120 / Piece" },
  { name: "Office Chair", price: "₹ 2,500 / Piece" },
  { name: "Solar Panel", price: "₹ 18,000 / Piece" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-light)] text-slate-800">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-100/90 via-sky-50 to-blue-200/60 border border-blue-200/80 shadow-md p-6 sm:p-10 lg:p-12 min-h-[380px] flex items-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600/10 text-blue-800 text-xs font-bold tracking-wide uppercase border border-blue-200">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  TRUSTED B2B MARKETPLACE
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                  Global Products <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                    For Your Business
                  </span>
                </h1>

                <p className="text-slate-600 text-sm sm:text-base max-w-xl font-medium">
                  Connect with verified suppliers, manufacturers and exporters across India and worldwide.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link href="/categories" className="px-6 py-3 rounded-lg text-white font-semibold text-sm shadow-md transition flex items-center gap-2" style={{ backgroundColor: "var(--color-primary-600)" }}>
                    Explore Categories <FaArrowRight className="text-xs" />
                  </Link>
                  <Link href="/rfq" className="px-6 py-3 rounded-lg font-semibold text-sm bg-white text-blue-900 shadow-sm hover:bg-gray-50 transition border border-gray-300">
                    Get Quotes Now
                  </Link>
                </div>

                <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-blue-200/60 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="flex items-center gap-2"><div className="p-1 rounded-full bg-blue-600 text-white text-xs"><FaCheckCircle /></div><span>Verified Suppliers</span></div>
                  <div className="flex items-center gap-2"><div className="p-1 rounded-full bg-blue-600 text-white text-xs"><FaShieldAlt /></div><span>Secure Transactions</span></div>
                  <div className="flex items-center gap-2"><div className="p-1 rounded-full bg-blue-600 text-white text-xs"><FaTruck /></div><span>On-Time Delivery</span></div>
                  <div className="flex items-center gap-2"><div className="p-1 rounded-full bg-blue-600 text-white text-xs"><FaGlobe /></div><span>Global Network</span></div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-end">
                <div className="w-full max-w-xs bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-white shadow-xl space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
                      <FaGlobe className="text-2xl" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 leading-tight">From India</h2>
                      <h2 className="text-sm font-bold text-slate-900 leading-tight">to the World</h2>
                    </div>
                  </div>
                  <div className="pt-1 flex items-center justify-between text-xs font-semibold text-slate-600 border-t border-gray-100">
                    <span>Your Global Trade Partner</span>
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
                      <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-6">

        {/* ================= 2. CATEGORY ICONS SECTION ================= */}
        <section className="w-full">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
            {quickCategories.map((item, index) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={index}
                  href={`/categories`}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200/90 hover:border-blue-500 shadow-sm hover:shadow-md transition text-center group min-h-[90px]"
                >
                  <div className={`p-2 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition ${item.color}`}>
                    <IconComp className="text-xl sm:text-2xl" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800 mt-2 line-clamp-1 group-hover:text-blue-600">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ================= 3. PROMO BANNERS SECTION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 p-6 text-white shadow-md flex flex-col justify-between min-h-[160px]">
            <div className="space-y-1">
              <span className="text-[10px] tracking-wider uppercase font-bold text-blue-400">Featured Sector</span>
              <h3 className="text-lg font-bold">Industrial Machinery</h3>
              <p className="text-xs text-gray-300">High Performance Equipment</p>
            </div>
            <Link href="/categories" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 hover:text-white pt-3">
              View Products <FaArrowRight className="text-[10px]" />
            </Link>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 p-6 text-white shadow-md flex flex-col justify-between min-h-[160px]">
            <div className="space-y-1">
              <span className="text-[10px] tracking-wider uppercase font-bold text-sky-300">Verified Sellers</span>
              <h3 className="text-lg font-bold">Global Sourcing</h3>
              <p className="text-xs text-blue-200">Direct from Verified Suppliers</p>
            </div>
            <Link href="/search" className="inline-flex items-center gap-2 text-xs font-semibold text-sky-200 hover:text-white pt-3">
              View Suppliers <FaArrowRight className="text-[10px]" />
            </Link>
          </div>

          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-5 shadow-sm flex items-center justify-between">
            <div className="space-y-2 pr-2">
              <h3 className="text-base font-bold text-blue-950">Post Your Bulk Requirement</h3>
              <p className="text-xs text-gray-600">Get quotes from multiple verified suppliers</p>
              <Link href="/rfq" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-white shadow mt-1" style={{ backgroundColor: "var(--color-primary-600)" }}>
                Post Requirement <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
            <div className="hidden sm:flex p-3 bg-white rounded-xl shadow-sm border border-blue-100 text-blue-600">
              <FaClipboardList className="text-4xl" />
            </div>
          </div>
        </section>

        {/* ================= 4. FEATURED WHOLESALE LISTINGS SECTION ================= */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900">Featured Wholesale Listings</h2>
            <Link href="/categories" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
              View All <FaChevronRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredListings.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-3 flex flex-col justify-between hover:shadow-md transition group">
                <div>
                  <div className={`w-full h-32 rounded-lg ${item.imgBg} flex items-center justify-center mb-3 relative overflow-hidden`}>
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-green-600 text-white flex items-center gap-1">
                      <FaCheckCircle className="text-[9px]" /> Verified
                    </span>
                    <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-slate-400 font-bold text-xs">IMG</div>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600">{item.title}</h3>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">{item.price}</p>
                  <p className="text-[11px] text-gray-500">{item.minOrder}</p>
                </div>
                <Link href="/product/slug" className="mt-3 w-full py-2 rounded-lg text-white text-xs font-semibold text-center block transition" style={{ backgroundColor: "var(--color-primary-600)" }}>
                  Contact Supplier
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 5. POPULAR CATEGORIES SECTION ================= */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900">Popular Categories</h2>
            <Link href="/categories" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
              View All Categories <FaChevronRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {quickCategories.slice(0, 11).map((cat, idx) => {
              const IconC = cat.icon;
              return (
                <div key={idx} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50 hover:bg-blue-50/40 hover:border-blue-300 transition flex items-center gap-3 cursor-pointer">
                  <div className={`p-2.5 rounded-xl bg-white shadow-sm ${cat.color}`}>
                    <IconC className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{cat.name}</h4>
                    <p className="text-[11px] text-gray-500 font-medium">{cat.count}</p>
                  </div>
                </div>
              );
            })}
            <div className="border border-blue-200 rounded-xl p-4 bg-blue-50/70 hover:bg-blue-100 transition flex items-center gap-3 cursor-pointer">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-sm">
                <FaEllipsisH className="text-xl" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-900">More Categories</h4>
                <p className="text-[11px] text-blue-700 font-semibold">View All →</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 6. SUPPLIER & RFQ SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-slate-900">Top Verified Suppliers</h2>
              <Link href="/company" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
                View All Suppliers <FaChevronRight className="text-xs" />
              </Link>
            </div>

            <div className="space-y-3">
              {topSuppliers.map((supp, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-gray-200 hover:border-blue-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">
                      {supp.name.substring(0, 2)}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900">{supp.name}</h4>
                      <p className="text-xs text-gray-500">{supp.location}</p>
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {supp.badges.map((b, i) => (
                          <span key={i} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                            ✓ {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link href="/company" className="px-4 py-2 rounded-lg text-white text-xs font-semibold w-full sm:w-auto text-center" style={{ backgroundColor: "var(--color-primary-600)" }}>
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-slate-900">Latest RFQ</h2>
              <Link href="/rfq" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
                View All RFQ <FaChevronRight className="text-xs" />
              </Link>
            </div>

            <div className="space-y-3">
              {latestRfqs.map((rfq, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-gray-200 flex items-center justify-between gap-2 hover:bg-gray-50 transition">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${rfq.status === 'New' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                        {rfq.status}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900">{rfq.title}</h4>
                    </div>
                    <p className="text-[11px] text-gray-500 pl-1">{rfq.qty}</p>
                  </div>
                  <Link href="/rfq" className="px-3.5 py-1.5 rounded-lg text-white text-xs font-semibold shrink-0" style={{ backgroundColor: "var(--color-primary-600)" }}>
                    Get Quotes
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 7. POPULAR PRODUCTS SECTION ================= */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900">Popular Products</h2>
            <Link href="/categories" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
              View All <FaChevronRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {popularProducts.map((prod, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-3 text-center hover:shadow-md transition group bg-gray-50/50">
                <div className="w-full h-20 rounded-lg bg-gray-200 mb-2 flex items-center justify-center text-gray-400 font-bold text-xs">
                  IMG
                </div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600">{prod.name}</h4>
                <p className="text-[11px] font-extrabold text-slate-700 mt-1">{prod.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 8. TRUST & VALUE PROPOSITIONS SECTION ================= */}
        <section className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-xl text-xl shadow"><FaCheckCircle /></div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Verified Suppliers</h4>
              <p className="text-xs text-gray-500">Trusted & Reliable</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-xl text-xl shadow"><FaShieldAlt /></div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Secure Transactions</h4>
              <p className="text-xs text-gray-500">Safe & Protected</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-xl text-xl shadow"><FaTruck /></div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Quality Products</h4>
              <p className="text-xs text-gray-500">Assured Quality</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-xl text-xl shadow"><FaGlobe /></div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Global Network</h4>
              <p className="text-xs text-gray-500">Business Worldwide</p>
            </div>
          </div>
        </section>

      </div>

      {/* ================= 9. NEWSLETTER SECTION ================= */}
      <section className="w-full bg-slate-900 text-white py-10 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center justify-between">
            <div className="lg:col-span-6 space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">Stay Updated with Latest Products & Trade Offers</h3>
              <p className="text-xs text-slate-400">Subscribe to our newsletter and never miss an opportunity.</p>
            </div>
            
            <div className="lg:col-span-6 flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 flex-1"
              />
              <button className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition shrink-0" style={{ backgroundColor: "var(--color-primary-600)" }}>
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800 text-center">
            <div><h4 className="text-xl font-black text-blue-400">10L+</h4><p className="text-xs text-slate-400 mt-0.5">Products</p></div>
            <div><h4 className="text-xl font-black text-blue-400">50K+</h4><p className="text-xs text-slate-400 mt-0.5">Suppliers</p></div>
            <div><h4 className="text-xl font-black text-blue-400">200+</h4><p className="text-xs text-slate-400 mt-0.5">Categories</p></div>
            <div><h4 className="text-xl font-black text-blue-400">100+</h4><p className="text-xs text-slate-400 mt-0.5">Countries</p></div>
          </div>
        </div>
      </section>

    </main>
  );
}