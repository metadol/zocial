import Link from "next/link";
import IKImageWrapper from "../media/IKImageWrapper";
import { ActionButton } from "../common/ui/Button";
import { getCurrentUserId } from "@/utils/currentuser";
import { prisma } from "@/utils/prisma";
import { getFriendRecommendations } from "@/utils/queries/recommendation";
import { Avatar, AvatarWithName } from "../common/ui/Avatar";

const Recommendations = async () => {
  
  const userId = await getCurrentUserId();
  if (!userId) return null;


  const recommendedUsers = await getFriendRecommendations(userId);

  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight"> Who to follow</h1>
      {recommendedUsers.map((user, index) => (
        <div key={index} className="flex items-center justify-between">
          {/* Avatar and Info */}
          <AvatarWithName
            img={user.img}
            name={user.displayName || user.username}
            username={user.username}
          />
          {/* Follow Button */}
          <ActionButton actionText="Follow" />
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
