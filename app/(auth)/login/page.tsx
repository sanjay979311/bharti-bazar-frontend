

// "use client";

// import { useState, useEffect, FormEvent } from "react";
// import { auth } from "@/lib/firebase";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   ConfirmationResult,
// } from "firebase/auth";
// import {
//   AiOutlinePhone,
//   AiOutlineSafety,
//   AiOutlineLock,
//   AiOutlineArrowRight,
//   AiOutlineReload,
//   AiOutlineCheckCircle,
//   AiOutlineExclamationCircle,
// } from "react-icons/ai";

// export default function PhoneLoginPage() {
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const [otp, setOtp] = useState<string>("");
//   const [step, setStep] = useState<number>(1);
//   const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [message, setMessage] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined" && !(window as any).recaptchaVerifier) {
//       try {
//         (window as any).recaptchaVerifier = new RecaptchaVerifier(
//           auth,
//           "recaptcha-container",
//           {
//             size: "invisible",
//             callback: () => {},
//           }
//         );
//       } catch (err) {
//         console.error("reCAPTCHA setup error:", err);
//       }
//     }
//   }, []);

//   // 1. Send OTP
//   const handleSendOtp = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     const cleanPhone = phoneNumber.replace(/\D/g, "");
//     if (cleanPhone.length < 10) {
//       setMessage({ type: "error", text: "Please enter a valid 10-digit mobile number." });
//       setLoading(false);
//       return;
//     }

//     try {
//       const appVerifier = (window as any).recaptchaVerifier;
//       const formattedPhone = cleanPhone.startsWith("91") ? `+${cleanPhone}` : `+91${cleanPhone}`;

//       const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
//       setConfirmationResult(confirmation);
//       setStep(2);
//       setMessage({ type: "success", text: `OTP sent successfully to ${formattedPhone}` });
//     } catch (error: any) {
//       console.error("Error sending OTP:", error);
//       setMessage({
//         type: "error",
//         text: error?.message || "Failed to send OTP. Please check your number.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 2. Verify OTP & Send ID Token to Express Backend
//   const handleVerifyOtp = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!confirmationResult) return;

//     setLoading(true);
//     setMessage(null);

//     try {
//       const result = await confirmationResult.confirm(otp);
//       const user = result.user;
//       const idToken = await user.getIdToken();

//       // Aapka exact backend endpoint
//       const response = await fetch("http://localhost:5000/api/user/firebase-otp-login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ idToken }),
//         credentials: "include",
//       });

//       const data = await response.json();

//       if (data.success) {
//         setMessage({ type: "success", text: "Verification successful! Redirecting to dashboard..." });
//         setTimeout(() => {
//           window.location.href = "/dashboard";
//         }, 1500);
//       } else {
//         setMessage({ type: "error", text: data.message || "Backend authentication failed." });
//       }
//     } catch (error: any) {
//       console.error("Invalid OTP or server error:", error);
//       setMessage({ type: "error", text: "Invalid OTP code. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--color-surface-light)]">
//       {/* Background Subtle Shapes */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
//         <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-primary-100)] opacity-60 blur-3xl" />
//         <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-orange-100 opacity-50 blur-3xl" />
//       </div>

//       {/* Main Login Card */}
//       <div className="w-full max-w-md bg-[var(--color-surface-card)] rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        
//         {/* Header Branding */}
//         <div className="bg-[var(--color-primary-900)] p-6 text-white text-center relative overflow-hidden">
//           <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md mb-3 border border-white/20">
//             <AiOutlineSafety className="w-6 h-6 text-orange-400" />
//           </div>
//           <h1 className="text-2xl font-bold tracking-tight">Bharti Bazar SMS</h1>
//           <p className="text-xs text-blue-200 mt-1 flex items-center justify-center gap-1">
//             Trusted B2B Marketplace Portal
//           </p>
//         </div>

//         {/* Step Indicator Progress */}
//         <div className="flex border-b border-slate-100 bg-[var(--color-primary-50)] text-xs font-semibold">
//           <div
//             className={`flex-1 py-3 text-center flex items-center justify-center gap-1.5 transition-colors ${
//               step === 1
//                 ? "bg-[var(--color-primary-600)] text-white"
//                 : "text-slate-600"
//             }`}
//           >
//             <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">1</span>
//             Mobile Number
//           </div>
//           <div
//             className={`flex-1 py-3 text-center flex items-center justify-center gap-1.5 transition-colors ${
//               step === 2
//                 ? "bg-[var(--color-primary-600)] text-white"
//                 : "text-slate-500"
//             }`}
//           >
//             <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">2</span>
//             Verify OTP
//           </div>
//         </div>

//         {/* Form Container */}
//         <div className="p-6 sm:p-8">
          
//           {/* Status / Alert Message */}
//           {message && (
//             <div
//               className={`mb-6 p-3.5 rounded-xl text-xs font-medium flex items-start gap-2.5 border ${
//                 message.type === "success"
//                   ? "bg-emerald-50 text-[var(--color-success)] border-emerald-200"
//                   : message.type === "error"
//                   ? "bg-red-50 text-[var(--color-danger)] border-red-200"
//                   : "bg-blue-50 text-[var(--color-primary-600)] border-blue-200"
//               }`}
//             >
//               {message.type === "success" ? (
//                 <AiOutlineCheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
//               ) : (
//                 <AiOutlineExclamationCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
//               )}
//               <span>{message.text}</span>
//             </div>
//           )}

//           {step === 1 ? (
//             /* STEP 1: Enter Phone Number */
//             <form onSubmit={handleSendOtp} className="space-y-5">
//               <div>
//                 <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
//                   Enter Mobile Number
//                 </label>
//                 <div className="relative flex items-center">
//                   <div className="absolute left-3.5 flex items-center gap-1 text-slate-500 font-semibold text-sm border-r border-slate-200 pr-2">
//                     <AiOutlinePhone className="w-4 h-4 text-[var(--color-primary-600)]" />
//                     <span>+91</span>
//                   </div>
//                   <input
//                     type="tel"
//                     maxLength={10}
//                     placeholder="9876543210"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
//                     required
//                     className="w-full pl-20 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] focus:bg-white transition-all"
//                   />
//                 </div>
//                 <p className="text-[11px] text-slate-500 mt-2">
//                   An OTP will be sent via SMS to verify your mobile number.
//                 </p>
//               </div>

//               {/* Action Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-3.5 px-4 bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] active:scale-[0.99] text-white font-semibold text-sm rounded-xl shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
//               >
//                 {loading ? (
//                   <>
//                     <AiOutlineReload className="w-4 h-4 animate-spin" />
//                     Sending OTP...
//                   </>
//                 ) : (
//                   <>
//                     Get Verification OTP
//                     <AiOutlineArrowRight className="w-4 h-4" />
//                   </>
//                 )}
//               </button>
//             </form>
//           ) : (
//             /* STEP 2: Enter OTP Code */
//             <form onSubmit={handleVerifyOtp} className="space-y-5">
//               <div>
//                 <div className="flex justify-between items-center mb-2">
//                   <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
//                     6-Digit Verification Code
//                   </label>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setStep(1);
//                       setMessage(null);
//                     }}
//                     className="text-xs font-medium text-[var(--color-primary-600)] hover:underline"
//                   >
//                     Change Number
//                   </button>
//                 </div>

//                 <div className="relative flex items-center">
//                   <AiOutlineLock className="w-4 h-4 absolute left-3.5 text-[var(--color-primary-600)]" />
//                   <input
//                     type="text"
//                     maxLength={6}
//                     placeholder="123456"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
//                     required
//                     className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-center tracking-[0.5em] text-lg font-bold placeholder:tracking-normal placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] focus:bg-white transition-all"
//                   />
//                 </div>
//               </div>

//               {/* Verify Button */}
//               <button
//                 type="submit"
//                 disabled={loading || otp.length < 6}
//                 className="w-full py-3.5 px-4 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] active:scale-[0.99] text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
//               >
//                 {loading ? (
//                   <>
//                     <AiOutlineReload className="w-4 h-4 animate-spin" />
//                     Verifying OTP...
//                   </>
//                 ) : (
//                   <>
//                     Verify & Login
//                     <AiOutlineSafety className="w-4 h-4" />
//                   </>
//                 )}
//               </button>

//               <div className="text-center">
//                 <button
//                   type="button"
//                   onClick={handleSendOtp}
//                   disabled={loading}
//                   className="text-xs font-semibold text-slate-500 hover:text-[var(--color-primary-600)] transition-colors inline-flex items-center gap-1"
//                 >
//                   Didn't receive code? <span className="underline">Resend OTP</span>
//                 </button>
//               </div>
//             </form>
//           )}

//           {/* Trust Footer Badges */}
//           <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-around text-slate-500 text-[11px] font-medium">
//             <div className="flex items-center gap-1.5">
//               <AiOutlineSafety className="w-4 h-4 text-[var(--color-success)]" />
//               100% Verified
//             </div>
//             <div className="h-3 w-px bg-slate-200" />
//             <div className="flex items-center gap-1.5">
//               <AiOutlineLock className="w-3.5 h-3.5 text-[var(--color-primary-600)]" />
//               Encrypted SSL
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hidden Firebase reCAPTCHA */}
//       <div id="recaptcha-container" />
//     </div>
//   );
// }



"use client";

import { useState, FormEvent } from "react";
import { GoogleLogin } from "@react-oauth/google";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineSafety,
  AiOutlineArrowRight,
  AiOutlineReload,
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true); // true = Login, false = Register
  
  // Form States
  const [fullName, setFullName] = useState<string>("");
  const [loginInput, setLoginInput] = useState<string>(""); // Email or Mobile Number
  const [email, setEmail] = useState<string>("");
  const [mobileNo, setMobileNo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);

  // Email/Password & Phone Form Submit Handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Validation
    if (isLogin && (!loginInput || !password)) {
      setMessage({ type: "error", text: "Please enter your Email/Mobile and Password." });
      setLoading(false);
      return;
    }

    if (!isLogin && (!fullName || !email || !mobileNo || !password)) {
      setMessage({ type: "error", text: "Please fill in all registration fields." });
      setLoading(false);
      return;
    }

    if (!isLogin && mobileNo.replace(/\D/g, "").length < 10) {
      setMessage({ type: "error", text: "Please enter a valid 10-digit mobile number." });
      setLoading(false);
      return;
    }

    try {
      // Backend Endpoints
      const endpoint = isLogin 
        ? "http://localhost:5000/api/user/login" 
        : "http://localhost:5000/api/user/register-new-user";

      const payload = isLogin 
        ? { input: loginInput, password } 
        : { fullName, email, mobileNo: mobileNo.replace(/\D/g, ""), password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include", // For httpOnly Auth Cookies
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage({ 
          type: "success", 
          text: isLogin ? "Login successful! Redirecting..." : "Account created successfully! Redirecting..." 
        });
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } else {
        setMessage({ type: "error", text: data.message || "Authentication failed. Please try again." });
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      setMessage({ type: "error", text: "Server connection failed. Please check backend server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--color-surface-light)]">
      {/* Background Subtle Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-primary-100)] opacity-60 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-orange-100 opacity-50 blur-3xl" />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-[var(--color-surface-card)] rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        
        {/* Header Branding */}
        <div className="bg-[var(--color-primary-900)] p-6 text-white text-center relative overflow-hidden">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md mb-3 border border-white/20">
            <AiOutlineSafety className="w-6 h-6 text-orange-400" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Bharti Bazar</h1>
          <p className="text-xs text-blue-200 mt-1">
            Trusted B2B Marketplace Portal
          </p>
        </div>

        {/* Tab Switcher (Login / Register) */}
        <div className="flex border-b border-slate-100 bg-[var(--color-primary-50)] text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setIsLogin(true); setMessage(null); }}
            className={`flex-1 py-3 text-center cursor-pointer transition-colors ${
              isLogin ? "bg-[var(--color-primary-600)] text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sign In (Login)
          </button>
          <button
            type="button"
            onClick={() => { setIsLogin(false); setMessage(null); }}
            className={`flex-1 py-3 text-center cursor-pointer transition-colors ${
              !isLogin ? "bg-[var(--color-primary-600)] text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6 sm:p-8">
          
          {/* Status Alert Message */}
          {message && (
            <div
              className={`mb-6 p-3.5 rounded-xl text-xs font-medium flex items-start gap-2.5 border ${
                message.type === "success"
                  ? "bg-emerald-50 text-[var(--color-success)] border-emerald-200"
                  : message.type === "error"
                  ? "bg-red-50 text-[var(--color-danger)] border-red-200"
                  : "bg-blue-50 text-[var(--color-primary-600)] border-blue-200"
              }`}
            >
              {message.type === "success" ? (
                <AiOutlineCheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
              ) : (
                <AiOutlineExclamationCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* Google Login Button Component */}
          <div className="w-full mb-5 flex justify-center">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  setLoading(true);
                  setMessage({ type: "info", text: "Authenticating with Google..." });

                  const response = await fetch("http://localhost:5000/api/user/google-login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token: credentialResponse.credential }),
                    credentials: "include",
                  });

                  const data = await response.json();

                  if (response.ok && data.success) {
                    setMessage({ type: "success", text: "Google login successful! Redirecting..." });
                    setTimeout(() => {
                      window.location.href = "/dashboard";
                    }, 1500);
                  } else {
                    setMessage({ type: "error", text: data.message || "Google authentication failed." });
                  }
                } catch (err) {
                  console.error("Google auth error:", err);
                  setMessage({ type: "error", text: "Google login failed on server." });
                } finally {
                  setLoading(false);
                }
              }}
              onError={() => {
                setMessage({ type: "error", text: "Google Sign-In failed. Please try again." });
              }}
              theme="outline"
              size="large"
              width="100%"
              text="continue_with"
            />
          </div>

          <div className="relative flex items-center justify-center mb-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <span className="relative px-3 bg-[var(--color-surface-card)] text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Or with email / phone
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* LOGIN FORM FIELDS */}
            {isLogin ? (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Email or Mobile Number
                </label>
                <div className="relative flex items-center">
                  <AiOutlineUser className="w-4 h-4 absolute left-3.5 text-[var(--color-primary-600)]" />
                  <input
                    type="text"
                    placeholder="Enter email or 10-digit mobile"
                    value={loginInput}
                    onChange={(e) => setLoginInput(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] focus:bg-white transition-all"
                  />
                </div>
              </div>
            ) : (
              /* REGISTER FORM FIELDS */
              <>
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Full Name / Business Name
                  </label>
                  <div className="relative flex items-center">
                    <AiOutlineUser className="w-4 h-4 absolute left-3.5 text-[var(--color-primary-600)]" />
                    <input
                      type="text"
                      placeholder="Rahul Traders"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <AiOutlineMail className="w-4 h-4 absolute left-3.5 text-[var(--color-primary-600)]" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Mobile Number
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 flex items-center gap-1 text-slate-500 font-semibold text-sm border-r border-slate-200 pr-2">
                      <AiOutlinePhone className="w-4 h-4 text-[var(--color-primary-600)]" />
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="9876543210"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, ""))}
                      required
                      className="w-full pl-20 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                Password
              </label>
              <div className="relative flex items-center">
                <AiOutlineLock className="w-4 h-4 absolute left-3.5 text-[var(--color-primary-600)]" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 px-4 bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] active:scale-[0.98] text-white font-semibold text-sm rounded-xl shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <AiOutlineReload className="w-4 h-4 animate-spin" />
                  {isLogin ? "Signing In..." : "Creating Account..."}
                </>
              ) : (
                <>
                  {isLogin ? "Sign In to Dashboard" : "Register Business Account"}
                  <AiOutlineArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Toggle Link between Login & Register */}
          <div className="mt-6 text-center text-xs text-slate-500">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => { setIsLogin(false); setMessage(null); }}
                  className="font-semibold text-[var(--color-primary-600)] hover:underline cursor-pointer"
                >
                  Create one now
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => { setIsLogin(true); setMessage(null); }}
                  className="font-semibold text-[var(--color-primary-600)] hover:underline cursor-pointer"
                >
                  Sign in here
                </button>
              </p>
            )}
          </div>

          {/* Trust Footer Badges */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-around text-slate-500 text-[11px] font-medium">
            <div className="flex items-center gap-1.5">
              <AiOutlineSafety className="w-4 h-4 text-[var(--color-success)]" />
              100% Secure B2B
            </div>
            <div className="h-3 w-px bg-slate-200" />
            <div className="flex items-center gap-1.5">
              <AiOutlineLock className="w-3.5 h-3.5 text-[var(--color-primary-600)]" />
              Encrypted Data
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}