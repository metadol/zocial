// Post.tsx
import { FC } from "react";
import { RepostIcon } from "../common/ui/InteractionIcons";
import IKImageWrapper from "../media/IKImageWrapper";
import InteractionButton from "../common/ui/InteractionButton";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteraction";
import { FileDetailsResponse, PostProps } from "@/types/interface";
import { imagekit } from "@/utils/utils";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import Link from "next/link";

const Post: FC<PostProps> = async ({ type = "post" }) => {

  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };


  const isStatus = type === "status";
  const fileDetails = await getFileDetails("67f51db1432c47641638ae4d");
  const isImage = fileDetails?.fileType === "image";
  const isSensitive = fileDetails?.customMetadata?.sensitive;

  return (
    <div className="p-4 border-t border-borderGray">
      {/* Repost Label */}
      <div className="flex items-center gap-2 mb-2 text-sm font-bold text-textPrimary">
        <InteractionButton icon={RepostIcon} />
        <span>lama dev reposted</span>
      </div>

      {/* Layout Adjusted Here */}
      <div className={`flex ${isStatus ? "flex-col" : "gap-4"}`}>
        {/* Avatar outside (only for non-status posts) */}
        {!isStatus && (
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <IKImageWrapper
              path="general/avatar.png"
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
        )}

        {/* Content Column */}
        <div className="flex flex-col flex-1 gap-2">
          {/* Header (contains avatar for status) */}
          <PostHeader isStatus={isStatus} />

          {/* Text Content */}
          <Link href="/user/status/123">
            <p className={isStatus ? "text-lg" : ""}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              aliquam excepturi quia, eaque distinctio tempore tempora incidunt
              magnam velit aliquid magni impedit mollitia voluptatum repudiandae
              laudantium nemo cum, nam id.
            </p>
          </Link>

          {/* Media */}
          <PostMedia
            file={fileDetails}
            isImage={isImage}
            isSensitive={!!isSensitive}
          />

          {/* Date only for status */}
          {isStatus && (
            <span className="text-textPrimary">5:54 PM · Apr 8, 2025</span>
          )}

          {/* Interaction Row */}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
