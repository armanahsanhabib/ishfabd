"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DragAndDropImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true); // Add dragging visual effect
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false); // Remove dragging visual effect
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false); // Remove dragging visual effect

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length) {
      setSelectedFiles((prev) => [...prev, ...imageFiles]);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length) {
      setSelectedFiles((prev) => [...prev, ...imageFiles]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleRemoveFile = (indexToRemove) => {
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };

  const formatFileSize = (size) => {
    if (size < 1024) return `${size} bytes`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="image space-y-2 rounded-md border border-gray-200 bg-gray-50 p-6 pt-4">
      <label htmlFor="images" className="text-sm text-gray-600">
        প্রোডাক্টের ছবি
      </label>

      {/* Drag and Drop area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick} // Click to open file selector
        className={`flex aspect-video w-full cursor-pointer flex-col items-center justify-center gap-10 rounded-lg border-2 border-dashed p-4 text-center transition ${
          isDragging
            ? "border-blue-500 bg-blue-100"
            : "border-blue-400 bg-white"
        }`}
      >
        <Image
          src={"/icons/image-gallery.png"}
          alt="image icon"
          height={150}
          width={150}
          className="contrast-50"
        />
        <p className="text-gray-600">
          Drag & Drop files here or click to upload
        </p>
        <input
          type="file"
          name="images"
          id="images"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          ref={fileInputRef} // Reference for click
          className="hidden"
          required
        />
      </div>

      {/* Display selected files */}
      <div className="selected-files flex flex-col gap-3 pt-4">
        {selectedFiles.length > 0 &&
          selectedFiles.map((file, index) => (
            <div
              key={index}
              className="file-preview flex items-center justify-between gap-3 rounded-md border bg-white p-2 pr-4"
            >
              <div className="left flex max-w-full flex-grow items-center gap-3 truncate">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected file"
                  className="size-14 flex-none rounded-md border object-cover"
                />
                <div className="flex-grow truncate">
                  {/* Ensures filename takes up available space */}
                  <p className="truncate">{file.name}</p>
                  <p className="text-sm">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveFile(index)} // Remove file on click
                className="text-xl text-gray-600 transition-all hover:scale-110 hover:text-red-500"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DragAndDropImageUpload;
