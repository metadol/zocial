import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Feed from "@/components/feed/Feed";
import FeedHeader from "@/components/feed/FeedHeader";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileActions from "@/components/profile/ProfileActions";
import ProfileDetails from "@/components/profile/ProfileDetails";
import { getUserProfile } from "@/utils/queries/profile";
import { getCurrentUserId } from "@/utils/currentuser";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  const userId = await getCurrentUserId();

  const user = await getUserProfile(username, userId);
  if (!user) return notFound();

  return (
    <div>
      <FeedHeader title={user.displayName || "Profile"} className="bg-blurBlack" />
      <div>
        <ProfileHeader
          avatarPath={user.img}
          coverPath={user.coverImg}
        />
        <ProfileActions
          isFollowing={!!user.followings.length}
          profileId={user.id}
        />
        <ProfileDetails user={user} />
        <Feed />
      </div>
    </div>
  );
}
