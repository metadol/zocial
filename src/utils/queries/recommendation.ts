import { prisma } from "@/utils/prisma";

/**
 * Get friend recommendations for a given user
 * @param userId - The ID of the current user
 * @param limit - Number of recommendations to return (default 3)
 */
export async function getFriendRecommendations(userId: string, limit = 3) {
  const followingIds = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });

  const followedUserIds = followingIds.map((f) => f.followingId);

  return prisma.user.findMany({
    where: {
      id: { not: userId, notIn: followedUserIds },
      followings: { some: { followerId: { in: followedUserIds } } },
    },
    take: limit,
    select: { id: true, displayName: true, username: true, img: true },
  });
}
