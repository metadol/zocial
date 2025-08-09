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
import { Avatar } from "../common/ui/Avatar";
import { Post as PostType } from "@prisma/client";

const Post = ({
  type,
  post,
}: {
  type?: "status" | "comment";
  post: PostType;
}) => {

   const isStatus = type === "status";
  // const fileDetails =
  // {
  //   "width": 600,
  //   "height": 480,
  //   "filePath": "/posts/event_MAlcZIoFd.jpg",
  //   "customMetadata": {
  //     "sensitive": false
  //   },
  //   "fileType": "image"
  // }
  // const isImage = fileDetails?.fileType === "image";
  // const isSensitive = fileDetails?.customMetadata?.sensitive;

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
          <Avatar path="general/avatar.png" />
        )}

        {/* Content Column */}
        <div className="flex flex-col flex-1 gap-2">
          {/* Header (contains avatar for status) */}
          <PostHeader isStatus={isStatus} post={post} />

          {/* Text Content */}
          <Link href="/user/status/123">
            <p className={isStatus ? "text-lg" : ""}>
             {post?.desc}
            </p>
          </Link>

          {/* Media */}
          {/* <PostMedia
            file={fileDetails}
            isImage={isImage}
            isSensitive={!!isSensitive}
          /> */}

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
