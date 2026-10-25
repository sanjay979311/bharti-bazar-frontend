


// "use client";

// import React, { useState } from "react";
// import { 
//   FiCamera, 
//   FiVideo, 
//   FiFileText, 
//   FiChevronUp, 
//   FiChevronDown, 
//   FiZap,
//   FiBookmark 
// } from "react-icons/fi";
// import ImageEditorModal from "./ImageEditorModal";


// export default function MediaUploader() {
//   const [uploadedImages, setUploadedImages] = useState<string[]>([]);
//   const [isEditorOpen, setIsEditorOpen] = useState(false);

//   // Handle files selection (supports multiple files)
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const filesArray = Array.from(e.target.files);
//       const newUrls = filesArray.map((file) => URL.createObjectURL(file));
//       setUploadedImages((prev) => [...prev, ...newUrls]);
//       setIsEditorOpen(true);
//     }
//   };

//   return (
//     <div className="space-y-3">
//       <div className="flex gap-2">
//         {/* Left Side Vertical Camera Slots */}
//         <div className="flex flex-col items-center gap-1">
//           <button type="button" className="text-slate-400 hover:text-slate-600 p-0.5">
//             <FiChevronUp size={14} />
//           </button>

//           {[1, 2, 3, 4, 5, 6].map((idx) => (
//             <label
//               key={idx}
//               className="w-8 h-8 sm:w-9 sm:h-9 border border-slate-200 rounded-md bg-white flex flex-col items-center justify-center text-slate-400 hover:border-[var(--color-primary-600,#2563eb)] hover:text-[var(--color-primary-600,#2563eb)] cursor-pointer transition-colors relative"
//             >
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />
//               {uploadedImages[idx - 1] ? (
//                 <img
//                   src={uploadedImages[idx - 1]}
//                   alt="Thumb"
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               ) : (
//                 <>
//                   <FiCamera className="text-xs" />
//                   <span className="text-[8px] leading-tight font-medium">Add</span>
//                 </>
//               )}
//             </label>
//           ))}

//           <button type="button" className="text-slate-400 hover:text-slate-600 p-0.5">
//             <FiChevronDown size={14} />
//           </button>
//         </div>

//         {/* Main Photo Upload Preview Box & Video/PDF Tabs */}
//         <div className="flex-1 flex flex-col border border-slate-200 rounded-lg overflow-hidden bg-white">
//           <div className="h-56 sm:h-64 flex flex-col items-center justify-center relative bg-slate-50">
//             {uploadedImages.length > 0 ? (
//               <div 
//                 onClick={() => setIsEditorOpen(true)}
//                 className="w-full h-full relative cursor-pointer group"
//               >
//                 <img
//                   src={uploadedImages[0]}
//                   alt="Primary product"
//                   className="w-full h-full object-contain p-2"
//                 />
//                 <div className="absolute top-2 left-2 bg-amber-500 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
//                   <FiBookmark size={10} className="fill-slate-900" />
//                   <span>Primary Photo</span>
//                 </div>

//                 <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
//                   <span>Edit in Studio</span>
//                   {uploadedImages.length > 1 && (
//                     <span className="bg-teal-500 text-slate-950 px-2 py-0.5 rounded-full text-[10px]">
//                       +{uploadedImages.length - 1} More
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100/60 transition-colors">
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="hidden"
//                 />
//                 <div className="flex flex-col items-center text-slate-400 space-y-2">
//                   <FiCamera className="text-4xl stroke-1 text-slate-400" />
//                   <span className="text-xs font-semibold text-slate-500">
//                     Add Photo (Select Multiple)
//                   </span>
//                 </div>
//               </label>
//             )}
//           </div>

//           {/* Bottom Tabs for Video & PDF */}
//           <div className="flex border-t border-slate-200 divide-x divide-slate-200 text-xs text-slate-600 bg-slate-50">
//             <label className="flex-1 py-3 flex items-center justify-center gap-1.5 hover:bg-white cursor-pointer transition-colors">
//               <input type="file" accept="video/*" className="hidden" />
//               <FiVideo className="text-slate-500 text-sm" />
//               <span className="text-[11px] font-medium text-slate-700">Add Video</span>
//             </label>

//             <label className="flex-1 py-3 flex items-center justify-center gap-1.5 hover:bg-white cursor-pointer transition-colors">
//               <input type="file" accept="application/pdf" className="hidden" />
//               <FiFileText className="text-slate-500 text-sm" />
//               <span className="text-[11px] font-medium text-slate-700">Add PDF</span>
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Tips link at bottom */}
//       <div className="flex items-center gap-1 text-xs text-[var(--color-primary-600,#2563eb)] font-semibold cursor-pointer hover:underline">
//         <FiZap className="text-amber-500" />
//         <span>Tips</span>
//       </div>

//       {/* Image Editor Modal Popup */}
//      <ImageEditorModal
//   isOpen={isEditorOpen}
//   onClose={() => setIsEditorOpen(false)}
//   images={uploadedImages}
//   onAddMoreImages={handleImageChange}
//   onRemoveImage={(removeIdx) => {
//     setUploadedImages((prev) => prev.filter((_, idx) => idx !== removeIdx));
//   }}
//   onSaveCroppedImage={(croppedUrl) => {
//     setUploadedImages((prev) => [croppedUrl, ...prev.slice(1)]);
//     setIsEditorOpen(false);
//   }}
// />
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import { 
  FiCamera, 
  FiVideo, 
  FiFileText, 
  FiChevronUp, 
  FiChevronDown, 
  FiZap,
  FiBookmark,
  FiTrash2
} from "react-icons/fi";
import ImageEditorModal from "./ImageEditorModal";

export default function MediaUploader() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Handle image upload / selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      const newUrls = filesArray.map((file) => URL.createObjectURL(file));
      setUploadedImages((prev) => [...prev, ...newUrls]);
      setIsEditorOpen(true);
    }
  };

  // Remove single image from list
  const handleRemoveImage = (indexToRemove: number) => {
    setUploadedImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {/* Left Side Vertical Camera Slots */}
        <div className="flex flex-col items-center gap-1">
          <button type="button" className="text-slate-400 hover:text-slate-600 p-0.5">
            <FiChevronUp size={14} />
          </button>

          {[1, 2, 3, 4, 5, 6].map((idx) => {
            const currentImg = uploadedImages[idx - 1];
            return (
              <div
                key={idx}
                className="w-8 h-8 sm:w-9 sm:h-9 border border-slate-200 rounded-md bg-white flex flex-col items-center justify-center text-slate-400 hover:border-[var(--color-primary-600,#2563eb)] hover:text-[var(--color-primary-600,#2563eb)] transition-colors relative group overflow-hidden"
              >
                {currentImg ? (
                  <>
                    <img
                      src={currentImg}
                      alt={`Thumb ${idx}`}
                      className="w-full h-full object-cover rounded-md"
                    />

                    {/* Hover Overlay with Expand/Crop SVG Icon */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                      <button
                        type="button"
                        onClick={() => setIsEditorOpen(true)}
                        className="p-1 text-white hover:text-teal-300 transition-transform hover:scale-110 cursor-pointer"
                        title="Crop / Edit Image"
                      >
                        {/* Custom Expand Crop SVG Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="14"
                          viewBox="0 0 24 24"
                          width="14"
                        >
                          <path
                            d="M15 19H19M19 19V15M19 19L15 15M9 5H5M5 5V9M5 5L9 9"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M15 5H19M19 5V9M19 5L15 9M9 19H5M5 19V15M5 19L9 15"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <FiCamera className="text-xs" />
                    <span className="text-[8px] leading-tight font-medium">Add</span>
                  </label>
                )}
              </div>
            );
          })}

          <button type="button" className="text-slate-400 hover:text-slate-600 p-0.5">
            <FiChevronDown size={14} />
          </button>
        </div>

        {/* Main Photo Upload Preview Box */}
        <div className="flex-1 flex flex-col border border-slate-200 rounded-lg overflow-hidden bg-white">
          <div className="h-56 sm:h-64 flex flex-col items-center justify-center relative bg-slate-50">
            {uploadedImages.length > 0 ? (
              <div className="w-full h-full relative group">
                <img
                  src={uploadedImages[0]}
                  alt="Primary product"
                  className="w-full h-full object-contain p-2"
                />

                {/* Primary Photo Badge */}
                <div className="absolute top-2 left-2 bg-amber-500 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                  <FiBookmark size={10} className="fill-slate-900" />
                  <span>Primary Photo</span>
                </div>

                {/* Hover Overlay with Custom SVG Crop Icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEditorOpen(true)}
                    className="p-2.5 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-transform hover:scale-110 shadow-lg cursor-pointer border border-white/20"
                    title="Open Crop Editor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path
                        d="M15 19H19M19 19V15M19 19L15 15M9 5H5M5 5V9M5 5L9 9"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M15 5H19M19 5V9M19 5L15 9M9 19H5M5 19V15M5 19L9 15"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRemoveImage(0)}
                    className="p-2.5 bg-red-600/90 hover:bg-red-600 text-white rounded-full transition-transform hover:scale-110 shadow-lg cursor-pointer"
                    title="Remove Image"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100/60 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <div className="flex flex-col items-center text-slate-400 space-y-2">
                  <FiCamera className="text-4xl stroke-1 text-slate-400" />
                  <span className="text-xs font-semibold text-slate-500">
                    Add Photo (Select Multiple)
                  </span>
                </div>
              </label>
            )}
          </div>

          {/* Bottom Tabs for Video & PDF */}
          <div className="flex border-t border-slate-200 divide-x divide-slate-200 text-xs text-slate-600 bg-slate-50">
            <label className="flex-1 py-3 flex items-center justify-center gap-1.5 hover:bg-white cursor-pointer transition-colors">
              <input type="file" accept="video/*" className="hidden" />
              <FiVideo className="text-slate-500 text-sm" />
              <span className="text-[11px] font-medium text-slate-700">Add Video</span>
            </label>

            <label className="flex-1 py-3 flex items-center justify-center gap-1.5 hover:bg-white cursor-pointer transition-colors">
              <input type="file" accept="application/pdf" className="hidden" />
              <FiFileText className="text-slate-500 text-sm" />
              <span className="text-[11px] font-medium text-slate-700">Add PDF</span>
            </label>
          </div>
        </div>
      </div>

      {/* Tips link at bottom */}
      <div className="flex items-center gap-1 text-xs text-[var(--color-primary-600,#2563eb)] font-semibold cursor-pointer hover:underline">
        <FiZap className="text-amber-500" />
        <span>Tips</span>
      </div>

      {/* Reusable Image Crop Studio Modal */}
      <ImageEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        images={uploadedImages}
        onAddMoreImages={handleImageChange}
        onRemoveImage={handleRemoveImage}
        onSaveCroppedImage={(croppedUrl) => {
          setUploadedImages((prev) => [croppedUrl, ...prev.slice(1)]);
          setIsEditorOpen(false);
        }}
      />
    </div>
  );
}