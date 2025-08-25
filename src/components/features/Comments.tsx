"use client";
import IKImageWrapper from "../media/IKImageWrapper";
import Post from "../feed/Post";
import { Post as PostType } from "@prisma/client";
import { ActionButton } from "../common/ui/Button";
import { useUser } from "@clerk/nextjs";
import { Avatar } from "../common/ui/Avatar";

type CommentWithDetails = PostType & {
  user: { displayName: string | null; username: string; img: string | null };
  _count: { likes: number; rePosts: number; comments: number };
  likes: { id: number }[];
  rePosts: { id: number }[];
  saves: { id: number }[];
};

const Comments = ({
  comments,
  postId,
  username,
}: {
  comments: CommentWithDetails[];
  postId: number;
  username: string;
}) => {

  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="border-t border-borderGray">
      <form className="flex flex-wrap items-center gap-4 p-4">
        <Avatar src={user?.imageUrl} />

        <input
          type="text"
          className="flex-1 min-w-[150px] bg-transparent outline-none p-2 text-xl"
          placeholder="Post your reply"
        />

        <ActionButton actionText="Reply" />
      </form>
      {comments.map((comment) => (
        <div key={comment.id} >
          <Post
            type="comment"
            post={comment}
          />
        </div>
      ))}
    </div>
  );
};

export default Comments;
