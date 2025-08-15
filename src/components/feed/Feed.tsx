import Post from "./Post";
import { auth } from "@clerk/nextjs/server";
import { FeedProps } from "@/types/interface";
import { fetchFeedPosts } from "@/utils/queries/feed";
import InfiniteFeed from "./InfiniteFeed";
import { getCurrentUserId } from "@/utils/currentuser";

const Feed = async ({ userProfileId }: FeedProps) => {

  const userId = await getCurrentUserId();

  const { posts } = await fetchFeedPosts({ loggedInUserId: userId, userProfileId });


  if (!posts.length) return null;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}

      <InfiniteFeed />
    </div>
  );
};

export default Feed;
