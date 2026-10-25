
// import React from "react";
// import SellerSidebar from "@/components/sidebar/SellerSidebar";

// export default function SellerLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="w-full min-h-screen bg-[var(--color-surface-light,#f8fafc)]">
//       <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start">
        
//         {/* Left Fixed Sidebar (Desktop par fixed rahega) */}
//         <aside className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
//           <SellerSidebar />
//         </aside>

//         {/* Right Scrollable Main Content */}
//         <main className="flex-1 w-full p-5 sm:p-7 min-w-0">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }

import React from "react";
import SellerSidebar from "@/components/sidebar/SellerSidebar";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-[var(--color-surface-light,#f8fafc)]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start">
        
        {/* Left Fixed Sidebar (Desktop par fixed/sticky, Mobile par drawer toggle) */}
        <aside className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto z-30">
          <SellerSidebar />
        </aside>

        {/* Right Scrollable Main Content */}
        <main className="flex-1 w-full p-4 sm:p-6 lg:p-7 min-w-0 pb-20 lg:pb-12">
          {children}
        </main>

      </div>
    </div>
  );
}