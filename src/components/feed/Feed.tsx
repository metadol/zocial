// Feed.tsx (Server Component)
import { prisma } from "@/utils/prisma";
import Post from "./Post";

const Feed = async () => {
  const posts = await prisma.post.findMany();

  console.log("Posts fetched:", posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Post />
        </div>
      ))}
    </div>
  );
};

export default Feed;
