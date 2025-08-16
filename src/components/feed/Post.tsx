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


type PostwithDetails = PostType & {
  user: {
    displayName: string | null;
    username: string | null;
    img: string | null;
  };
  rePost?: PostwithDetails; // <-- recursive, includes _count
  _count: {
    comments: number;
    likes: number;
    rePosts: number;
  };
};



const Post = ({
  type,
  post,
}: {
  type?: "status" | "comment";
  post: PostwithDetails;
}) => {

  const origanalPost = post.rePost || post;
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
      {post?.rePostId &&
        <div className="flex items-center gap-2 mb-2 text-sm font-bold text-textPrimary">
          <InteractionButton icon={RepostIcon} />
          <span>{post?.user?.displayName} reposted</span>
        </div>
      }

      {/* Layout Adjusted Here */}
      <div className={`flex ${isStatus ? "flex-col" : "gap-4"}`}>
        {/* Avatar outside (only for non-status posts) */}
        {!isStatus && (
          <Avatar path={origanalPost?.user.img} />
        )}

        {/* Content Column */}
        <div className="flex flex-col flex-1 gap-2">
          {/* Header (contains avatar for status) */}
          <PostHeader
            isStatus={isStatus}
            post={origanalPost}
            user={origanalPost?.user}
            userImg={origanalPost?.user?.img || "general/no-avatar.jpg"}
          />

          {/* Text Content */}
          <Link href={`/${origanalPost?.user?.username}/status/${origanalPost?.id}`} >
            <p className={isStatus ? "text-lg" : ""}>
              {origanalPost?.desc}
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
          <PostInteractions
            count={origanalPost?._count}
            isLiked={!!origanalPost?.likes?.length}
            isReposted={!!origanalPost?.rePosts?.length}
            isSaved={!!origanalPost?.saves?.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
