
import { fetchFeedPosts } from "@/utils/feed";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  // const { userId: loggedInUserId } = await auth();
  const loggedInUserId = "user5";

  const searchParams = request.nextUrl.searchParams;
  //this is not the search params in the URL, but the query params in the request
  const userProfileId = searchParams.get("user") || undefined;
  const page = parseInt(searchParams.get("cursor") || "1");
  const LIMIT = 1;

  const { posts, hasMore } = await fetchFeedPosts({
    loggedInUserId,
    userProfileId,
    page,
    limit: LIMIT,
    includeExtra: true,
  });

  // const posts = await fetchFeedPosts({ loggedInUserId, userProfileId });


  console.log("Fetched Posts x:", posts);

  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate delay

  return Response.json({ posts, hasMore });
}
