/**
 * Feed Component
 * --------------
 * - Fetches and displays posts for:
 *    1. The Home Page → shows posts from current user and users they follow.
 *    2. A User Profile Page → shows only that user's posts.
 * - Uses Prisma for DB access.
 * - Uses a hardcoded `userId` for now — replace with Clerk auth later.
 * - Only top-level posts are fetched (no replies).
 * - Posts are ordered by newest first.
 * - If no posts, shows a placeholder message.
 */

import { prisma } from "@/utils/prisma";
import Post from "./Post";
import { auth } from "@clerk/nextjs/server";
import { FeedProps } from "@/types/interface";

const getFollowingUserIds = async (userId: string): Promise<string[]> => {
  const follows = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });

  return follows.map((follow) => follow.followingId);
};

const getProfileFeedCondition = (profileId: string) => ({
  parentPostId: null,
  userId: profileId,
});

const getHomeFeedCondition = async (currentUserId: string) => {
  const followingIds = await getFollowingUserIds(currentUserId);
  return {
    parentPostId: null,
    userId: {
      in: [currentUserId, ...followingIds],
    },
  };
};

const Feed = async ({ userProfileId }: FeedProps) => {
  const userId = "user5"; // TODO: Replace with `const { userId } = await auth();`

  if (!userId) return null;

  const whereCondition = userProfileId
    ? getProfileFeedCondition(userProfileId)
    : await getHomeFeedCondition(userId);

  const posts = await prisma.post.findMany({
    where: whereCondition,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
