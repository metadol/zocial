import Post from "./Post";
import { auth } from "@clerk/nextjs/server";
import { FeedProps } from "@/types/interface";
import { fetchFeedPosts } from "@/utils/feed";
import InfiniteFeed from "./InfiniteFeed";

const Feed = async ({ userProfileId }: FeedProps) => {
  const loggedInUserId = "user5"; // Replace with: const { userId } = await auth();

  const { posts } = await fetchFeedPosts({ loggedInUserId, userProfileId });

  if (!posts.length) return null;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post}/>
        </div>
      ))}

      <InfiniteFeed />
    </div>
  );
};

export default Feed;
