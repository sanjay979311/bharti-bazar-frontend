'use client';

import Link from 'next/link';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaInstagram 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1B2A] text-slate-300 pt-10 pb-4 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* TOP SECTION: LOGO & LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* 1. BRAND & DESCRIPTION */}
          <div className="lg:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center text-white font-black text-xl shadow-xs">
                K
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                KidBazaar
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              India&apos;s trusted B2B marketplace connecting buyers and suppliers worldwide[cite: 4].
            </p>

            {/* COLORFUL SOCIAL ICONS */}
            <div className="flex items-center gap-2 pt-2">
              {/* Facebook */}
              <a href="#" className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs hover:opacity-80 transition-opacity">
                <FaFacebookF />
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-7 h-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-xs hover:opacity-80 transition-opacity">
                <FaLinkedinIn />
              </a>
              {/* X / Twitter */}
              <a href="#" className="w-7 h-7 rounded-full bg-black border border-slate-700 text-white flex items-center justify-center text-xs hover:opacity-80 transition-opacity">
                <FaXTwitter />
              </a>
              {/* YouTube */}
              <a href="#" className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-xs hover:opacity-80 transition-opacity">
                <FaYoutube />
              </a>
              {/* Instagram */}
              <a href="#" className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-xs hover:opacity-80 transition-opacity">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* 2. COMPANY INFO */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Company Info
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">Press &amp; Media</Link></li>
            </ul>
          </div>

          {/* 3. BUYERS */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Buyers
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/search" className="hover:text-white transition-colors">Search Products</Link></li>
              <li><Link href="/rfq/post" className="hover:text-white transition-colors">Post Buy Requirement</Link></li>
              <li><Link href="/rfq" className="hover:text-white transition-colors">Get Quotes</Link></li>
              <li><Link href="/trade-assurance" className="hover:text-white transition-colors">Trade Assurance</Link></li>
            </ul>
          </div>

          {/* 4. SUPPLIERS */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Suppliers
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/dashboard/seller/products/add" className="hover:text-white transition-colors">List Products</Link></li>
              <li><Link href="/membership" className="hover:text-white transition-colors">Supplier Membership</Link></li>
              <li><Link href="/supplier-services" className="hover:text-white transition-colors">Supplier Services</Link></li>
              <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* 5. HELP & SUPPORT */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Help &amp; Support
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/return-policy" className="hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link href="/help#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT & MADE IN INDIA */}
        <div className="pt-4 pb-2 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-2">
          <p>© 2026 <strong className="text-white">KidBazaar</strong>. All Rights Reserved[cite: 4].</p>
          
          <div className="flex items-center gap-3 text-slate-400">
            <span>Made with <span className="text-red-500">❤️</span> in India[cite: 4]</span>
            <span className="text-slate-600">|</span>
            <span>Global B2B Marketplace[cite: 4]</span>
          </div>
        </div>

      </div>
    </footer>
  );
}