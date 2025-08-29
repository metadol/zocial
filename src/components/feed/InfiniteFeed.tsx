"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { FeedProps } from "@/types/interface";
import Post from "./Post";

// Fetch function to retrieve posts with optional userProfileId
const fetchPosts = async (pageParam: number, userProfileId?: string) => {
  const query = `/api/posts?cursor=${pageParam}` + (userProfileId ? `&user=${userProfileId}` : "");
  const response = await fetch(query);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const InfiniteFeed = ({ userProfileId }: FeedProps) => {
  
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 2 }) => fetchPosts(pageParam, userProfileId),
    initialPageParam: 2,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 2 : undefined,
  });

  // Handle loading & error states
  if (error) return <div>Error loading posts: {(error as Error).message}</div>;
  if (status === "pending" || isFetching) return <div>Loading...</div>;

  // Flatten all posts from pages
  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={<h4>Loading more posts...</h4>}
      endMessage={<p style={{ textAlign: "center" }}>No more posts to show</p>}
    >
      {allPosts.map((post) => (
        <Post key={post.id} post={post} />
        // <div key={post.id}>post</div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteFeed;
