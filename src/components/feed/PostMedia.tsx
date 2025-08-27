// PostMedia.tsx
import IKImageWrapper from "../media/IKImageWrapper";
import IKVideoWrapper from "../media/IKIVideoWrapper";
import { FileDetailsResponse } from "@/types/interface";

interface PostMediaProps {
  file: string | null | undefined;
  isImage: boolean;
  isSensitive: boolean;
  width?: number;
  height?: number | undefined;
}

export default function PostMedia({
  file,
  isImage,
  isSensitive,
  width,
  height,
}: PostMediaProps) {
  if (!file) return null;

  const blurClass = isSensitive ? " rounded-xl blur-lg" : "rounded-xl";

  return isImage ? (
    <IKImageWrapper
      path={file}
      width={width}
      height={height}
      alt="post"
      className={blurClass}
    />
  ) : (
    <IKVideoWrapper path={file} className={blurClass} />
  );
}
