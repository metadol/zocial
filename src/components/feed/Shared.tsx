"use client";

import { useState, useRef } from "react";
import IKImageWrapper from "../media/IKImageWrapper";
import Image from "next/image";
import ImageEditor from "../media/ImageEditor";
import { shareAction } from "@/utils/actions";

const PostIcons = ["gif", "poll", "emoji", "schedule", "location"];

const imageStyles: Record<"original" | "wide" | "square", string> = {
  original: "h-full object-contain",
  wide: "aspect-video object-cover",
  square: "aspect-square object-cover",
};

const Shared = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({ type: "original", sensitive: false });
  // Create a reference to the file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setMedia(event.target.files[0]);
    }
  };

  // Function to clear media and reset file input
  const clearMedia = () => {
    setMedia(null);
    // Reset the file input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="flex gap-4 p-4"
      action={(formData) => shareAction(formData, settings)}
    >
      {/* AVATAR */}
      <div className="relative w-10 h-10 overflow-hidden rounded-full">
        <IKImageWrapper
          path="general/avatar.png"
          width={100}
          height={100}
          alt="avatar"
        />
      </div>

      {/* OTHERS */}
      <div className="flex flex-col flex-1 gap-4 ">
        <input
          type="text"
          name="description"
          placeholder="What's happening?"
          className="text-xl bg-transparent outline-none placeholder:text-textPrimary"
        />
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={previewURL}
              alt="preview"
              width={600}
              height={600}
              className={`w-full ${imageStyles[settings.type]}`}
            />
            <div
              className="absolute cursor-pointer top-1 left-1 bg-black bg-opacity-50 py-1 px-4 text-white rounded-full font-bold text-sm"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="absolute cursor-pointer top-1 right-1 bg-black bg-opacity-50 py-1 px-4 text-white rounded-full font-bold text-sm flex items-center justify-center"
              onClick={clearMedia}>
              Close
            </div>
          </div>
        )}
        {media?.type.includes("video") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <video
              src={previewURL}
              controls
              className={`w-full ${imageStyles[settings.type]}`}
            />
            <div
              className="absolute cursor-pointer top-1 right-1 bg-black bg-opacity-50 h-8 w-8 text-white rounded-full font-bold text-sm flex items-center justify-center"
              onClick={clearMedia}>
              C
            </div>
          </div>
        )}

        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="hidden"
              id="file"
              accept="image/*,video/*"
              ref={fileInputRef}
            />
            <label htmlFor="file">
              <IKImageWrapper
                path="icons/image.svg"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>
            {PostIcons.map((icon) => (
              <IKImageWrapper
                key={icon}
                path={`icons/${icon}.svg`}
                width={20}
                height={20}
                alt={icon}
                className="cursor-pointer"
              />
            ))}
          </div>
          <button className="px-4 py-2 font-bold text-black bg-white rounded-full">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
export default Shared;