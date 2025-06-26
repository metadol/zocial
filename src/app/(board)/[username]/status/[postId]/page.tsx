import Comments from "@/components/features/Comments";
import IKImageWrapper from "@/components/media/IKImageWrapper";
import Post from "@/components/feed/Post";
import Link from "next/link";
import FeedHeader from "@/components/feed/FeedHeader";

const StatusPage = () => {
  return (
    <div className="">
      <FeedHeader title="Post" />
      <Post type="status" />
      <Comments />
    </div>
  );
};

export default StatusPage;
