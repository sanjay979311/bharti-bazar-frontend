"use client";

import Link from "next/link";
import {
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
} from "react-icons/fa";

// Category items list matching the reference design
const categoriesList = [
  { name: "Machinery", icon: FaCog, color: "text-blue-600" },
  { name: "Textiles", icon: FaTshirt, color: "text-rose-500" },
  { name: "Electronics", icon: FaMicrochip, color: "text-indigo-600" },
  { name: "Chemicals", icon: FaFlask, color: "text-cyan-600" },
  { name: "Packaging", icon: FaBoxOpen, color: "text-amber-600" },
  { name: "Construction", icon: FaHardHat, color: "text-yellow-600" },
  { name: "Agriculture", icon: FaSeedling, color: "text-green-600" },
  { name: "Food & Beverage", icon: FaUtensils, color: "text-orange-500" },
  { name: "Health & Medical", icon: FaPrescriptionBottleAlt, color: "text-blue-500" },
  { name: "Home & Furniture", icon: FaCouch, color: "text-amber-700" },
  { name: "Automotive", icon: FaCar, color: "text-red-600" },
  { name: "More Categories", icon: FaEllipsisH, color: "text-blue-600" },
];

export default function CategoryIconsBar() {
  return (
    <section className="w-full py-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid matching the reference image layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
          {categoriesList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={index}
                href={`/categories/${item.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200/90 hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-200 text-center group cursor-pointer min-h-[90px]"
              >
                <div className={`p-2 rounded-lg bg-gray-50/80 group-hover:bg-blue-50 transition-colors ${item.color}`}>
                  <IconComponent className="text-xl sm:text-2xl" />
                </div>
                <span className="text-[11px] font-semibold text-slate-800 mt-2 line-clamp-1 group-hover:text-blue-600">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
