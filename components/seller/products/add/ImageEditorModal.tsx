"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FiCrop,
  FiRotateCw,
  FiScissors,
  FiZap,
  FiSliders,
  FiPlus,
  FiX,
  FiCheck,
  FiBookmark,
} from "react-icons/fi";

interface ImageEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  onAddMoreImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
  onSaveCroppedImage: (croppedUrl: string) => void;
}

export default function ImageEditorModal({
  isOpen,
  onClose,
  images,
  onAddMoreImages,
  onRemoveImage,
  onSaveCroppedImage,
}: ImageEditorModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTool, setActiveTool] = useState<string>("crop");
  const [rotation, setRotation] = useState(0);

  // Crop Box Position & Size (Percentages)
  const [cropBox, setCropBox] = useState({ x: 10, y: 10, width: 80, height: 60 });
  
  // Dragging & Resizing States
  const [isDragging, setIsDragging] = useState(false);
  const [resizeHandle, setResizeHandle] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const currentImage = images[selectedIndex] || images[0];
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset crop box on image selection change
  useEffect(() => {
    setCropBox({ x: 10, y: 10, width: 80, height: 60 });
    setRotation(0);
  }, [selectedIndex]);

  if (!isOpen || images.length === 0) return null;

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // Mouse Down - Start Dragging or Resizing
  const handleMouseDown = (e: React.MouseEvent, handleType: string | null = null) => {
    e.stopPropagation();
    if (handleType) {
      setResizeHandle(handleType);
    } else {
      setIsDragging(true);
    }
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  // Mouse Move - Move or Resize Crop Box
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && !resizeHandle) return;

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    // Moving Entire Crop Box
    if (isDragging) {
      setCropBox((prev) => ({
        ...prev,
        x: Math.max(0, Math.min(100 - prev.width, prev.x + dx * 0.15)),
        y: Math.max(0, Math.min(100 - prev.height, prev.y + dy * 0.15)),
      }));
    }

    // Resizing Handles (Bada / Chhota Karne Ke Liye)
    if (resizeHandle) {
      setCropBox((prev) => {
        let { x, y, width, height } = prev;

        if (resizeHandle.includes("right")) {
          width = Math.max(15, Math.min(100 - x, width + dx * 0.15));
        }
        if (resizeHandle.includes("bottom")) {
          height = Math.max(15, Math.min(100 - y, height + dy * 0.15));
        }
        if (resizeHandle.includes("left")) {
          const newWidth = Math.max(15, width - dx * 0.15);
          x = Math.max(0, x + (width - newWidth));
          width = newWidth;
        }
        if (resizeHandle.includes("top")) {
          const newHeight = Math.max(15, height - dy * 0.15);
          y = Math.max(0, y + (height - newHeight));
          height = newHeight;
        }

        return { x, y, width, height };
      });
    }

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setResizeHandle(null);
  };

  // Canvas Crop & Save
  const handleCropAndSave = () => {
    if (!imageRef.current) return;

    const img = imageRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const cropX = (cropBox.x / 100) * img.naturalWidth;
    const cropY = (cropBox.y / 100) * img.naturalHeight;
    const cropWidth = (cropBox.width / 100) * img.naturalWidth;
    const cropHeight = (cropBox.height / 100) * img.naturalHeight;

    canvas.width = cropWidth;
    canvas.height = cropHeight;

    ctx.drawImage(
      img,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight
    );

    const croppedDataUrl = canvas.toDataURL("image/png");
    onSaveCroppedImage(croppedDataUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="bg-[#1e232a] text-slate-100 w-full max-w-5xl h-[85vh] rounded-2xl border border-slate-700/60 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Dark Header */}
        <div className="px-4 py-3 bg-[#181c22] border-b border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <h3 className="text-sm font-bold tracking-wide text-slate-200">
              Product Image Studio & Photo Crop Editor
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors cursor-pointer"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Workspace Body */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Toolbar */}
          <div className="w-20 bg-[#16191e] border-r border-slate-800 flex flex-col items-center py-4 gap-5 shrink-0 select-none">
            <button
              onClick={() => setActiveTool("crop")}
              className={`flex flex-col items-center gap-1.5 text-[10px] font-semibold w-full py-2 transition-all cursor-pointer ${
                activeTool === "crop"
                  ? "text-teal-400 border-l-2 border-teal-400 bg-teal-500/10"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FiCrop size={18} />
              <span>Crop</span>
            </button>

            <button
              onClick={handleRotate}
              className="flex flex-col items-center gap-1.5 text-[10px] font-semibold text-slate-400 hover:text-slate-200 w-full py-2 cursor-pointer transition-all"
            >
              <FiRotateCw size={18} />
              <span>Rotate</span>
            </button>

            <button
              onClick={() => setActiveTool("remove-bg")}
              className={`flex flex-col items-center gap-1.5 text-[10px] font-semibold w-full py-2 transition-all cursor-pointer ${
                activeTool === "remove-bg"
                  ? "text-teal-400 border-l-2 border-teal-400 bg-teal-500/10"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FiScissors size={18} />
              <span className="text-center leading-tight">Remove<br />Background</span>
            </button>

            <button
              onClick={() => setActiveTool("enhance")}
              className={`flex flex-col items-center gap-1.5 text-[10px] font-semibold w-full py-2 transition-all cursor-pointer ${
                activeTool === "enhance"
                  ? "text-teal-400 border-l-2 border-teal-400 bg-teal-500/10"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FiZap size={18} />
              <span>Enhance</span>
            </button>

            <button
              onClick={() => setActiveTool("filters")}
              className={`flex flex-col items-center gap-1.5 text-[10px] font-semibold w-full py-2 relative transition-all cursor-pointer ${
                activeTool === "filters"
                  ? "text-teal-400 border-l-2 border-teal-400 bg-teal-500/10"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span className="absolute -top-1 right-2 bg-amber-500 text-[8px] text-slate-950 font-black px-1 rounded">
                NEW
              </span>
              <FiSliders size={18} />
              <span className="text-center leading-tight">Preset<br />Filters</span>
            </button>
          </div>

          {/* Canvas Area with Resizable Cropping Box */}
          <div
            className="flex-1 bg-[#121418] p-6 flex flex-col items-center justify-center relative overflow-hidden select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div
              className="w-full h-full max-w-xl max-h-[480px] relative flex items-center justify-center p-2 rounded-xl border border-slate-700/50 bg-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #1c2026 25%, transparent 25%), linear-gradient(-45deg, #1c2026 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1c2026 75%), linear-gradient(-45deg, transparent 75%, #1c2026 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              }}
            >
              {/* Preview Image */}
              <img
                ref={imageRef}
                src={currentImage}
                alt="Selected preview"
                className="max-h-full max-w-full object-contain pointer-events-none transition-transform duration-200"
                style={{ transform: `rotate(${rotation}deg)` }}
              />

              {/* Interactive Resizable Cropping Selection Box */}
              {activeTool === "crop" && (
                <div
                  onMouseDown={(e) => handleMouseDown(e, null)}
                  style={{
                    left: `${cropBox.x}%`,
                    top: `${cropBox.y}%`,
                    width: `${cropBox.width}%`,
                    height: `${cropBox.height}%`,
                  }}
                  className="absolute border-2 border-sky-400 bg-sky-400/10 cursor-move shadow-2xl flex flex-col justify-between p-1 group"
                >
                  {/* Grid Guidelines */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                    <div className="border-r border-b border-sky-400/30"></div>
                    <div className="border-r border-b border-sky-400/30"></div>
                    <div className="border-b border-sky-400/30"></div>
                    <div className="border-r border-b border-sky-400/30"></div>
                    <div className="border-r border-b border-sky-400/30"></div>
                    <div className="border-b border-sky-400/30"></div>
                    <div className="border-r border-sky-400/30"></div>
                    <div className="border-r border-sky-400/30"></div>
                    <div></div>
                  </div>

                  {/* 4 Interactive Resizing Corner Handles (Top-Left, Top-Right, Bottom-Left, Bottom-Right) */}
                  <div
                    onMouseDown={(e) => handleMouseDown(e, "top-left")}
                    className="w-3.5 h-3.5 bg-sky-400 border border-white absolute -top-1.5 -left-1.5 cursor-nwse-resize z-20 rounded-xs shadow-sm hover:scale-125 transition-transform"
                  ></div>

                  <div
                    onMouseDown={(e) => handleMouseDown(e, "top-right")}
                    className="w-3.5 h-3.5 bg-sky-400 border border-white absolute -top-1.5 -right-1.5 cursor-nesw-resize z-20 rounded-xs shadow-sm hover:scale-125 transition-transform"
                  ></div>

                  <div
                    onMouseDown={(e) => handleMouseDown(e, "bottom-left")}
                    className="w-3.5 h-3.5 bg-sky-400 border border-white absolute -bottom-1.5 -left-1.5 cursor-nesw-resize z-20 rounded-xs shadow-sm hover:scale-125 transition-transform"
                  ></div>

                  <div
                    onMouseDown={(e) => handleMouseDown(e, "bottom-right")}
                    className="w-3.5 h-3.5 bg-sky-400 border border-white absolute -bottom-1.5 -right-1.5 cursor-nwse-resize z-20 rounded-xs shadow-sm hover:scale-125 transition-transform"
                  ></div>

                  {/* Center Plus Marker */}
                  <div className="m-auto text-sky-400 font-bold text-xs pointer-events-none opacity-80">+</div>
                </div>
              )}
            </div>

            {/* Red Button: "Do you want to save the Cropped Image?" */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <button
                type="button"
                onClick={handleCropAndSave}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer border border-red-500"
              >
                <FiCrop size={16} />
                <span>Do you want to save the Cropped Image?</span>
              </button>
            </div>
          </div>

          {/* Right Sidebar - Multi Photo Thumbnails & Remove Cross Action */}
          <div className="w-56 bg-[#16191e] border-l border-slate-800 p-4 flex flex-col justify-between shrink-0">
            <div>
              <h4 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
                Uploaded Photos ({images.length})
              </h4>

              <div className="grid grid-cols-2 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
                {images.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 h-20 cursor-pointer transition-all bg-slate-900 group ${
                      selectedIndex === idx
                        ? "border-teal-400 shadow-md shadow-teal-500/20"
                        : "border-slate-700/60 hover:border-slate-500"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumb ${idx}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Bookmark Ribbon for 1st Photo */}
                    {idx === 0 && (
                      <div className="absolute top-0 left-1 text-amber-400">
                        <FiBookmark size={14} className="fill-amber-400" />
                      </div>
                    )}

                    {/* Red Cross (X) Button to Remove Image */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveImage(idx);
                        if (selectedIndex >= images.length - 1) {
                          setSelectedIndex(Math.max(0, images.length - 2));
                        }
                      }}
                      className="absolute top-1 right-1 bg-red-600/90 hover:bg-red-600 text-white p-1 rounded-full shadow-md transition-transform hover:scale-110 cursor-pointer"
                      title="Remove Photo"
                    >
                      <FiX size={10} />
                    </button>
                  </div>
                ))}

                {/* Add More Photos Card Button */}
                <label className="border-2 border-dashed border-slate-700 hover:border-teal-400 rounded-lg h-20 flex flex-col items-center justify-center text-slate-400 hover:text-teal-400 cursor-pointer transition-colors bg-slate-900/50">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={onAddMoreImages}
                    className="hidden"
                  />
                  <FiPlus size={20} />
                  <span className="text-[9px] font-bold mt-1 text-center">Add More</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <FiBookmark size={12} className="fill-amber-400" />
                <span className="text-[11px]">First Photo</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#181c22] border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-slate-300 hover:text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleCropAndSave}
            className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-extrabold px-6 py-2 rounded-lg text-xs transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <FiCheck size={16} />
            <span>Upload Photo & Continue</span>
          </button>
        </div>

      </div>
    </div>
  );
}