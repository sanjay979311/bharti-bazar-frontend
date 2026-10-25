"use client";

import React, { useState } from "react";

interface Conversation {
  id: string;
  sellerName: string;
  companyName: string;
  location: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  online: boolean;
  requirement: string;
}

const conversations: Conversation[] = [
  {
    id: "1",
    sellerName: "Patliputra Traders",
    companyName: "Patliputra Food Products",
    location: "Gorakhpur, UP",
    lastMessage: "Sir, Namkeen Bhujia ka minimum order quantity 50 kg hai. ₹120/kg padega.",
    time: "10:45 AM",
    unreadCount: 2,
    online: true,
    requirement: "Namkeen Bhujia Bulk Purchase",
  },
  {
    id: "2",
    sellerName: "Gokul Foods",
    companyName: "Gokul Industries",
    location: "Khalilabad, UP",
    lastMessage: "Aloo Bhujia ka sample courier dispatch kar diya hai.",
    time: "Yesterday",
    unreadCount: 0,
    online: false,
    requirement: "Aloo Bhujia Namkeen Order",
  },
  {
    id: "3",
    sellerName: "Sree Bala Agro",
    companyName: "Sree Bala Rice Mill",
    location: "Basti, UP",
    lastMessage: "Kalijeera Rice ka latest wholesale price list bhej diya hai.",
    time: "14 Oct",
    unreadCount: 0,
    online: true,
    requirement: "Kalijeera Export Quality Rice",
  },
];

export default function MessagesChat() {
  const [activeChat, setActiveChat] = useState<Conversation>(conversations[0]);
  const [inputMessage, setInputMessage] = useState("");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-extrabold text-[var(--color-primary-900)]">
          Messages & Supplier Chats
        </h1>
        <p className="text-xs text-slate-500">
          Direct communication with verified manufacturers and wholesale sellers.
        </p>
      </div>

      {/* Main Chat Box Container */}
      <div className="bg-[var(--color-surface-card)] rounded-2xl border border-slate-200 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12 h-[650px]">
        
        {/* LEFT COLUMN: Conversations List (4 cols) */}
        <div className="md:col-span-4 border-r border-slate-200 flex flex-col h-full bg-slate-50/50">
          
          {/* Search Header */}
          <div className="p-3.5 border-b border-slate-200 bg-[var(--color-surface-card)]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search sellers or products..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-100 rounded-lg focus:outline-hidden border border-transparent focus:border-[var(--color-primary-600)] transition-colors"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`p-3.5 flex items-start gap-3 transition-colors cursor-pointer ${
                  activeChat.id === chat.id
                    ? "bg-[var(--color-primary-50)] border-l-4 border-[var(--color-primary-600)]"
                    : "hover:bg-slate-100/70"
                }`}
              >
                {/* Avatar with Online Badge */}
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-900)] text-white font-bold text-xs flex items-center justify-center">
                    {chat.sellerName.substring(0, 2).toUpperCase()}
                  </div>
                  {chat.online && (
                    <span className="w-2.5 h-2.5 bg-[var(--color-success)] rounded-full border-2 border-white absolute bottom-0 right-0"></span>
                  )}
                </div>

                {/* Seller Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-xs font-bold text-slate-900 truncate">{chat.sellerName}</h4>
                    <span className="text-[10px] text-slate-400 font-medium">{chat.time}</span>
                  </div>
                  <p className="text-[11px] text-[var(--color-primary-700)] font-semibold truncate mb-1">
                    {chat.requirement}
                  </p>
                  <p className="text-xs text-slate-500 truncate">{chat.lastMessage}</p>
                </div>

                {/* Unread Count Badge */}
                {chat.unreadCount && chat.unreadCount > 0 ? (
                  <span className="bg-[var(--color-accent-500)] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-1">
                    {chat.unreadCount}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Active Chat Messages Area (8 cols) */}
        <div className="md:col-span-8 flex flex-col h-full bg-[var(--color-surface-card)]">
          
          {/* Active Chat Header */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-sm">{activeChat.sellerName}</h3>
                <span className="bg-[var(--color-success)] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                  Verified Seller
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {activeChat.companyName} • <span className="font-medium text-slate-700">{activeChat.location}</span>
              </p>
            </div>

            {/* Quick B2B Actions */}
            <div className="flex items-center gap-2">
              <button className="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs">
                Request Call
              </button>
            </div>
          </div>

          {/* Requirement Context Bar */}
          <div className="px-4 py-2 bg-[var(--color-primary-50)] border-b border-[var(--color-primary-100)] flex items-center justify-between text-xs">
            <span className="text-slate-600">
              Inquiry regarding: <strong className="text-[var(--color-primary-900)]">{activeChat.requirement}</strong>
            </span>
            <button className="text-[var(--color-primary-600)] font-bold hover:underline cursor-pointer">
              View RFQ Details
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/30">
            
            {/* Seller Message */}
            <div className="flex items-start gap-2.5 max-w-[80%]">
              <div className="w-7 h-7 rounded-full bg-[var(--color-primary-900)] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                PT
              </div>
              <div>
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-800">
                  Namaste sir! Patliputra Traders me aapka swagat hai. Aapko Namkeen Bhujia ki kitni requirement hai?
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">10:40 AM</span>
              </div>
            </div>

            {/* Buyer Message (Self) */}
            <div className="flex items-start gap-2.5 max-w-[80%] ml-auto flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-[var(--color-primary-600)] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                YOU
              </div>
              <div>
                <div className="bg-[var(--color-primary-600)] text-white p-3 rounded-2xl rounded-tr-xs shadow-xs text-xs">
                  Mujhe Gorakhpur location ke liye 100 Quintal ki requirement hai. Wholesale rate aur GST invoice detail bhejye.
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block text-right">10:42 AM</span>
              </div>
            </div>

            {/* Seller Message with Quotation Card */}
            <div className="flex items-start gap-2.5 max-w-[80%]">
              <div className="w-7 h-7 rounded-full bg-[var(--color-primary-900)] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                PT
              </div>
              <div>
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-800 space-y-2">
                  <p>Sir, Namkeen Bhujia ka minimum order quantity 50 kg hai. ₹120/kg padega.</p>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-3">
                    <div>
                      <span className="font-bold block text-slate-900">Quotation_Namkeen_2026.pdf</span>
                      <span className="text-[10px] text-slate-400">PDF • 1.2 MB</span>
                    </div>
                    <button className="bg-[var(--color-primary-50)] text-[var(--color-primary-700)] font-bold text-[11px] px-2.5 py-1 rounded-md hover:bg-[var(--color-primary-100)] transition-colors cursor-pointer">
                      Download
                    </button>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">10:45 AM</span>
              </div>
            </div>

          </div>

          {/* Message Input Bar */}
          <div className="p-3 border-t border-slate-200 bg-[var(--color-surface-card)]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!inputMessage.trim()) return;
                setInputMessage("");
              }}
              className="flex items-center gap-2"
            >
              {/* Attachment Button */}
              <button
                type="button"
                className="p-2 text-slate-400 hover:text-[var(--color-primary-600)] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="Attach Document/Photo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>

              {/* Text Area */}
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your reply, negotiate price, or ask questions..."
                className="flex-1 bg-slate-100 px-4 py-2.5 text-xs rounded-xl border border-transparent focus:outline-hidden focus:border-[var(--color-primary-600)] focus:bg-white transition-all"
              />

              {/* Send Button */}
              <button
                type="submit"
                className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-bold p-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}