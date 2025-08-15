
import { prisma } from "@/utils/prisma";

/**
 * Retrieves a user's profile information, including their follower and following counts,
 * and whether the viewer is following the user.
 *
 * @param {string} username - The username of the user whose profile is being retrieved.
 * @param {string} viewerId - The ID of the viewer, used to determine whether the viewer is following the user.
 * @return {Promise<User | null>} A Promise that resolves to the user's profile information,
 * or null if the user does not exist.
 */
export async function getUserProfile(username: string, viewerId: string) {
  return prisma.user.findUnique({
    where: { username },
    include: {
      _count: {
        select: { followers: true, followings: true },
      },
      followings: {
        where: { followerId: viewerId },
      },
    },
  });
}
