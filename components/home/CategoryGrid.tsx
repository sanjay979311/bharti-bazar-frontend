

"use client";

import Link from "next/link";
import Image from "next/image";

// Mock Data for Packaging Machines & Goods
const packagingItems = [
  { name: "Masking Tapes", image: "/image/default-category.png" },
  { name: "TPU Film", image: "/image/default-category.png" },
  { name: "Gloss Lamination Film", image: "/image/default-category.png" },
  { name: "Foam Strip", image: "/image/default-category.png" },
  { name: "Cam Buckles", image: "/image/default-category.png" },
  { name: "Folding PP Boxes", image: "/image/default-category.png" },
];

// Mock Data for Chemicals, Dyes & Solvents
const chemicalItems = [
  { name: "Iron Phosphate", image: "/image/default-category.png" },
  { name: "Red Iron Oxides", image: "/image/default-category.png" },
  { name: "Ketonic Resin", image: "/image/default-category.png" },
  { name: "Eugenol", image: "/image/default-category.png" },
  { name: "Poly Aluminium Chloride", image: "/image/default-category.png" },
  { name: "Methacrylic Acid", image: "/image/default-category.png" },
];

export default function CategorySectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* SECTION 1: Packaging Machines & Goods */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
          Packaging Machines & Goods
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {packagingItems.map((item, index) => (
            <Link
              key={index}
              href="/categories"
              className="bg-white rounded-xl border border-gray-200/90 p-4 flex flex-col items-center justify-between hover:shadow-md hover:border-blue-400 transition-all duration-200 group cursor-pointer"
            >
              <div className="w-full h-32 bg-gray-50 rounded-lg flex items-center justify-center mb-3 overflow-hidden border border-gray-100 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 text-center line-clamp-2 group-hover:text-blue-600">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 2: Chemicals, Dyes & Solvents */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
          Chemicals, Dyes & Solvents
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {chemicalItems.map((item, index) => (
            <Link
              key={index}
              href="/categories"
              className="bg-white rounded-xl border border-gray-200/90 p-4 flex flex-col items-center justify-between hover:shadow-md hover:border-blue-400 transition-all duration-200 group cursor-pointer"
            >
              <div className="w-full h-32 bg-gray-50 rounded-lg flex items-center justify-center mb-3 overflow-hidden border border-gray-100 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 text-center line-clamp-2 group-hover:text-blue-600">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FaChevronRight } from "react-icons/fa";

// // Mock Data for Packaging Machines & Goods
// const packagingItems = [
//   { name: "Masking Tapes", image: "/image/default-category.png" },
//   { name: "TPU Film", image: "/image/default-category.png" },
//   { name: "Gloss Lamination Film", image: "/image/default-category.png" },
//   { name: "Foam Strip", image: "/image/default-category.png" },
//   { name: "Cam Buckles", image: "/image/default-category.png" },
//   { name: "Folding PP Boxes", image: "/image/default-category.png" },
// ];

// // Mock Data for Chemicals, Dyes & Solvents
// const chemicalItems = [
//   { name: "Iron Phosphate", image: "/image/default-category.png" },
//   { name: "Red Iron Oxides", image: "/image/default-category.png" },
//   { name: "Ketonic Resin", image: "/image/default-category.png" },
//   { name: "Eugenol", image: "/image/default-category.png" },
//   { name: "Poly Aluminium Chloride", image: "/image/default-category.png" },
//   { name: "Methacrylic Acid", image: "/image/default-category.png" },
// ];

// export default function CategorySectionsPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
//       {/* SECTION 1: Packaging Machines & Goods */}
//       <section className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-5">
//         <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//           <div className="flex items-center gap-3">
//             <span className="w-1.5 h-6 rounded-full bg-blue-600" />
//             <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
//               Packaging Machines & Goods
//             </h2>
//           </div>
//           <Link
//             href="/categories"
//             className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
//           >
//             View All <FaChevronRight className="text-[10px]" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//           {packagingItems.map((item, index) => (
//             <Link
//               key={index}
//               href="/categories"
//               className="group bg-white rounded-2xl border border-slate-200/80 p-3.5 flex flex-col items-center justify-between hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
//             >
//               <div className="w-full h-32 bg-slate-50/80 group-hover:bg-blue-50/30 rounded-xl flex items-center justify-center mb-3 overflow-hidden border border-slate-100 relative transition-colors duration-300">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   sizes="(max-width: 768px) 50vw, 16vw"
//                   className="object-contain p-3 group-hover:scale-108 transition-transform duration-300"
//                 />
//               </div>
//               <h3 className="text-xs sm:text-sm font-bold text-slate-800 text-center line-clamp-2 group-hover:text-blue-600 transition-colors">
//                 {item.name}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 2: Chemicals, Dyes & Solvents */}
//       <section className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-5">
//         <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//           <div className="flex items-center gap-3">
//             <span className="w-1.5 h-6 rounded-full bg-blue-600" />
//             <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
//               Chemicals, Dyes & Solvents
//             </h2>
//           </div>
//           <Link
//             href="/categories"
//             className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
//           >
//             View All <FaChevronRight className="text-[10px]" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//           {chemicalItems.map((item, index) => (
//             <Link
//               key={index}
//               href="/categories"
//               className="group bg-white rounded-2xl border border-slate-200/80 p-3.5 flex flex-col items-center justify-between hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
//             >
//               <div className="w-full h-32 bg-slate-50/80 group-hover:bg-blue-50/30 rounded-xl flex items-center justify-center mb-3 overflow-hidden border border-slate-100 relative transition-colors duration-300">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   sizes="(max-width: 768px) 50vw, 16vw"
//                   className="object-contain p-3 group-hover:scale-108 transition-transform duration-300"
//                 />
//               </div>
//               <h3 className="text-xs sm:text-sm font-bold text-slate-800 text-center line-clamp-2 group-hover:text-blue-600 transition-colors">
//                 {item.name}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }