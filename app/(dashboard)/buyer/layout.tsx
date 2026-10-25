import React from "react";
import BuyerSidebar from "@/components/sidebar/BuyerSidebar";

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-[var(--color-surface-light)]">
      {/* Flex container with fixed ideal sidebar width */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start">
        
        {/* Balanced Sidebar (Fixed 250px - 260px width on desktop) */}
        <aside className="w-full lg:w-[250px] xl:w-[260px] shrink-0">
          <BuyerSidebar />
        </aside>

        {/* Flexible Main Content Area */}
        <main className="flex-1 w-full p-5 sm:p-7 min-w-0">
          {children}
        </main>

      </div>
    </div>
  );
}