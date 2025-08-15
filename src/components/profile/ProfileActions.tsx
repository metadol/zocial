import IKImageWrapper from "@/components/media/IKImageWrapper";
import { ActionButton } from "@/components/common/ui/Button";
import FollowButton from "./FollowButton";
import { ProfileActionsProps } from "@/types/interface";



export default function ProfileActions({ isFollowing = false, profileId }: ProfileActionsProps) {
  const actionIcons = ["more", "explore", "message"];

  return (
    <div className="flex w-full items-center justify-end gap-2 p-2">
      {actionIcons.map((icon) => (
        <div
          key={icon}
          className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-500 cursor-pointer"
        >
          <IKImageWrapper
            path={`icons/${icon}.svg`}
            width={20}
            height={20}
            alt={icon}
          />
        </div>
      ))}

      {/* Follow / Unfollow button */}
      <FollowButton
        isFollowing={isFollowing}
        profileId={profileId}
      />
    </div>
  );
}
