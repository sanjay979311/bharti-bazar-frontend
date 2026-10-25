import React from 'react';

// Sample Order / RFQ Data Type
interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  productName: string;
  quantity: string;
  targetPrice: string;
  supplierName: string;
  location: string;
  status: 'pending' | 'quoted' | 'accepted' | 'completed' | 'cancelled';
}

const ordersData: OrderItem[] = [
  {
    id: '1',
    orderNumber: 'RFQ-2026-0891',
    date: '18 Oct 2026',
    productName: 'Industrial TMT Steel Bars (12mm)',
    quantity: '25 Tons',
    targetPrice: '₹ 52,000 / Ton',
    supplierName: 'Gorakhpur Steel Traders',
    location: 'Gorakhpur, UP',
    status: 'quoted',
  },
  {
    id: '2',
    orderNumber: 'RFQ-2026-0742',
    date: '15 Oct 2026',
    productName: 'Premium Raw Cotton Bales',
    quantity: '100 Quintals',
    targetPrice: '₹ 6,200 / Quintal',
    supplierName: 'Khalilabad Agro Mills',
    location: 'Khalilabad, UP',
    status: 'accepted',
  },
  {
    id: '3',
    orderNumber: 'RFQ-2026-0511',
    date: '02 Oct 2026',
    productName: 'Automatic Rice Milling Machine',
    quantity: '1 Unit',
    targetPrice: '₹ 2,45,000 / Unit',
    supplierName: 'Basti Engineering Works',
    location: 'Basti, UP',
    status: 'pending',
  },
];

export default function MyOrders() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-primary-900)]">My Orders & RFQs</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track your posted requirements, quotations received, and order history.
          </p>
        </div>
        <button className="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-xs cursor-pointer self-start sm:self-auto">
          + Post New Requirement
        </button>
      </div>

      {/* Orders List / Cards */}
      <div className="space-y-4">
        {ordersData.map((order) => (
          <div
            key={order.id}
            className="bg-[var(--color-surface-card)] border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-shadow"
          >
            {/* Top Bar: Order ID, Date & Status */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-bold text-xs sm:text-sm text-[var(--color-primary-900)]">
                  {order.orderNumber}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500">{order.date}</span>
              </div>
              <OrderStatusBadge status={order.status} />
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Product Info */}
              <div className="md:col-span-2 space-y-1">
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                  {order.productName}
                </h3>
                <p className="text-xs text-slate-500">
                  Supplier:{' '}
                  <span className="font-medium text-slate-700">{order.supplierName}</span> ({order.location})
                </p>
              </div>

              {/* Quantity & Target Price */}
              <div className="space-y-1">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Quantity & Target
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  {order.quantity}
                </p>
                <p className="text-xs font-bold text-[var(--color-primary-700)]">
                  {order.targetPrice}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center md:justify-end gap-2 pt-2 md:pt-0">
                <button className="flex-1 md:flex-initial bg-[var(--color-primary-50)] hover:bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer">
                  View Details
                </button>
                <button className="flex-1 md:flex-initial bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer">
                  Contact Supplier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{/* Badge Helper Component */}
function OrderStatusBadge({ status }: { status: OrderItem['status'] }) {
  switch (status) {
    case 'quoted':
      return (
        <span className="bg-[var(--color-primary-50)] text-[var(--color-primary-700)] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[var(--color-primary-100)]">
          💬 Quote Received
        </span>
      );
    case 'accepted':
      return (
        <span className="bg-emerald-50 text-[var(--color-success)] text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
          ✓ Order Confirmed
        </span>
      );
    case 'pending':
      return (
        <span className="bg-amber-50 text-[var(--color-warning)] text-[11px] font-bold px-2.5 py-1 rounded-full border border-amber-200">
          ⏳ RFQ Open
        </span>
      );
    default:
      return (
        <span className="bg-slate-100 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-full">
          {status}
        </span>
      );
  }
}


// "use client";

// import React, { useState } from "react";

// // IndiaMART Style Order Data Type
// interface OrderRequirement {
//   id: string;
//   requirement: string;
//   postedOn: string;
//   connectedSeller: {
//     name: string;
//     rating?: number;
//     reviewsCount?: number;
//   };
// }

// const initialOrders: OrderRequirement[] = [
//   {
//     id: "1",
//     requirement: "Namkeen Bhujia",
//     postedOn: "14/10/26",
//     connectedSeller: {
//       name: "Patliputra Traders",
//       rating: 4.2,
//       reviewsCount: 85,
//     },
//   },
//   {
//     id: "2",
//     requirement: "Aloo Bhujia Namkeen",
//     postedOn: "14/10/26",
//     connectedSeller: {
//       name: "Gokul Foods",
//       rating: 3.9,
//       reviewsCount: 28,
//     },
//   },
//   {
//     id: "3",
//     requirement: "Aalu Bhujia",
//     postedOn: "14/10/26",
//     connectedSeller: {
//       name: "Janki Foods",
//     },
//   },
//   {
//     id: "4",
//     requirement: "Kalijeera Export Quality Rice",
//     postedOn: "26/09/26",
//     connectedSeller: {
//       name: "Sree Bala Agro",
//       rating: 4.4,
//       reviewsCount: 113,
//     },
//   },
// ];

// export default function MyOrdersTable() {
//   const [activeTab, setActiveTab] = useState<"orders" | "sellers">("orders");

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//       {/* Top Header Row: Tabs & Post RFQ Button */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        
//         {/* Toggle Navigation Tabs */}
//         <div className="inline-flex p-1 bg-slate-200/70 rounded-xl border border-slate-300/60">
//           <button
//             onClick={() => setActiveTab("orders")}
//             className={`px-6 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
//               activeTab === "orders"
//                 ? "bg-[var(--color-surface-card)] text-[var(--color-primary-900)] shadow-xs"
//                 : "text-slate-600 hover:text-slate-900"
//             }`}
//           >
//             My Orders
//           </button>
//           <button
//             onClick={() => setActiveTab("sellers")}
//             className={`px-6 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
//               activeTab === "sellers"
//                 ? "bg-[var(--color-surface-card)] text-[var(--color-primary-900)] shadow-xs"
//                 : "text-slate-600 hover:text-slate-900"
//             }`}
//           >
//             My Sellers
//           </button>
//         </div>

//         {/* Post RFQ Button */}
//         <button className="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer">
//           Post RFQ
//         </button>
//       </div>

//       {/* Main Data Table Wrapper */}
//       <div className="bg-[var(--color-surface-card)] rounded-xl border border-slate-200 shadow-xs overflow-x-auto">
//         <table className="w-full text-left border-collapse min-w-[700px]">
          
//           {/* Table Column Headers */}
//           <thead>
//             <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
//               <th className="py-3.5 px-6">Requirement</th>
//               <th className="py-3.5 px-6">Posted On</th>
//               <th className="py-3.5 px-6">Connected Sellers</th>
//               <th className="py-3.5 px-6 text-center">Actions</th>
//             </tr>
//           </thead>

//           {/* Table Data Rows */}
//           <tbody className="divide-y divide-slate-100 text-sm">
//             {initialOrders.map((row) => (
//               <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                
//                 {/* 1. Requirement Title */}
//                 <td className="py-4 px-6 font-bold text-slate-900">
//                   {row.requirement}
//                 </td>

//                 {/* 2. Posted On Date */}
//                 <td className="py-4 px-6 text-slate-500 font-medium text-xs">
//                   {row.postedOn}
//                 </td>

//                 {/* 3. Connected Seller & Rating */}
//                 <td className="py-4 px-6">
//                   <div className="flex items-center gap-1.5">
//                     <span className="font-semibold text-slate-800">
//                       {row.connectedSeller.name}
//                     </span>
//                     {row.connectedSeller.rating ? (
//                       <div className="flex items-center text-xs font-semibold text-slate-600 ml-1">
//                         <span className="text-amber-500 mr-0.5">⭐</span>
//                         <span>{row.connectedSeller.rating}</span>
//                         <span className="text-slate-400 font-normal ml-0.5">
//                           ({row.connectedSeller.reviewsCount})
//                         </span>
//                       </div>
//                     ) : (
//                       <span className="text-slate-400 font-normal text-xs ml-1">-</span>
//                     )}
//                   </div>
//                 </td>

//                 {/* 4. Action Buttons & Icons */}
//                 <td className="py-4 px-6">
//                   <div className="flex items-center justify-center gap-3">
                    
//                     {/* Chat Now Button */}
//                     <button className="border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] text-xs font-bold px-4 py-1.5 rounded-lg transition-colors cursor-pointer">
//                       Chat Now
//                     </button>

//                     {/* Share Icon with Badge Indicator */}
//                     <button 
//                       title="Share Requirement" 
//                       className="relative p-2 text-slate-500 hover:text-[var(--color-primary-600)] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                       </svg>
//                       {/* Active Dot Badge */}
//                       <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-danger)] rounded-full"></span>
//                     </button>

//                     {/* Notification Bell Icon */}
//                     <button 
//                       title="Notifications" 
//                       className="p-2 text-slate-500 hover:text-[var(--color-primary-600)] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                       </svg>
//                     </button>

//                     {/* Re-order / Refresh Icon */}
//                     <button 
//                       title="Re-post Requirement" 
//                       className="p-2 text-slate-500 hover:text-[var(--color-primary-600)] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                       </svg>
//                     </button>

//                   </div>
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Footer Show More Option */}
//         <div className="py-4 border-t border-slate-100 text-center bg-slate-50/50">
//           <button className="text-xs font-bold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] inline-flex items-center gap-1 cursor-pointer">
//             Show more
//             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }