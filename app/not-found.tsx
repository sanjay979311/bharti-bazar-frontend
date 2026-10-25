import Link from "next/link";
import { FiHome, FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-surface-light,#f8fafc)] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm">
        
        {/* Warning / Error Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-50 text-[var(--color-accent-500,#f97316)] flex items-center justify-center border border-amber-200/60 shadow-2xs">
          <FiAlertTriangle className="text-3xl" />
        </div>

        {/* Big 404 Heading */}
        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold text-[var(--color-primary-600,#2563eb)] tracking-tight">
            404
          </h1>
          <h2 className="text-xl font-bold text-slate-800">
            Page Not Found
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
            Aap jo page dhoondh rahe hain wo shayad remove ho gaya hai, naam badal gaya hai ya temporarily unavailable hai.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Back Button */}
          <Link
            href="/buyer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 hover:text-slate-900 transition-all duration-150"
          >
            <FiArrowLeft className="text-base" />
            <span>Go Back</span>
          </Link>

          {/* Go Home Button */}
          <Link
            href="/buyer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary-600,#2563eb)] hover:bg-[var(--color-primary-700,#1d4ed8)] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all duration-150"
          >
            <FiHome className="text-base" />
            <span>Dashboard</span>
          </Link>
        </div>

      </div>
    </div>
  );
}