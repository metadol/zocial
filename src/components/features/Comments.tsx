"use client";
import IKImageWrapper from "../media/IKImageWrapper";
import Post from "../feed/Post";
import { Post as PostType } from "@prisma/client";
import { ActionButton } from "../common/ui/Button";
import { useUser } from "@clerk/nextjs";
import { Avatar } from "../common/ui/Avatar";
import React from "react";
import { addComment } from "@/action";

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

  const [state, formAction, isPending] = React.useActionState(addComment, {
    success: false,
    error: false,
  });

  return (
    <div className={`${comments.length === 0 ? "border-y" : "border-t"} border-borderGray`}>
      <form className="flex flex-wrap items-center gap-4 p-4" action={formAction}>
        <Avatar src={user?.imageUrl} />

        {/* Fields are hidden inputs to pass data to the form action */}
        <input
          type="number"
          name="postId"
          hidden
          readOnly
          value={postId}
        />
        <input
          type="string"
          name="username"
          hidden
          readOnly
          value={username}
        />
        <input
          required
          type="text"
          name="desc"
          className="flex-1 min-w-[150px] bg-transparent outline-none p-2 text-xl"
          placeholder="Post your reply"
        />

        <ActionButton
          actionText={isPending ? "Replying" : "Reply"}
          disabled={isPending}
        />
      </form>

      {state.error && (
        <span className="text-red-300 p-4">Something went wrong!</span>
      )}

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
