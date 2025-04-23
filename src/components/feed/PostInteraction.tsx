"use client";
import {
  CommentIcon,
  RepostIcon,
  LikeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@/components/common/ui/InteractionIcons";
import InteractionButton from "../common/ui/InteractionButton";

const interactions = [
  { icon: CommentIcon, count: 157, hoverColor: "iconBlue" as const },
  { icon: RepostIcon, count: 157, hoverColor: "iconGreen" as const },
  { icon: LikeIcon, count: 157, hoverColor: "iconRed" as const },
];

const extraInteractions = [
  { icon: BookmarkIcon, hoverColor: "iconBlue" as const },
  { icon: ShareIcon, hoverColor: "iconBlue" as const },
];

const PostInteractions: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-4 my-2 sm:gap-12 lg:gap-16 text-textPrimary">
      <div className="flex items-center justify-between flex-1">
        {interactions.map((interaction, index) => (
          <InteractionButton
            key={index}
            icon={interaction.icon}
            count={interaction.count}
            hoverColor={interaction.hoverColor}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {extraInteractions.map((interaction, index) => (
          <InteractionButton
            key={index}
            icon={interaction.icon}
            hoverColor={interaction.hoverColor}
          />
        ))}
      </div>
    </div>
  );
};

export default PostInteractions;
