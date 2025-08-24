import Comments from "@/components/features/Comments";
import Post from "@/components/feed/Post";
import FeedHeader from "@/components/feed/FeedHeader";
import { getCurrentUserId } from "@/utils/currentuser";
import { getPostById } from "@/utils/queries/singlepost";

export default async function Page({ params }: { params: { username: string, postId: string } }) {
  const { postId } = params;

  const userId = await getCurrentUserId();

  const post = await getPostById(Number(postId), userId);

  return (  
    <div>
      <FeedHeader title="Post" />
      <Post type="status" post={post} />
      <Comments
        comments={post?.comments}
        postId={post?.id}
        username={post?.user?.username} />
    </div>
  );
}
