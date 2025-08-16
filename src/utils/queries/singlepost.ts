import { prisma } from "@/utils/prisma";

export async function getPostById(postId: number, loggedInUserId: string) {
    return prisma.post.findFirst({
        where: { id: postId },
        include: {
            user: {
                select: {
                    displayName: true,
                    username: true,
                    img: true,
                },
            },
            _count: {
                select: {
                    comments: true,
                    likes: true,
                    rePosts: true,
                },
            },
            likes: {
                where: { userId: loggedInUserId },
                select: { id: true },
            },
            rePosts: {
                where: { userId: loggedInUserId },
                select: { id: true },
            },
            saves: {
                where: { userId: loggedInUserId },
                select: { id: true },
            },
            comments: {
                include: {
                    user: {
                        select: {
                            displayName: true,
                            username: true,
                            img: true,
                        },
                    },
                    _count: {
                        select: {
                            comments: true,
                            likes: true,
                            rePosts: true,
                        },
                    },
                    likes: {
                        where: { userId: loggedInUserId },
                        select: { id: true },
                    },
                    rePosts: {
                        where: { userId: loggedInUserId },
                        select: { id: true },
                    },
                    saves: {
                        where: { userId: loggedInUserId },
                        select: { id: true },
                    },
                }
            }
        }
    });
}
