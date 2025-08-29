import { ImageEditorProps } from "@/types/interface";
import Image from "next/image";
import {
  BackIcon,
  OriginalIcon,
  SquareIcon,
  WideIcon,
} from "../common/icons/InteractionIcons";
import { useEffect } from "react";

const imageStyles: Record<"original" | "wide" | "square", string> = {
  original: "h-full object-contain",
  wide: "aspect-video object-cover",
  square: "aspect-square object-cover",
};

const typeOptions = [
  { key: "original", label: "Original", Icon: OriginalIcon },
  { key: "wide", label: "Wide", Icon: WideIcon },
  { key: "square", label: "Square", Icon: SquareIcon },
];

const ImageEditor = ({
  onClose,
  previewURL,
  settings,
  setSettings,
}: ImageEditorProps) => {
  const handleChange = (key: "type" | "sensitive", value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    console.log("settings", settings);
  }, [settings]);

  // useEffect(() => {
  //   // Disable scroll
  //   document.body.style.overflow = "hidden";
  
  //   // Cleanup on unmount
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, []);
  

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-75 z-[9999] flex items-center justify-center ">
      <div className="bg-black rounded-xl p-12 flex flex-col gap-6 w-[550px] my-2">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer">
            <BackIcon onClick={onClose} className="fill-white " />
            <h1 className="font-bold text-xl cursor-default">Media Settings</h1>
          </div>
          <button
            className="px-4 py-2 font-bold text-black bg-white rounded-full"
            onClick={onClose}
          >
            Save
          </button>
        </div>

        {/* Image Preview */}
        <div className="w-auto h-[500px] flex items-center  bg-[#121212]">
          <Image
            src={previewURL}
            alt="preview"
            width={500}
            height={500}
            className={`w-full ${imageStyles[settings.type]}`}
          />
        </div>

        {/* Settings */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            {typeOptions.map(({ key, label, Icon }) => (
              <button
                key={key}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleChange("type", key)}
              >
                <Icon
                  className={`${
                    settings.type === key ? "fill-iconBlue" : "fill-white"
                  }`}
                />
                {label}
              </button>
            ))}
          </div>

          <button
            className={`cursor-pointer py-1 px-4 rounded-full text-black ${
              settings.sensitive ? "bg-red-500" : "bg-white"
            }`}
            onClick={() => handleChange("sensitive", !settings.sensitive)}
          >
            Sensitive
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
