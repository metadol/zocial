import { prisma } from "@/utils/prisma";

// Fetch list of user IDs that the current user is following ( used for home feed )s
export const getFollowingUserIds = async (userId: string): Promise<string[]> => {
    const follows = await prisma.follow.findMany({
        where: { followerId: userId },
        select: { followingId: true },
    });

    return follows.map((follow) => follow.followingId);
};

// Condition for profile page feed (only that user's posts)
export const getProfileFeedCondition = (profileId: string) => ({
    parentPostId: null,
    userId: profileId,
});

// Condition for home feed (current user + following)
export const getHomeFeedCondition = async (currentUserId: string) => {
    const followingIds = await getFollowingUserIds(currentUserId);
    return {
        parentPostId: null,
        userId: {
            in: [currentUserId, ...followingIds],
        },
    };
};


/*
   * Fetches posts to show in the feed.
   * - If `userProfileId` is given → shows posts from that specific user (profile feed).
   * - If not → shows posts from the current logged-in user and people they follow (home feed).
*/
export const fetchFeedPosts = async ({
    loggedInUserId,
    userProfileId,
    page,
    limit,
    includeExtra = false,
}: {
    loggedInUserId: string;
    userProfileId?: string;
    page?: number;
    limit?: number;
    includeExtra?: boolean;
}) => {
    const isProfileFeed = !!userProfileId;
    const where = isProfileFeed
        ? getProfileFeedCondition(userProfileId)
        : await getHomeFeedCondition(loggedInUserId);

    // Always declare pagination fields, use undefined if not paginated
    const isPaginated = typeof page === "number" && typeof limit === "number";
    const take = isPaginated ? limit : undefined;
    const skip = isPaginated ? (page - 1) * limit : undefined;

    const posts = await prisma.post.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take,
        skip,
    });

    let hasMore = false;
    if (isPaginated) {
        const total = await prisma.post.count({ where });
        hasMore = page * limit < total;
    }

    return {
        posts,
        hasMore,
    };

};
