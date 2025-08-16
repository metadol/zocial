import IKImageWrapper from "../media/IKImageWrapper";
import Post from "../feed/Post";
import { Post as PostType } from "@prisma/client";
import { ActionButton } from "../common/ui/Button";

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
  return (
    <div className="border-t border-borderGray">
      <form className="flex flex-wrap items-center gap-4 p-4">
        <div className="w-10 h-10 min-w-[40px] rounded-full overflow-hidden">
          <IKImageWrapper
            path="general/avatar.png"
            alt="Lama Dev"
            width={100}
            height={100}
          />
        </div>

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
