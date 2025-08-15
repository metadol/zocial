"use client";

import {
  CommentIcon,
  RepostIcon,
  LikeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@/components/common/ui/InteractionIcons";
import InteractionButton from "../common/ui/InteractionButton";

interface PostInteractionsProps {
  count: {
    likes: number;
    comments: number;
    rePosts: number;
  };
  isLiked?: boolean;
  isReposted?: boolean;
  isSaved?: boolean;
}

const interactions = [
  { icon: CommentIcon, hoverColor: "iconBlue" as const, value: "comments" as const },
  { icon: RepostIcon, hoverColor: "iconGreen" as const, value: "rePosts" as const },
  { icon: LikeIcon, hoverColor: "iconRed" as const, value: "likes" as const },
];

const extraInteractions = [
  { icon: BookmarkIcon, hoverColor: "iconBlue" as const, value: "saves" as const },
  { icon: ShareIcon, hoverColor: "iconBlue" as const, value: "shares" as const },
];

const PostInteractions: React.FC<PostInteractionsProps> = ({ count, isLiked, isReposted, isSaved }) => {
  // 🔹 Simple inline color mapping based on props
  const activeColors = {
    likes: isLiked ? "iconRed" : undefined,
    rePosts: isReposted ? "iconGreen" : undefined,
    comments: undefined,
    saves: isSaved ? "iconBlue" : undefined,
    shares: undefined,

  } as const;

  return (
    <div className="flex items-center justify-between gap-4 my-2 sm:gap-12 lg:gap-16 text-textPrimary">
      <div className="flex items-center justify-between flex-1">
        {interactions.map((interaction) => (
          <InteractionButton
            key={interaction.value}
            icon={interaction.icon}
            count={count[interaction.value]}
            hoverColor={interaction.hoverColor}
            color={activeColors[interaction.value]}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        {extraInteractions.map((interaction, index) => (
          <InteractionButton
            key={index}
            icon={interaction.icon}
            hoverColor={interaction.hoverColor}
            color={activeColors[interaction.value]}
          />
        ))}
      </div>
    </div>
  );
};

export default PostInteractions;
