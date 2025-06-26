// PostHeader.tsx
import IKImageWrapper from "../media/IKImageWrapper";
import Link from "next/link";
import PostInfo from "./PostInfo";

interface PostHeaderProps {
  isStatus: boolean;
}

export default function PostHeader({ isStatus }: PostHeaderProps) {
  return (
    <div className="w-full flex justify-between">
      <Link href="/lama" className="flex gap-4">
        {/* Avatar for status */}
        {isStatus && (
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <IKImageWrapper
              path="general/avatar.png"
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
        )}

        {/* User Info */}
        <div
          className={`text-textPrimary ${
            isStatus
              ? "flex flex-col gap-0 items-start"
              : "flex items-center gap-2 flex-wrap"
          }`}
        >
          <h1 className="font-bold text-white text-md">Lama</h1>
          <span className={isStatus ? "text-sm" : ""}>@lamawebdev</span>
          {!isStatus && <span>1 day ago</span>}
        </div>
      </Link>
      <PostInfo />
    </div>
  );
}
