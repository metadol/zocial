// PostHeader.tsx
import IKImageWrapper from "../media/IKImageWrapper";
import Link from "next/link";
import PostInfo from "./PostInfo";
import { Avatar } from "../common/ui/Avatar";
import { format } from "timeago.js";
import { Post as PostType } from "@prisma/client";

interface PostHeaderProps {
  isStatus: boolean;
  post: PostType;
  user?: {
    displayName: string | null;
    username: string | null;
  };
  userImg: string | null;
}

export default function PostHeader({ isStatus, post, user, userImg }: PostHeaderProps) {
  return (
    <div className="w-full flex justify-between">
      <Link href={`/${user?.username ?? ''}`} className="flex gap-4">
        {/* Avatar for status */}
        {isStatus && userImg && (
          <Avatar path={userImg} />
        )}

        {/* User Info */}
        <div
          className={`text-textPrimary ${isStatus
            ? "flex flex-col gap-0 items-start"
            : "flex items-center gap-2 flex-wrap"
            }`}
        >
          <h1 className="font-bold text-white text-md">{user?.displayName}</h1>
          <span className={isStatus ? "text-sm" : ""}>@{user?.username}</span>
          {!isStatus && post && <span>{format(post.createdAt)}</span>}
        </div>
      </Link>
      <PostInfo />
    </div>
  );
}
