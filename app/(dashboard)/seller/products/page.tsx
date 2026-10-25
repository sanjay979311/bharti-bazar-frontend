



// "use client";

// import React, { useState } from "react";
// import { 
//   FiPlus, FiCamera, FiZap, FiSearch, FiEdit2, 
//   FiVideo, FiFileText, FiMoreVertical, FiChevronDown, FiChevronUp, FiX,
//   FiBold, FiItalic, FiList, FiRotateCcw, FiRotateCw, FiTrash2, FiCheck, FiArrowLeft
// } from "react-icons/fi";

// // Seller Add Product Components Imports
// import AddProductHeader from "@/components/seller/products/add/AddProductHeader";
// import StepNavigation from "@/components/seller/products/add/StepNavigation";
// import MediaUploader from "@/components/seller/products/add/MediaUploader";
// import BasicDetailsForm from "@/components/seller/products/add/BasicDetailsForm";
// import SpecificationsForm from "@/components/seller/products/add/SpecificationsForm";
// import RightScoreSidebar from "@/components/seller/products/add/RightScoreSidebar";

// // Product & Specification Type Definition
// interface Specification {
//   key: string;
//   value: string;
// }

// interface Product {
//   id: number;
//   title: string;
//   displayTitle: string;
//   price: string;
//   unit: string;
//   category: string;
//   description: string;
//   group: string;
//   score: number;
//   status: "Active" | "Inactive";
//   modifiedAt: Date;
//   images: string[];
//   specifications: Specification[];
//   missingSpecs: string[];
// }

// interface ActivePopoverState {
//   type: "NAME" | "PRICE" | "DESC" | "IMAGES" | "SPECS" | null;
//   productId: number | null;
// }

// const initialProducts: Product[] = [
//   {
//     id: 1,
//     title: "Paints",
//     displayTitle: "Paints",
//     price: "500",
//     unit: "Piece",
//     category: "Paints",
//     description: "High quality wall paint for interior and exterior finish.",
//     group: "paint",
//     score: 40,
//     status: "Active",
//     modifiedAt: new Date("2026-10-18T10:00:00"),
//     images: [
//       "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=300",
//       "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=300"
//     ],
//     specifications: [
//       { key: "Material", value: "Acrylic" },
//       { key: "Finish", value: "Glossy" }
//     ],
//     missingSpecs: ["Paint Type", "Application Area", "Base Type", "Pack Size", "Shade"],
//   },
//   {
//     id: 2,
//     title: "Web Designing Services",
//     displayTitle: "Web Designing Services",
//     price: "10000",
//     unit: "Piece",
//     category: "IT Services",
//     description: "Responsive web designing and development services.",
//     group: "Services",
//     score: 25,
//     status: "Active",
//     modifiedAt: new Date("2026-10-15T08:00:00"),
//     images: [
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300"
//     ],
//     specifications: [
//       { key: "Tech Stack", value: "React & Node.js" },
//       { key: "Duration", value: "2 Weeks" }
//     ],
//     missingSpecs: ["Service Location", "Support Period"],
//   },
// ];

// const categoriesList = [
//   { name: "Paints", sub: "Paints, Wall Putty, Distemper, Lacquer & Varnishes", alt: "Special Purpose Paints", relevant: true },
//   { name: "Acrylic Exterior Emulsion Paint", sub: "Paints, Wall Putty, Distemper, Lacquer & Varnishes", alt: "Exterior Acrylic Emulsion Paint" },
//   { name: "Berger Emulsion Paints", sub: "Paints, Wall Putty, Distemper, Lacquer & Varnishes", alt: "Berger Weather Coat Paint" },
//   { name: "Eco Friendly Paint", sub: "Paints, Wall Putty, Distemper, Lacquer & Varnishes", alt: "Low Voc Paints, Zero Voc Paints" }
// ];

// export default function ProfessionalProductList() {
//   // Toggle State for Add/Edit Product Multi-step Form View
//   const [isAdding, setIsAdding] = useState<boolean>(false);
//   const [currentStep, setCurrentStep] = useState<number>(1);

//   // Add Product Form Data State
//   const [addProductFormData, setAddProductFormData] = useState({
//     name: "",
//     price: "",
//     unit: "Piece",
//     description: "",
//   });

//   // Product List States
//   const [products, setProducts] = useState<Product[]>(initialProducts);
  
//   // Sorting Dropdown State
//   const [sortBy, setSortBy] = useState<string>("Recent Modified");
//   const [showSortMenu, setShowSortMenu] = useState<boolean>(false);
  
//   // 3-Dot Action Menu State
//   const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  
//   // Inline Popovers & Category Modal
//   const [activePopover, setActivePopover] = useState<ActivePopoverState>({ type: null, productId: null });
//   const [categoryModalProduct, setCategoryModalProduct] = useState<Product | null>(null);

//   // Temporary Edit States
//   const [nameData, setNameData] = useState({ title: "", displayTitle: "" });
//   const [priceData, setPriceData] = useState({ price: "", unit: "" });
//   const [descData, setDescData] = useState<string>("");
//   const [tempImages, setTempImages] = useState<string[]>([]);
//   const [tempSpecs, setTempSpecs] = useState<Specification[]>([]);
  
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

//   // Score Calculation for Add Product Form
//   const calculateScore = () => {
//     let score = 0;
//     if (addProductFormData.name) score += 30;
//     if (addProductFormData.price) score += 20;
//     if (addProductFormData.description) score += 20;
//     if (currentStep === 2) score += 30;
//     return score;
//   };

//   const handleFinalSave = () => {
//     alert("Product saved successfully!");
//     setIsAdding(false);
//   };

//   // Open Full Add/Edit Form for a Specific Product
//   const handleEditProductInForm = (product: Product) => {
//     setAddProductFormData({
//       name: product.title,
//       price: product.price,
//       unit: product.unit,
//       description: product.description,
//     });
//     setCurrentStep(1);
//     setIsAdding(true);
//     setActiveMenuId(null);
//   };

//   // Toggle Popovers / Modals for Inline List Edits
//   const togglePopover = (type: "NAME" | "PRICE" | "DESC" | "IMAGES" | "SPECS", product: Product) => {
//     if (activePopover.type === type && activePopover.productId === product.id) {
//       setActivePopover({ type: null, productId: null });
//       return;
//     }

//     if (type === "NAME") {
//       setNameData({ title: product.title, displayTitle: product.displayTitle || product.title });
//     } else if (type === "PRICE") {
//       setPriceData({ price: product.price, unit: product.unit });
//     } else if (type === "DESC") {
//       setDescData(product.description || "");
//     } else if (type === "IMAGES") {
//       setTempImages([...product.images]);
//     } else if (type === "SPECS") {
//       setTempSpecs([...product.specifications]);
//     }

//     setActivePopover({ type, productId: product.id });
//     setActiveMenuId(null);
//   };

//   const openCategoryModal = (product: Product) => {
//     setCategoryModalProduct(product);
//     setSelectedCategories([product.category]);
//     setActiveMenuId(null);
//   };

//   // Save Handlers for Product List
//   const handleSaveName = (id: number) => {
//     setProducts(prev => prev.map(p => p.id === id ? {
//       ...p, title: nameData.title, displayTitle: nameData.displayTitle, modifiedAt: new Date()
//     } : p));
//     setActivePopover({ type: null, productId: null });
//   };

//   const handleSavePrice = (id: number) => {
//     setProducts(prev => prev.map(p => p.id === id ? {
//       ...p, price: priceData.price, unit: priceData.unit, modifiedAt: new Date()
//     } : p));
//     setActivePopover({ type: null, productId: null });
//   };

//   const handleSaveDesc = (id: number) => {
//     setProducts(prev => prev.map(p => p.id === id ? {
//       ...p, description: descData, modifiedAt: new Date()
//     } : p));
//     setActivePopover({ type: null, productId: null });
//   };

//   const handleSaveImages = (id: number) => {
//     setProducts(prev => prev.map(p => p.id === id ? {
//       ...p, images: tempImages, modifiedAt: new Date()
//     } : p));
//     setActivePopover({ type: null, productId: null });
//   };

//   const handleSaveSpecs = (id: number) => {
//     setProducts(prev => prev.map(p => p.id === id ? {
//       ...p, specifications: tempSpecs, modifiedAt: new Date()
//     } : p));
//     setActivePopover({ type: null, productId: null });
//   };

//   const handleSaveCategory = () => {
//     if (!categoryModalProduct || selectedCategories.length === 0) return;
//     setProducts(prev => prev.map(p => p.id === categoryModalProduct.id ? {
//       ...p, category: selectedCategories[0], modifiedAt: new Date()
//     } : p));
//     setCategoryModalProduct(null);
//   };

//   const handleToggleStatus = (id: number) => {
//     setProducts(prev => prev.map(p => p.id === id ? {
//       ...p, status: p.status === "Active" ? "Inactive" : "Active"
//     } : p));
//     setActiveMenuId(null);
//   };

//   // =========================================================================
//   // CONDITION 1: ADD / EDIT PRODUCT FORM VIEW (Triggered on "+ Add Product" or "Edit")
//   // =========================================================================
//   if (isAdding) {
//     return (
//       <div className="min-h-screen bg-[var(--color-surface-light,#f8fafc)] p-3 sm:p-6 font-sans">
//         <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6">
          
//           {/* Top Bar with Back Button */}
//           <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
//             <button 
//               onClick={() => setIsAdding(false)}
//               className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg cursor-pointer transition-colors"
//             >
//               <FiArrowLeft className="text-sm" /> Back to Products List
//             </button>
//             <span className="text-xs text-slate-400 font-medium">Adding / Editing Product</span>
//           </div>

//           {/* Top Header Component */}
//           <AddProductHeader />

//           {/* 2 Column Layout: Form Left (9 Cols), Score Sidebar Right (3 Cols) */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            
//             {/* Main Content Area */}
//             <div className="lg:col-span-9 space-y-4">
              
//               {/* Step Navigation Tabs */}
//               <StepNavigation
//                 currentStep={currentStep}
//                 setStep={setCurrentStep}
//               />

//               {/* Step 1: Basic Details Layout */}
//               {currentStep === 1 && (
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
//                   {/* Left Side Image Upload */}
//                   <div className="md:col-span-5">
//                     <MediaUploader />
//                   </div>

//                   {/* Right Side Form Fields */}
//                   <div className="md:col-span-7">
//                     <BasicDetailsForm
//                       formData={addProductFormData}
//                       setFormData={setAddProductFormData}
//                       onContinue={() => setCurrentStep(2)}
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Step 2: Specifications Layout */}
//               {currentStep === 2 && (
//                 <SpecificationsForm
//                   onSave={handleFinalSave}
//                   onBack={() => setCurrentStep(1)}
//                 />
//               )}

//             </div>

//             {/* Right Side Score Sidebar */}
//             <div className="lg:col-span-3">
//               <RightScoreSidebar
//                 score={calculateScore()}
//                 currentStep={currentStep}
//               />
//             </div>

//           </div>

//         </div>
//       </div>
//     );
//   }

//   // =========================================================================
//   // CONDITION 2: MAIN ADVANCED PRODUCT LIST VIEW
//   // =========================================================================
//   return (
//     <div className="min-h-screen bg-[#f8fafc] p-3 sm:p-4 md:p-6 font-sans text-slate-800">
//       <div className="max-w-7xl mx-auto space-y-4">

//         {/* Top Header Controls */}
//         <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border border-slate-200">
//           <div className="border-b-2 border-[#2563eb] pb-1 font-semibold text-[#2563eb] text-sm">
//             Active ({products.filter(p => p.status === "Active").length})
//           </div>

//           <div className="flex flex-wrap items-center gap-2">
//             <button 
//               onClick={() => {
//                 setAddProductFormData({ name: "", price: "", unit: "Piece", description: "" });
//                 setCurrentStep(1);
//                 setIsAdding(true);
//               }}
//               className="flex items-center gap-1 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer transition-colors shadow-xs"
//             >
//               <FiPlus className="text-base" /> Add Product
//             </button>
//             <button className="flex items-center gap-1 border border-teal-600 text-teal-700 hover:bg-teal-50 text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer">
//               <FiCamera className="text-base" /> Add by Photo
//             </button>
//             <button className="flex items-center gap-1 bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer">
//               <FiZap className="text-base" /> Quick Add
//             </button>

//             <div className="relative">
//               <FiSearch className="absolute left-2.5 top-2.5 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="Search Products"
//                 className="w-44 md:w-56 pl-8 pr-3 py-1.5 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Filter Badges & Sorting Row */}
//         <div className="bg-white rounded-lg border border-slate-200 px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-xs shadow-xs">
//           <div className="flex flex-wrap items-center gap-2 sm:gap-3">
//             <button className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-200 font-semibold text-slate-800 border border-slate-300">
//               All Products ({products.length}) <FiChevronDown />
//             </button>
//             <span className="text-[#dc2626] cursor-pointer font-medium hover:underline">Incorrect Price (2)</span>
//             <span className="text-slate-600 cursor-pointer hover:underline">Low Score (4)</span>
//             <span className="text-slate-600 cursor-pointer hover:underline">No Specifications (1)</span>
//             <span className="text-slate-600 cursor-pointer hover:underline">No Descriptions (3)</span>
//           </div>

//           {/* MISSING ITEM 1: SORTING DROPDOWN (Image 2) */}
//           <div className="relative">
//             <button 
//               onClick={() => setShowSortMenu(!showSortMenu)}
//               className="flex items-center gap-1.5 border border-slate-300 bg-white text-slate-700 px-3 py-1.5 rounded-md hover:bg-slate-50 cursor-pointer shadow-2xs font-medium"
//             >
//               <span>⇅</span> {sortBy} {showSortMenu ? <FiChevronUp className="text-slate-400" /> : <FiChevronDown className="text-slate-400" />}
//             </button>

//             {showSortMenu && (
//               <div className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 shadow-xl rounded-lg z-50 py-1.5 text-xs">
//                 {[
//                   "Recent Modified",
//                   "Oldest Modified",
//                   "Score: High to low",
//                   "Score: Low to high"
//                 ].map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => {
//                       setSortBy(option);
//                       setShowSortMenu(false);
//                     }}
//                     className={`w-full text-left px-4 py-2 hover:bg-slate-100 cursor-pointer font-medium ${
//                       sortBy === option ? "text-slate-900 font-bold bg-slate-50" : "text-slate-700"
//                     }`}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Product Cards List */}
//         <div className="space-y-4">
//           {products.map((product) => (
//             <div 
//               key={product.id} 
//               className={`bg-white rounded-lg shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-12 relative ${product.status === "Inactive" ? "opacity-60" : ""}`}
//             >
//               {/* Column 1: Multi-Image Uploader / Gallery */}
//               <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-slate-200 p-2 flex flex-col justify-between">
//                 <div className="flex gap-2">
//                   <div className="flex flex-col gap-1.5">
//                     {product.images.map((img, idx) => (
//                       <div key={idx} className="w-8 h-8 border border-slate-300 rounded overflow-hidden relative group cursor-pointer" onClick={() => togglePopover("IMAGES", product)}>
//                         <img src={img} alt="thumb" className="w-full h-full object-cover" />
//                       </div>
//                     ))}
//                     <button 
//                       onClick={() => togglePopover("IMAGES", product)}
//                       className="w-8 h-8 border border-dashed border-[#2563eb] text-[#2563eb] rounded flex items-center justify-center text-[10px] hover:bg-blue-50 cursor-pointer"
//                       title="Add/Manage Photos"
//                     >
//                       <FiCamera />
//                     </button>
//                   </div>

//                   <div 
//                     onClick={() => togglePopover("IMAGES", product)}
//                     className="flex-1 bg-slate-50 border border-slate-200 rounded flex items-center justify-center relative overflow-hidden min-h-[140px] cursor-pointer hover:border-blue-400 group"
//                   >
//                     <img src={product.images[0] || "https://via.placeholder.com/250x180"} alt={product.title} className="max-h-36 object-contain" />
//                     <span className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold transition-opacity">
//                       Edit Images
//                     </span>
//                   </div>
//                 </div>

//                 {/* Popover / Modal for Multi-Image Uploader */}
//                 {activePopover.type === "IMAGES" && activePopover.productId === product.id && (
//                   <div className="absolute left-0 top-0 z-50 bg-white border border-slate-300 shadow-2xl rounded-lg p-4 w-full md:w-96 text-xs">
//                     <div className="flex justify-between items-center mb-3 border-b pb-2">
//                       <h4 className="font-bold text-slate-800">Manage Product Images & Crop</h4>
//                       <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-400 hover:text-slate-600">
//                         <FiX className="text-base" />
//                       </button>
//                     </div>

//                     <div className="grid grid-cols-3 gap-2 mb-3">
//                       {tempImages.map((img, idx) => (
//                         <div key={idx} className="relative h-20 border rounded bg-slate-50 overflow-hidden flex items-center justify-center">
//                           <img src={img} alt="upload" className="h-full object-cover" />
//                           <button 
//                             onClick={() => setTempImages(tempImages.filter((_, i) => i !== idx))}
//                             className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full text-[10px]"
//                           >
//                             <FiTrash2 />
//                           </button>
//                         </div>
//                       ))}
//                       <label className="h-20 border border-dashed border-blue-500 text-blue-600 rounded flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50">
//                         <FiPlus className="text-lg" />
//                         <span className="text-[10px]">Add Image</span>
//                         <input 
//                           type="file" 
//                           className="hidden" 
//                           onChange={(e) => {
//                             if (e.target.files?.[0]) {
//                               const url = URL.createObjectURL(e.target.files[0]);
//                               setTempImages([...tempImages, url]);
//                             }
//                           }} 
//                         />
//                       </label>
//                     </div>

//                     <div className="flex justify-end gap-2">
//                       <button onClick={() => setActivePopover({ type: null, productId: null })} className="px-3 py-1 border rounded">Cancel</button>
//                       <button onClick={() => handleSaveImages(product.id)} className="px-3 py-1 bg-blue-600 text-white rounded font-medium">Save Photos</button>
//                     </div>
//                   </div>
//                 )}

//                 <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-100 text-center">
//                   <button className="flex items-center justify-center gap-1 p-1 border border-slate-200 rounded text-[10px] text-slate-600 hover:bg-slate-50 cursor-pointer">
//                     <FiVideo className="text-slate-400" /> Add Video
//                   </button>
//                   <button className="flex items-center justify-center gap-1 p-1 border border-slate-200 rounded text-[10px] text-slate-600 hover:bg-slate-50 cursor-pointer">
//                     <FiFileText className="text-slate-400" /> Add PDF
//                   </button>
//                 </div>
//               </div>

//               {/* Column 2: Details & Inline Popovers */}
//               <div className="md:col-span-5 p-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
//                 <div className="space-y-3">
                  
//                   {/* Name Field */}
//                   <div className="relative">
//                     <div className="flex items-center gap-2">
//                       <h2 className="text-base font-bold text-slate-900">{product.title}</h2>
//                       <button onClick={() => togglePopover("NAME", product)} className="text-slate-400 hover:text-[#2563eb] cursor-pointer">
//                         <FiEdit2 className="text-xs" />
//                       </button>
//                     </div>

//                     {activePopover.type === "NAME" && activePopover.productId === product.id && (
//                       <div className="absolute left-0 top-7 z-40 bg-white border border-slate-300 shadow-xl rounded-md p-4 w-72 text-xs space-y-3">
//                         <div>
//                           <label className="text-slate-600 block mb-1 font-medium">Product Name</label>
//                           <input
//                             type="text"
//                             value={nameData.title}
//                             onChange={(e) => setNameData({ ...nameData, title: e.target.value })}
//                             className="w-full p-2 border border-slate-400 rounded bg-white"
//                           />
//                         </div>
//                         <div className="flex justify-end gap-2">
//                           <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-600">Cancel</button>
//                           <button onClick={() => handleSaveName(product.id)} className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Price Field */}
//                   <div className="relative">
//                     <div className="flex items-center gap-1 text-sm font-semibold text-slate-800">
//                       <span>₹ {product.price}</span>
//                       <span className="text-slate-500 text-xs font-normal">/{product.unit}</span>
//                       <button onClick={() => togglePopover("PRICE", product)} className="text-slate-400 hover:text-[#2563eb] ml-1 cursor-pointer">
//                         <FiEdit2 className="text-xs" />
//                       </button>
//                     </div>

//                     {activePopover.type === "PRICE" && activePopover.productId === product.id && (
//                       <div className="absolute left-0 top-7 z-40 bg-white border border-slate-300 shadow-xl rounded-md p-4 w-60 text-xs space-y-2">
//                         <div className="flex rounded border border-slate-400 bg-white overflow-hidden">
//                           <span className="bg-slate-100 px-2 py-1.5 font-bold">₹</span>
//                           <input
//                             type="number"
//                             value={priceData.price}
//                             onChange={(e) => setPriceData({ ...priceData, price: e.target.value })}
//                             className="w-full p-1.5 focus:outline-none"
//                           />
//                         </div>
//                         <select
//                           value={priceData.unit}
//                           onChange={(e) => setPriceData({ ...priceData, unit: e.target.value })}
//                           className="w-full p-1.5 border border-slate-300 rounded bg-white"
//                         >
//                           <option value="Piece">Piece</option>
//                           <option value="Kg">Kg</option>
//                           <option value="Liter">Liter</option>
//                           <option value="Set">Set</option>
//                         </select>
//                         <div className="flex justify-end gap-2 mt-2">
//                           <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-600">Cancel</button>
//                           <button onClick={() => handleSavePrice(product.id)} className="bg-blue-600 text-white px-3 py-1 rounded">Update</button>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Category Field */}
//                   <div className="flex items-center gap-2 text-xs">
//                     <span className="text-slate-500">Category</span>
//                     <span className="bg-[#eef2ff] border border-[#e0e7ff] px-2 py-0.5 rounded-full text-[#1e3a8a]">
//                       {product.category}
//                     </span>
//                     <button onClick={() => openCategoryModal(product)} className="text-[#2563eb] font-semibold hover:underline flex items-center gap-0.5 cursor-pointer">
//                       <FiPlus /> Change
//                     </button>
//                   </div>

//                   {/* Description Field */}
//                   <div className="relative text-xs">
//                     <div className="flex items-center gap-2">
//                       <span className="text-slate-500">Description</span>
//                       <button onClick={() => togglePopover("DESC", product)} className="text-slate-400 hover:text-[#2563eb] cursor-pointer">
//                         <FiEdit2 className="text-[10px]" />
//                       </button>
//                     </div>
//                     <p className="text-slate-700 mt-0.5 line-clamp-2">{product.description || "N/A"}</p>

//                     {activePopover.type === "DESC" && activePopover.productId === product.id && (
//                       <div className="absolute left-0 top-6 z-40 bg-white border border-slate-300 shadow-xl rounded-md p-3 w-72 text-xs space-y-2">
//                         <textarea
//                           value={descData}
//                           onChange={(e) => setDescData(e.target.value)}
//                           rows={4}
//                           className="w-full p-2 border rounded focus:outline-none"
//                         />
//                         <div className="flex justify-end gap-2">
//                           <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-600">Cancel</button>
//                           <button onClick={() => handleSaveDesc(product.id)} className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Group Tag */}
//                   <div className="flex items-center gap-2 text-xs">
//                     <span className="text-slate-500">Group</span>
//                     <span className="border border-slate-200 px-2 py-0.5 rounded-md text-slate-700 bg-slate-50">
//                       {product.group}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Column 3: Specifications & Score Section */}
//               <div className="md:col-span-4 p-4 flex flex-col justify-between bg-white relative">
//                 <div className="flex justify-between items-start gap-2 mb-2">
                  
//                   {/* Score Circle Indicator */}
//                   <div className="w-10 h-10 rounded-full border-2 border-teal-500 flex flex-col items-center justify-center bg-teal-50">
//                     <span className="text-xs font-bold text-teal-800 leading-none">{product.score}</span>
//                     <span className="text-[8px] text-teal-600">Score</span>
//                   </div>
                  
//                   {/* MISSING ITEM 2: 3-DOT ACTION POPOVER MENU (Image 1) */}
//                   <div className="relative">
//                     <button 
//                       onClick={() => setActiveMenuId(activeMenuId === product.id ? null : product.id)} 
//                       className="p-1.5 text-slate-500 hover:text-slate-800 rounded-md cursor-pointer hover:bg-slate-100"
//                     >
//                       <FiMoreVertical className="text-lg" />
//                     </button>

//                     {activeMenuId === product.id && (
//                       <div className="absolute right-0 top-7 w-32 bg-white border border-slate-200 shadow-xl rounded-lg z-50 py-1.5 text-xs">
//                         <button 
//                           onClick={() => handleEditProductInForm(product)} 
//                           className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-800 font-medium cursor-pointer"
//                         >
//                           Edit
//                         </button>
//                         <button 
//                           onClick={() => handleToggleStatus(product.id)} 
//                           className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-800 font-medium cursor-pointer"
//                         >
//                           {product.status === "Active" ? "Deactivate" : "Activate"}
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Specifications Section */}
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between text-xs">
//                     <span className="text-slate-500 font-semibold">Technical Specifications</span>
//                     <button 
//                       onClick={() => togglePopover("SPECS", product)}
//                       className="text-blue-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
//                     >
//                       <FiPlus /> Add/Edit Specification
//                     </button>
//                   </div>

//                   <div className="flex flex-wrap gap-1.5">
//                     {product.specifications.map((spec, idx) => (
//                       <span key={idx} className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
//                         {spec.key}: <strong className="text-slate-900">{spec.value}</strong>
//                       </span>
//                     ))}
//                     {product.specifications.length === 0 && (
//                       <span className="text-xs text-slate-400 italic">No specifications added yet.</span>
//                     )}
//                   </div>

//                   {/* Popover / Form for Specifications Editing */}
//                   {activePopover.type === "SPECS" && activePopover.productId === product.id && (
//                     <div className="absolute right-0 top-12 z-50 bg-white border border-slate-300 shadow-2xl rounded-lg p-4 w-full md:w-[420px] text-xs space-y-3">
//                       <div className="flex justify-between items-center border-b pb-2">
//                         <h4 className="font-bold text-slate-800">Add Technical Specifications</h4>
//                         <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-400 hover:text-slate-600">
//                           <FiX className="text-base" />
//                         </button>
//                       </div>

//                       <div className="space-y-2 max-h-60 overflow-y-auto">
//                         {tempSpecs.map((spec, idx) => (
//                           <div key={idx} className="flex items-center gap-2">
//                             <input
//                               type="text"
//                               value={spec.key}
//                               onChange={(e) => {
//                                 const updated = [...tempSpecs];
//                                 updated[idx].key = e.target.value;
//                                 setTempSpecs(updated);
//                               }}
//                               placeholder="Specification Name"
//                               className="w-1/2 p-2 border rounded bg-white"
//                             />
//                             <input
//                               type="text"
//                               value={spec.value}
//                               onChange={(e) => {
//                                 const updated = [...tempSpecs];
//                                 updated[idx].value = e.target.value;
//                                 setTempSpecs(updated);
//                               }}
//                               placeholder="Specification Value"
//                               className="w-1/2 p-2 border rounded bg-white"
//                             />
//                             <button 
//                               onClick={() => setTempSpecs(tempSpecs.filter((_, i) => i !== idx))}
//                               className="text-red-500 hover:text-red-700 p-1"
//                             >
//                               <FiTrash2 />
//                             </button>
//                           </div>
//                         ))}

//                         <button 
//                           onClick={() => setTempSpecs([...tempSpecs, { key: "", value: "" }])}
//                           className="text-blue-600 font-semibold hover:underline flex items-center gap-1 mt-1"
//                         >
//                           <FiPlus /> Add Specification
//                         </button>
//                       </div>

//                       <div className="flex justify-end gap-2 pt-2 border-t">
//                         <button onClick={() => setActivePopover({ type: null, productId: null })} className="px-3 py-1.5 border rounded">Cancel</button>
//                         <button onClick={() => handleSaveSpecs(product.id)} className="px-4 py-1.5 bg-orange-500 text-white rounded font-medium hover:bg-orange-600">Save Specifications</button>
//                       </div>
//                     </div>
//                   )}

//                   {/* Missing Specs Tags */}
//                   <div className="pt-2">
//                     <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold mb-1">
//                       ⚠️ {product.missingSpecs.length} missing specs
//                     </div>
//                     <div className="flex flex-wrap gap-1">
//                       {product.missingSpecs.map((spec, idx) => (
//                         <span key={idx} className="text-[10px] border border-dashed border-orange-400 text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full">
//                           + {spec}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>

//       {/* Category Selection Modal */}
//       {categoryModalProduct && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-3">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-xl p-5 border border-slate-200">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="text-sm font-semibold text-slate-800">Select Category For "{categoryModalProduct.title}"</h3>
//               <button onClick={() => setCategoryModalProduct(null)} className="text-slate-400 hover:text-slate-600">
//                 <FiX className="text-base" />
//               </button>
//             </div>

//             <div className="space-y-2 max-h-60 overflow-y-auto mb-4">
//               {categoriesList.map((cat, i) => (
//                 <div 
//                   key={i} 
//                   onClick={() => setSelectedCategories([cat.name])}
//                   className={`p-2.5 rounded border flex items-center gap-3 cursor-pointer ${selectedCategories.includes(cat.name) ? 'bg-blue-50 border-blue-600' : 'border-slate-200 hover:bg-slate-50'}`}
//                 >
//                   <input type="radio" checked={selectedCategories.includes(cat.name)} onChange={() => {}} />
//                   <div className="text-xs">
//                     <div className="font-bold text-blue-700">{cat.name}</div>
//                     <div className="text-slate-500 text-[10px]">{cat.sub}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-end gap-2">
//               <button onClick={() => setCategoryModalProduct(null)} className="px-4 py-1.5 text-xs border rounded">Cancel</button>
//               <button onClick={handleSaveCategory} className="px-4 py-1.5 text-xs bg-blue-600 text-white rounded font-medium">Save Category</button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }




"use client";

import React, { useState } from "react";
import { 
  FiPlus, FiCamera, FiZap, FiSearch, FiEdit, 
  FiVideo, FiFileText, FiMoreVertical, FiChevronDown, FiChevronUp, FiX,
  FiTrash2, FiArrowLeft
} from "react-icons/fi";

// Seller Add Product Components Imports
import AddProductHeader from "@/components/seller/products/add/AddProductHeader";
import StepNavigation from "@/components/seller/products/add/StepNavigation";
import MediaUploader from "@/components/seller/products/add/MediaUploader";
import BasicDetailsForm from "@/components/seller/products/add/BasicDetailsForm";
import SpecificationsForm from "@/components/seller/products/add/SpecificationsForm";
import RightScoreSidebar from "@/components/seller/products/add/RightScoreSidebar";

// Custom SVG Icon for Image Edit Overlay (Text removed completely)
const CustomEditExpandIcon = ({ className = "w-5 h-5", stroke = "currentColor" }: { className?: string, stroke?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    className={className}
  >
    <path 
      d="M15 19H19M19 19V15M19 19L15 15M9 5H5M5 5V9M5 5L9 9" 
      stroke={stroke} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2"
    />
    <path 
      d="M15 5H19M19 5V9M19 5L15 9M9 19H5M5 19V15M5 19L9 15" 
      stroke={stroke} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2"
    />
  </svg>
);

interface Specification {
  key: string;
  value: string;
}

interface Product {
  id: number;
  title: string;
  displayTitle: string;
  price: string;
  unit: string;
  category: string;
  description: string;
  group: string;
  score: number;
  status: "Active" | "Inactive";
  modifiedAt: Date;
  images: string[];
  specifications: Specification[];
  missingSpecs: string[];
}

interface ActivePopoverState {
  type: "NAME" | "PRICE" | "DESC" | "IMAGES" | null;
  productId: number | null;
}

const initialProducts: Product[] = [
  {
    id: 1,
    title: "Paints",
    displayTitle: "Paints",
    price: "500",
    unit: "Piece",
    category: "Paints",
    description: "High quality wall paint for interior and exterior finish.",
    group: "paint",
    score: 40,
    status: "Active",
    modifiedAt: new Date("2026-10-18T10:00:00"),
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=300"
    ],
    specifications: [
      { key: "Material", value: "Acrylic" },
      { key: "Finish", value: "Glossy" }
    ],
    missingSpecs: ["Paint Type", "Application Area", "Base Type", "Pack Size", "Shade"],
  },
  {
    id: 2,
    title: "Web Designing Services",
    displayTitle: "Web Designing Services",
    price: "10000",
    unit: "Piece",
    category: "IT Services",
    description: "Responsive web designing and development services.",
    group: "Services",
    score: 25,
    status: "Active",
    modifiedAt: new Date("2026-10-15T08:00:00"),
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300"
    ],
    specifications: [
      { key: "Tech Stack", value: "React & Node.js" },
      { key: "Duration", value: "2 Weeks" }
    ],
    missingSpecs: ["Service Location", "Support Period"],
  },
];

const categoriesList = [
  { name: "Paints", sub: "Paints, Wall Putty, Distemper, Lacquer & Varnishes", alt: "Special Purpose Paints", relevant: true },
  { name: "Acrylic Exterior Emulsion Paint", sub: "Paints, Wall Putty, Distemper, Lacquer & Varnishes", alt: "Exterior Acrylic Emulsion Paint" },
  { name: "Berger Emulsion Paints", sub: "Paints, Wall Putty, Distemper, Lacquer & Varnishes", alt: "Berger Weather Coat Paint" },
  { name: "Eco Friendly Paint", sub: "Paints, Wall Putty, Distemper, Lacquer & Varnishes", alt: "Low Voc Paints, Zero Voc Paints" }
];

export default function ProfessionalProductList() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [addProductFormData, setAddProductFormData] = useState({
    name: "",
    price: "",
    unit: "Piece",
    description: "",
  });

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [sortBy, setSortBy] = useState<string>("Recent Modified");
  const [showSortMenu, setShowSortMenu] = useState<boolean>(false);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  
  const [activePopover, setActivePopover] = useState<ActivePopoverState>({ type: null, productId: null });
  const [categoryModalProduct, setCategoryModalProduct] = useState<Product | null>(null);

  const [nameData, setNameData] = useState({ title: "", displayTitle: "" });
  const [priceData, setPriceData] = useState({ price: "", unit: "" });
  const [descData, setDescData] = useState<string>("");
  const [tempImages, setTempImages] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMainImage, setSelectedMainImage] = useState<{ [key: number]: number }>({});

  const calculateScore = () => {
    let score = 0;
    if (addProductFormData.name) score += 30;
    if (addProductFormData.price) score += 20;
    if (addProductFormData.description) score += 20;
    if (currentStep === 2) score += 30;
    return score;
  };

  const handleFinalSave = () => {
    alert("Product saved successfully!");
    setIsAdding(false);
  };

  const handleEditProductInForm = (product: Product) => {
    setAddProductFormData({
      name: product.title,
      price: product.price,
      unit: product.unit,
      description: product.description,
    });
    setCurrentStep(1);
    setIsAdding(true);
    setActiveMenuId(null);
  };

  const togglePopover = (type: "NAME" | "PRICE" | "DESC" | "IMAGES", product: Product) => {
    if (activePopover.type === type && activePopover.productId === product.id) {
      setActivePopover({ type: null, productId: null });
      return;
    }

    if (type === "NAME") {
      setNameData({ title: product.title, displayTitle: product.displayTitle || product.title });
    } else if (type === "PRICE") {
      setPriceData({ price: product.price, unit: product.unit });
    } else if (type === "DESC") {
      setDescData(product.description || "");
    } else if (type === "IMAGES") {
      setTempImages([...product.images]);
    }

    setActivePopover({ type, productId: product.id });
    setActiveMenuId(null);
  };

  const openCategoryModal = (product: Product) => {
    setCategoryModalProduct(product);
    setSelectedCategories([product.category]);
    setActiveMenuId(null);
  };

  const handleSaveName = (id: number) => {
    setProducts(prev => prev.map(p => p.id === id ? {
      ...p, title: nameData.title, displayTitle: nameData.displayTitle, modifiedAt: new Date()
    } : p));
    setActivePopover({ type: null, productId: null });
  };

  const handleSavePrice = (id: number) => {
    setProducts(prev => prev.map(p => p.id === id ? {
      ...p, price: priceData.price, unit: priceData.unit, modifiedAt: new Date()
    } : p));
    setActivePopover({ type: null, productId: null });
  };

  const handleSaveDesc = (id: number) => {
    setProducts(prev => prev.map(p => p.id === id ? {
      ...p, description: descData, modifiedAt: new Date()
    } : p));
    setActivePopover({ type: null, productId: null });
  };

  const handleSaveImages = (id: number) => {
    setProducts(prev => prev.map(p => p.id === id ? {
      ...p, images: tempImages, modifiedAt: new Date()
    } : p));
    setActivePopover({ type: null, productId: null });
  };

  const handleUpdateSpecRow = (productId: number, index: number, field: "key" | "value", val: string) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        const updatedSpecs = [...p.specifications];
        updatedSpecs[index][field] = val;
        return { ...p, specifications: updatedSpecs, modifiedAt: new Date() };
      }
      return p;
    }));
  };

  const handleAddSpecRow = (productId: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return { ...p, specifications: [...p.specifications, { key: "", value: "" }], modifiedAt: new Date() };
      }
      return p;
    }));
  };

  const handleDeleteSpecRow = (productId: number, index: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return { ...p, specifications: p.specifications.filter((_, i) => i !== index), modifiedAt: new Date() };
      }
      return p;
    }));
  };

  const handleSaveCategory = () => {
    if (!categoryModalProduct || selectedCategories.length === 0) return;
    setProducts(prev => prev.map(p => p.id === categoryModalProduct.id ? {
      ...p, category: selectedCategories[0], modifiedAt: new Date()
    } : p));
    setCategoryModalProduct(null);
  };

  const handleToggleStatus = (id: number) => {
    setProducts(prev => prev.map(p => p.id === id ? {
      ...p, status: p.status === "Active" ? "Inactive" : "Active"
    } : p));
    setActiveMenuId(null);
  };

  const handleScrollGallery = (productId: number, direction: "up" | "down") => {
    const el = document.getElementById(`thumb-scroll-${productId}`);
    if (el) {
      el.scrollBy({ top: direction === "down" ? 60 : -60, behavior: "smooth" });
    }
  };

  if (isAdding) {
    return (
      <div className="min-h-screen bg-[var(--color-surface-light)] p-3 sm:p-6 font-sans">
        <div className="max-w-7xl mx-auto bg-[var(--color-surface-card)] rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6">
          
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <button 
              onClick={() => setIsAdding(false)}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg cursor-pointer transition-colors"
            >
              <FiArrowLeft className="text-sm" /> Back to Products List
            </button>
            <span className="text-xs text-slate-400 font-medium">Adding / Editing Product</span>
          </div>

          <AddProductHeader />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            <div className="lg:col-span-9 space-y-4">
              <StepNavigation currentStep={currentStep} setStep={setCurrentStep} />

              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5"><MediaUploader /></div>
                  <div className="md:col-span-7">
                    <BasicDetailsForm
                      formData={addProductFormData}
                      setFormData={setAddProductFormData}
                      onContinue={() => setCurrentStep(2)}
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <SpecificationsForm onSave={handleFinalSave} onBack={() => setCurrentStep(1)} />
              )}
            </div>

            <div className="lg:col-span-3">
              <RightScoreSidebar score={calculateScore()} currentStep={currentStep} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface-light)] p-3 sm:p-4 md:p-6 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-4">

        {/* Top Header Controls */}
        <div className="bg-[var(--color-surface-card)] rounded-xl shadow-xs p-3.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border border-slate-200">
          <div className="border-b-2 border-[var(--color-primary-600)] pb-1 font-semibold text-[var(--color-primary-600)] text-sm">
            Active ({products.filter(p => p.status === "Active").length})
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => {
                setAddProductFormData({ name: "", price: "", unit: "Piece", description: "" });
                setCurrentStep(1);
                setIsAdding(true);
              }}
              className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors shadow-2xs"
            >
              <FiPlus className="text-base" /> Add Product
            </button>
            <button className="flex items-center gap-1.5 border border-teal-600 text-teal-700 hover:bg-teal-50 text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer transition-colors">
              <FiCamera className="text-base" /> Add by Photo
            </button>
            <button className="flex items-center gap-1.5 bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer transition-colors shadow-2xs">
              <FiZap className="text-base" /> Quick Add
            </button>

            <div className="relative">
              <FiSearch className="absolute left-2.5 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search Products"
                className="w-44 md:w-56 pl-8 pr-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-600)] bg-[var(--color-surface-card)]"
              />
            </div>
          </div>
        </div>

        {/* Filter Badges & Sorting Row */}
        <div className="bg-[var(--color-surface-card)] rounded-xl border border-slate-200 px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs shadow-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 font-semibold text-slate-800 border border-slate-200">
              All Products ({products.length}) <FiChevronDown />
            </button>
            <span className="text-[var(--color-danger)] cursor-pointer font-medium hover:underline">Incorrect Price (2)</span>
            <span className="text-slate-600 cursor-pointer hover:underline">Low Score (4)</span>
            <span className="text-slate-600 cursor-pointer hover:underline">No Specifications (1)</span>
            <span className="text-slate-600 cursor-pointer hover:underline">No Descriptions (3)</span>
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-1.5 border border-slate-300 bg-[var(--color-surface-card)] text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer shadow-2xs font-medium"
            >
              <span>⇅</span> {sortBy} {showSortMenu ? <FiChevronUp className="text-slate-400" /> : <FiChevronDown className="text-slate-400" />}
            </button>

            {showSortMenu && (
              <div className="absolute right-0 mt-1 w-48 bg-[var(--color-surface-card)] border border-slate-200 shadow-xl rounded-xl z-50 py-1.5 text-xs">
                {["Recent Modified", "Oldest Modified", "Score: High to low", "Score: Low to high"].map((option) => (
                  <button
                    key={option}
                    onClick={() => { setSortBy(option); setShowSortMenu(false); }}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-50 cursor-pointer font-medium ${sortBy === option ? "text-slate-900 font-bold bg-slate-50" : "text-slate-700"}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Cards List */}
        <div className="space-y-4">
          {products.map((product) => {
            const activeImgIdx = selectedMainImage[product.id] ?? 0;
            const totalSlots = Math.max(product.images.length + 1, 6);

            return (
              <div 
                key={product.id} 
                className={`bg-[var(--color-surface-card)] rounded-xl shadow-xs border border-slate-200 grid grid-cols-1 md:grid-cols-12 relative overflow-hidden ${product.status === "Inactive" ? "opacity-60" : ""}`}
              >
                {/* Column 1: Vertical Scrollable Thumbnail Gallery */}
                <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-slate-200 p-3 flex flex-col justify-between bg-slate-50/50">
                  <div className="flex gap-2.5 items-center">
                    
                    {/* Scrollable Thumbnails */}
                    <div className="flex flex-col items-center py-1">
                      <button 
                        onClick={() => handleScrollGallery(product.id, "up")}
                        className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer mb-1"
                      >
                        <FiChevronUp className="text-sm" />
                      </button>

                      <div 
                        id={`thumb-scroll-${product.id}`}
                        className="flex flex-col gap-1.5 max-h-[160px] overflow-y-auto scrollbar-none py-1 pr-0.5"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                      >
                        {Array.from({ length: totalSlots }).map((_, idx) => {
                          const img = product.images[idx];
                          return img ? (
                            <div 
                              key={idx} 
                              onClick={() => setSelectedMainImage({ ...selectedMainImage, [product.id]: idx })}
                              className={`w-11 h-11 border rounded-lg overflow-hidden shrink-0 cursor-pointer transition-all ${
                                activeImgIdx === idx ? "border-[var(--color-primary-600)] ring-1 ring-[var(--color-primary-600)]" : "border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              <img src={img} alt="thumb" className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <button 
                              key={idx}
                              onClick={() => togglePopover("IMAGES", product)}
                              className="w-11 h-11 border border-dashed border-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-lg flex flex-col items-center justify-center shrink-0 hover:bg-[var(--color-primary-50)] cursor-pointer transition-colors"
                            >
                              <FiCamera className="text-xs" />
                              <span className="text-[9px] font-medium leading-none mt-0.5">Add</span>
                            </button>
                          );
                        })}
                      </div>

                      <button 
                        onClick={() => handleScrollGallery(product.id, "down")}
                        className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer mt-1"
                      >
                        <FiChevronDown className="text-sm" />
                      </button>
                    </div>

                    {/* Main Image Display with Exact SVG Icon Overlay */}
                    <div 
                      onClick={() => togglePopover("IMAGES", product)}
                      className="flex-1 bg-[var(--color-surface-card)] border border-slate-200 rounded-xl flex items-center justify-center relative overflow-hidden h-[170px] cursor-pointer hover:border-[var(--color-primary-600)] group shadow-2xs"
                    >
                      <img 
                        src={product.images[activeImgIdx] || "https://via.placeholder.com/250x180"} 
                        alt={product.title} 
                        className="max-h-36 object-contain" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <CustomEditExpandIcon className="w-6 h-6 text-white" stroke="#ffffff" />
                      </div>
                    </div>

                  </div>

                  {/* Images Management Modal */}
                  {activePopover.type === "IMAGES" && activePopover.productId === product.id && (
                    <div className="absolute left-0 top-0 z-50 bg-[var(--color-surface-card)] border border-slate-300 shadow-2xl rounded-xl p-4 w-full md:w-96 text-xs">
                      <div className="flex justify-between items-center mb-3 border-b pb-2">
                        <h4 className="font-bold text-slate-800">Manage Product Images</h4>
                        <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-400 hover:text-slate-600">
                          <FiX className="text-base" />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {tempImages.map((img, idx) => (
                          <div key={idx} className="relative h-20 border rounded-lg bg-slate-50 overflow-hidden flex items-center justify-center">
                            <img src={img} alt="upload" className="h-full object-cover" />
                            <button 
                              onClick={() => setTempImages(tempImages.filter((_, i) => i !== idx))}
                              className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full text-[10px]"
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                        ))}
                        <label className="h-20 border border-dashed border-[var(--color-primary-600)] text-[var(--color-primary-600)] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[var(--color-primary-50)]">
                          <FiPlus className="text-lg" />
                          <span className="text-[10px]">Add Image</span>
                          <input 
                            type="file" 
                            className="hidden" 
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                const url = URL.createObjectURL(e.target.files[0]);
                                setTempImages([...tempImages, url]);
                              }
                            }} 
                          />
                        </label>
                      </div>

                      <div className="flex justify-end gap-2">
                        <button onClick={() => setActivePopover({ type: null, productId: null })} className="px-3 py-1.5 border rounded-lg">Cancel</button>
                        <button onClick={() => handleSaveImages(product.id)} className="px-3 py-1.5 bg-[var(--color-primary-600)] text-white rounded-lg font-medium">Save Photos</button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-slate-200 text-center">
                    <button className="flex items-center justify-center gap-1.5 p-1.5 border border-slate-200 rounded-lg text-[10px] text-slate-600 hover:bg-slate-50 cursor-pointer font-medium">
                      <FiVideo className="text-slate-400 text-xs" /> Add Video
                    </button>
                    <button className="flex items-center justify-center gap-1.5 p-1.5 border border-slate-200 rounded-lg text-[10px] text-slate-600 hover:bg-slate-50 cursor-pointer font-medium">
                      <FiFileText className="text-slate-400 text-xs" /> Add PDF
                    </button>
                  </div>
                </div>

                {/* Column 2: Details & Inline Popovers */}
                <div className="md:col-span-5 p-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
                  <div className="space-y-3">
                    
                    {/* Name Field */}
                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-bold text-slate-900">{product.title}</h2>
                        <button onClick={() => togglePopover("NAME", product)} className="text-slate-400 hover:text-[var(--color-primary-600)] cursor-pointer" title="Edit Name">
                          <FiEdit className="text-xs" />
                        </button>
                      </div>

                      {activePopover.type === "NAME" && activePopover.productId === product.id && (
                        <div className="absolute left-0 top-7 z-40 bg-[var(--color-surface-card)] border border-slate-300 shadow-xl rounded-xl p-4 w-72 text-xs space-y-3">
                          <div>
                            <label className="text-slate-600 block mb-1 font-medium">Product Name</label>
                            <input
                              type="text"
                              value={nameData.title}
                              onChange={(e) => setNameData({ ...nameData, title: e.target.value })}
                              className="w-full p-2 border border-slate-400 rounded-lg bg-[var(--color-surface-card)]"
                            />
                          </div>
                          <div className="flex justify-end gap-2">
                            <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-600">Cancel</button>
                            <button onClick={() => handleSaveName(product.id)} className="bg-[var(--color-primary-600)] text-white px-3 py-1 rounded-lg">Save</button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price Field */}
                    <div className="relative">
                      <div className="flex items-center gap-1 text-sm font-semibold text-slate-800">
                        <span>₹ {product.price}</span>
                        <span className="text-slate-500 text-xs font-normal">/{product.unit}</span>
                        <button onClick={() => togglePopover("PRICE", product)} className="text-slate-400 hover:text-[var(--color-primary-600)] ml-1 cursor-pointer" title="Edit Price">
                          <FiEdit className="text-xs" />
                        </button>
                      </div>

                      {activePopover.type === "PRICE" && activePopover.productId === product.id && (
                        <div className="absolute left-0 top-7 z-40 bg-[var(--color-surface-card)] border border-slate-300 shadow-xl rounded-xl p-4 w-60 text-xs space-y-2">
                          <div className="flex rounded-lg border border-slate-400 bg-[var(--color-surface-card)] overflow-hidden">
                            <span className="bg-slate-100 px-2 py-1.5 font-bold">₹</span>
                            <input
                              type="number"
                              value={priceData.price}
                              onChange={(e) => setPriceData({ ...priceData, price: e.target.value })}
                              className="w-full p-1.5 focus:outline-none"
                            />
                          </div>
                          <select
                            value={priceData.unit}
                            onChange={(e) => setPriceData({ ...priceData, unit: e.target.value })}
                            className="w-full p-1.5 border border-slate-300 rounded-lg bg-[var(--color-surface-card)]"
                          >
                            <option value="Piece">Piece</option>
                            <option value="Kg">Kg</option>
                            <option value="Liter">Liter</option>
                            <option value="Set">Set</option>
                          </select>
                          <div className="flex justify-end gap-2 mt-2">
                            <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-600">Cancel</button>
                            <button onClick={() => handleSavePrice(product.id)} className="bg-[var(--color-primary-600)] text-white px-3 py-1 rounded-lg">Update</button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Category Field */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">Category</span>
                      <span className="bg-[var(--color-primary-50)] border border-[var(--color-primary-100)] px-2.5 py-0.5 rounded-full text-[var(--color-primary-900)] font-medium">
                        {product.category}
                      </span>
                      <button onClick={() => openCategoryModal(product)} className="text-[var(--color-primary-600)] font-semibold hover:underline flex items-center gap-0.5 cursor-pointer">
                        <FiPlus /> Change
                      </button>
                    </div>

                    {/* Description Field */}
                    <div className="relative text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">Description</span>
                        <button onClick={() => togglePopover("DESC", product)} className="text-slate-400 hover:text-[var(--color-primary-600)] cursor-pointer" title="Edit Description">
                          <FiEdit className="text-[10px]" />
                        </button>
                      </div>
                      <p className="text-slate-700 mt-0.5 line-clamp-2">{product.description || "N/A"}</p>

                      {activePopover.type === "DESC" && activePopover.productId === product.id && (
                        <div className="absolute left-0 top-6 z-40 bg-[var(--color-surface-card)] border border-slate-300 shadow-xl rounded-xl p-3 w-72 text-xs space-y-2">
                          <textarea
                            value={descData}
                            onChange={(e) => setDescData(e.target.value)}
                            rows={4}
                            className="w-full p-2 border rounded-lg focus:outline-none"
                          />
                          <div className="flex justify-end gap-2">
                            <button onClick={() => setActivePopover({ type: null, productId: null })} className="text-slate-600">Cancel</button>
                            <button onClick={() => handleSaveDesc(product.id)} className="bg-[var(--color-primary-600)] text-white px-3 py-1 rounded-lg">Save</button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Group Tag */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">Group</span>
                      <span className="border border-slate-200 px-2 py-0.5 rounded-md text-slate-700 bg-slate-50 font-medium">
                        {product.group}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 3: Professional Specifications Section */}
                <div className="md:col-span-4 p-4 flex flex-col items-center justify-start bg-[var(--color-surface-card)] relative">
                  
                  {/* 3-Dot Action Menu Top Right */}
                  <div className="absolute right-3 top-3 z-10">
                    <button 
                      onClick={() => setActiveMenuId(activeMenuId === product.id ? null : product.id)} 
                      className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors"
                    >
                      <FiMoreVertical className="text-lg" />
                    </button>

                    {activeMenuId === product.id && (
                      <div className="absolute right-0 top-7 w-32 bg-[var(--color-surface-card)] border border-slate-200 shadow-xl rounded-xl z-50 py-1.5 text-xs">
                        <button 
                          onClick={() => handleEditProductInForm(product)} 
                          className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-800 font-medium cursor-pointer"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleToggleStatus(product.id)} 
                          className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-800 font-medium cursor-pointer"
                        >
                          {product.status === "Active" ? "Deactivate" : "Activate"}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Specifications Aligned Cleanly */}
                  <div className="w-full space-y-2.5 pt-1">
                    <span className="text-xs font-semibold text-slate-700 block text-center">Technical Specifications</span>

                    <div className="space-y-2 w-full">
                      {product.specifications.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={spec.key}
                            onChange={(e) => handleUpdateSpecRow(product.id, idx, "key", e.target.value)}
                            placeholder="Specification Name"
                            className="w-1/2 p-2 border border-slate-300 rounded-lg text-xs bg-[var(--color-surface-card)] focus:outline-none focus:border-[var(--color-primary-600)] font-medium"
                          />
                          <input
                            type="text"
                            value={spec.value}
                            onChange={(e) => handleUpdateSpecRow(product.id, idx, "value", e.target.value)}
                            placeholder="Value"
                            className="w-1/2 p-2 border border-slate-300 rounded-lg text-xs bg-[var(--color-surface-card)] focus:outline-none focus:border-[var(--color-primary-600)]"
                          />
                          <button 
                            onClick={() => handleDeleteSpecRow(product.id, idx)}
                            className="text-red-400 hover:text-red-600 p-1 cursor-pointer transition-colors"
                            title="Delete Row"
                          >
                            <FiTrash2 className="text-sm" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center pt-1">
                      <button 
                        onClick={() => handleAddSpecRow(product.id)}
                        className="text-[var(--color-primary-600)] font-semibold hover:underline flex items-center gap-1 text-xs cursor-pointer"
                      >
                        <FiPlus /> Add Row
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Category Selection Modal */}
      {categoryModalProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-3">
          <div className="bg-[var(--color-surface-card)] rounded-2xl shadow-2xl w-full max-w-xl p-5 border border-slate-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-slate-800">Select Category For "{categoryModalProduct.title}"</h3>
              <button onClick={() => setCategoryModalProduct(null)} className="text-slate-400 hover:text-slate-600">
                <FiX className="text-base" />
              </button>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto mb-4 pr-1">
              {categoriesList.map((cat, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedCategories([cat.name])}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${selectedCategories.includes(cat.name) ? 'bg-[var(--color-primary-50)] border-[var(--color-primary-600)]' : 'border-slate-200 hover:bg-slate-50'}`}
                >
                  <input type="radio" checked={selectedCategories.includes(cat.name)} onChange={() => {}} className="accent-[var(--color-primary-600)]" />
                  <div className="text-xs">
                    <div className="font-bold text-[var(--color-primary-700)]">{cat.name}</div>
                    <div className="text-slate-500 text-[10px]">{cat.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <button onClick={() => setCategoryModalProduct(null)} className="px-4 py-2 text-xs border border-slate-300 rounded-xl font-medium">Cancel</button>
              <button onClick={handleSaveCategory} className="px-4 py-2 text-xs bg-[var(--color-primary-600)] text-white rounded-xl font-medium shadow-2xs">Save Category</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}