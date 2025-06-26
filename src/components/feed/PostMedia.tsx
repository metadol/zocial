// PostMedia.tsx
import IKImageWrapper from "../media/IKImageWrapper";
import IKVideoWrapper from "../media/IKIVideoWrapper";
import { FileDetailsResponse } from "@/types/interface";

interface PostMediaProps {
  file: FileDetailsResponse;
  isImage: boolean;
  isSensitive: boolean;
}

export default function PostMedia({
  file,
  isImage,
  isSensitive,
}: PostMediaProps) {
  if (!file) return null;

  const blurClass = isSensitive ? " rounded-xl blur-lg" : "rounded-xl";

  return isImage ? (
    <IKImageWrapper
      path={file.filePath}
      width={file.width}
      height={file.height}
      alt="post"
      className={blurClass}
    />
  ) : (
    <IKVideoWrapper path={file.filePath} className={blurClass} />
  );
}
