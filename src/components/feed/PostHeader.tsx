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
}

export default function PostHeader({ isStatus, post }: PostHeaderProps) {
  return (
    <div className="w-full flex justify-between">
      <Link href="/lama" className="flex gap-4">
        {/* Avatar for status */}
        {isStatus && (
          <Avatar path="general/avatar.png" />
        )}

        {/* User Info */}
        <div
          className={`text-textPrimary ${isStatus
            ? "flex flex-col gap-0 items-start"
            : "flex items-center gap-2 flex-wrap"
            }`}
        >
          <h1 className="font-bold text-white text-md">Lama</h1>
          <span className={isStatus ? "text-sm" : ""}>@lamawebdev</span>
          {!isStatus && post && <span>{format(post.createdAt)}</span>}
        </div>
      </Link>
      <PostInfo />
    </div>
  );
}
