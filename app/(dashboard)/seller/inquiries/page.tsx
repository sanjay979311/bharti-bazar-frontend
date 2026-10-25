"use client";

import React, { useState } from "react";
import { 
  FiInbox, 
  FiSearch, 
  FiSend, 
  FiClock, 
  FiCheckCircle, 
  FiMapPin, 
  FiPhoneCall, 
  FiFileText, 
  FiPaperclip,
  FiUser
} from "react-icons/fi";

const sampleInquiries = [
  {
    id: "INQ-901",
    buyerName: "Apex Manufacturing Solutions",
    contactPerson: "Sanjay Kumar",
    location: "Mumbai, Maharashtra",
    buyerType: "Verified Enterprise Buyer",
    isGstVerified: true,
    lastMessage: "Please share the best discounted quote for 500 Pcs Stainless Steel Valves.",
    time: "10:42 AM",
    unread: true,
    subject: "Industrial Stainless Steel Valves (500 Pcs)",
    history: [
      { sender: "buyer", text: "Hi, we saw your catalog for Stainless Steel Ball Valves. Are these ready in stock?", time: "10:30 AM" },
      { sender: "seller", text: "Hello Sanjay! Yes, we have SS 304/316 grade valves in ready stock.", time: "10:35 AM" },
      { sender: "buyer", text: "Please share the best discounted quote for 500 Pcs Stainless Steel Valves.", time: "10:42 AM" }
    ]
  },
  {
    id: "INQ-884",
    buyerName: "Gujarat Tech Infra",
    contactPerson: "Rajesh Patel",
    location: "Ahmedabad, Gujarat",
    buyerType: "Verified GST Buyer",
    isGstVerified: true,
    lastMessage: "Can you send the technical data sheet for the Hydraulic Pump model HDGP-50L?",
    time: "Yesterday",
    unread: false,
    subject: "Heavy Duty Hydraulic Gear Pumps",
    history: [
      { sender: "buyer", text: "Can you send the technical data sheet for the Hydraulic Pump model HDGP-50L?", time: "Yesterday" }
    ]
  },
  {
    id: "INQ-812",
    buyerName: "Royal Contractors",
    contactPerson: "Amit Sharma",
    location: "Delhi NCR",
    buyerType: "Regular Buyer",
    isGstVerified: false,
    lastMessage: "What is your minimum order quantity for 20mm PVC pipes?",
    time: "16 Oct",
    unread: false,
    subject: "PVC Conduit Pipes (20mm Heavy)",
    history: [
      { sender: "buyer", text: "What is your minimum order quantity for 20mm PVC pipes?", time: "16 Oct" }
    ]
  }
];

export default function InquiriesPage() {
  const [selectedInquiry, setSelectedInquiry] = useState(sampleInquiries[0]);
  const [replyMessage, setReplyMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSendMessage = () => {
    if (!replyMessage.trim()) return;
    
    const newMessage = {
      sender: "seller",
      text: replyMessage,
      time: "Just Now"
    };

    setSelectedInquiry({
      ...selectedInquiry,
      history: [...selectedInquiry.history, newMessage],
      lastMessage: replyMessage
    });

    setReplyMessage("");
  };

  const filteredInquiries = sampleInquiries.filter(inq => 
    inq.buyerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      
      {/* 1. Header Dark Blue Banner */}
      <div className="w-full bg-[var(--color-primary-900,#1e3a8a)] text-white p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-emerald-400">
              <FiInbox className="text-2xl" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Inquiries & Messages
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-2">
            Direct message hub for communicating with buyers, negotiating price quotes, and closing RFQs.
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-center shrink-0">
          <span className="text-[10px] font-bold uppercase text-slate-200 block">Unread Enquiries</span>
          <span className="text-base font-black text-amber-400">1 Urgent</span>
        </div>
      </div>

      {/* 2. Split Chat Container */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs grid grid-cols-1 lg:grid-cols-12 min-h-[580px] overflow-hidden">
        
        {/* Left Side: Inquiry List (5 Columns) */}
        <div className="lg:col-span-5 border-r border-slate-200/80 flex flex-col bg-slate-50/40">
          
          {/* List Search Header */}
          <div className="p-3.5 border-b border-slate-200/80 bg-white">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search inquiries or buyers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
            </div>
          </div>

          {/* List Items */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {filteredInquiries.map((inq) => {
              const isSelected = selectedInquiry.id === inq.id;
              return (
                <div
                  key={inq.id}
                  onClick={() => setSelectedInquiry(inq)}
                  className={`p-4 cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[var(--color-primary-50,#eef2ff)] border-l-4 border-l-[var(--color-primary-600,#2563eb)]"
                      : "hover:bg-slate-100/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-900 truncate">
                      {inq.buyerName}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400 shrink-0">
                      {inq.time}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[var(--color-primary-600,#2563eb)] truncate mb-1">
                    {inq.subject}
                  </p>

                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {inq.lastMessage}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    {inq.isGstVerified && (
                      <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                        GST Verified
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                      <FiMapPin className="text-[10px]" /> {inq.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Side: Conversation Box (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col bg-white">
          
          {/* Active Chat Header */}
          <div className="p-4 border-b border-slate-200/80 flex items-center justify-between gap-3 bg-slate-50/50">
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm font-bold text-slate-900 truncate">
                  {selectedInquiry.buyerName}
                </h2>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                  {selectedInquiry.buyerType}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Subject: <strong className="text-slate-800">{selectedInquiry.subject}</strong>
              </p>
            </div>

            <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1 shrink-0">
              <FiPhoneCall className="text-slate-500" />
              <span>Contact Buyer</span>
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/20">
            {selectedInquiry.history.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === "seller" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "seller"
                      ? "bg-[var(--color-primary-600,#2563eb)] text-white rounded-br-none"
                      : "bg-white border border-slate-200/80 text-slate-800 rounded-bl-none shadow-2xs"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
          </div>

          {/* Reply Input Footer */}
          <div className="p-3.5 border-t border-slate-200/80 bg-white space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Write your response or price quotation details..."
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--color-primary-600,#2563eb)]"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2.5 rounded-xl bg-[var(--color-primary-600,#2563eb)] hover:bg-[var(--color-primary-700,#1d4ed8)] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer shrink-0"
              >
                <FiSend className="text-sm" />
                <span>Send</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}